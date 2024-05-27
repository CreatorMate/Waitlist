import type {RoyalReturn} from "~/server/app/Royalution";
import {useToastStore} from "~/src/toast/ToastStore";
import {ToastType} from "~/src/toast/ToastType";
import {useAccountStore} from "~/src/account/AccountStore";
import {SupabaseTables} from "~/src/SupabaseTypes";

interface OnboardingQuestion {
    step: number,
    category: string,
    answer: string
}

interface OnboardingHistoryItem {
    question: string,
    answer: string
}

export class OnboardingHandler {
    private toastStore = useToastStore();
    private accountStore= useAccountStore();
    private router = useRouter();
    public step = ref(1);
    public total = ref(4);
    public name: string = "";
    public chatHistory: OnboardingHistoryItem[] = [];
    private client = useSupabaseClient();


    public questions: OnboardingQuestion[] = [];

    constructor() {
        this.questions.push({
            step: 1,
            category: "introduction",
            answer: "",
        });
        this.questions.push({
            step: 2,
            category: "creator",
            answer: "",
        });
        this.questions.push({
            step: 3,
            category: "content",
            answer: "",
        });
        this.questions.push({
            step: 4,
            category: "avatar",
            answer: "",
        });
        this.questions.push({
            step: 5,
            category: "socials",
            answer: "",
        });
    }

    async answer(answer: string): Promise<{question: string, category: string}> {
        this.chatHistory[this.chatHistory.length-1].answer = answer;
        //ask royalution
        const request = await fetch("/api/onboarding/ask-royalution", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                category: this.questions[this.step.value-1].category,
                answer: answer,
                history: this.chatHistory
            })
        })
        const response: RoyalReturn = await request.json();

        if(response.code == 429 || response.code == 504) {
            this.toastStore.addToast("Timed out, try again later", ToastType.ERROR);
        }

        if(!response.success) {
            return {
                question: "",
                category: "error"
            }
        }

        if(response.valid) {
            if(response.name.length > 0) {
                this.name = response.name;
                this.accountStore.username = response.name;
            }
            this.questions[this.step.value-1].answer = answer;
            this.step.value++;
            let newQuestion = `${response.response}\n\n${this.getQuestionByStep()}`
            this.addQuestionHistory(newQuestion);
            return {
                question: newQuestion,
                category: this.questions[this.step.value-1].category,
            };
        }

        this.addQuestionHistory(response.response);

        return {
            question: response.response,
            category: this.questions[this.step.value-1].category,
        };
    }

    addQuestionHistory(question: string) {
        this.chatHistory.push({
            question: question,
            answer: ""
        })
    }

    getQuestionByStep(): string {
        switch (this.step.value) {
            case 1: {
                return "hello friend glad you've decided to join the waitlist for creator mate." +
                "\n\n" +
                "let's start your journey. this will take 60-seconds max. promise." +
                "\n\n" +
                "If you have any issues - feel free to email us at support@creatormate.com." +
                "\n\n" +
                "Okay, first:" +
                "\n\n" +
                "what's your name & where are you based (ex, hi im jens, im from amsterdam)"
            }
            case 2: {
                return `ok ${this.name}, let's talk about you. what creator do you want to be in 5 years? 

it can be anything, dream big! example; a barber creator, cutting other creators while interviewing them on topics that interest me such as personal growth, mental health, and manifesting. 

don't worry if you aren't 100% sure yet. just share what's on your mind in 1-2 sentences.`;
            }
            case 3: {
                return "";
            }
            case 4: {
                return "please upload a photo of yourself that captures your vibe. a real pic of you is ideal but an anime avatar works too if you prefer. you can upload it below.";
            }
            default: {
                return "";
            }
        }
    }

    getOnboardingObject() {
        return {
            user_id: this.accountStore.userId,
            introduction: this.questions[0].answer,
            content:  this.questions[1].answer,
            creator:  this.questions[2].answer
        }
    }

    async save() {
        const {error: deleteError, data: deleteData} = await this.client.from(SupabaseTables.Onboarding).delete().eq('user_id', this.accountStore.userId)
        //@ts-ignore
        const{error, data} = await this.client.from(SupabaseTables.Onboarding).insert(this.getOnboardingObject())
        if(deleteError || error) {
            this.toastStore.addToast("Something went wrong trying to save your progress. Please try again.", ToastType.ERROR);
            return;
        }
        this.accountStore.completedOnboarding = true;
        await this.accountStore.update();
        await this.router.push('/home');
    }
}