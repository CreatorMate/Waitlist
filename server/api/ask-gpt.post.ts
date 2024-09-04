import {OpenAI} from "openai";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    try {
        const {message} = body;
        const config = useRuntimeConfig();

        const openai = new OpenAI({
            apiKey: config.openAi.secretKey
        });

        const answer = await openai.chat.completions.create({
            messages: [
                //@ts-ignore
                {role: 'user', content: [
                        {
                            "text": getText(message),
                            "type": "text"
                        }
                    ]}],
            model: 'gpt-4o-mini',
            temperature: 0,
            max_tokens: 265,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        setResponseStatus(event, 201)
        return JSON.stringify({
            success: true,
            message: "Answer received.",
            data: answer
        });
    } catch (error: any) {
        if(error instanceof OpenAI.APIError) {
            setResponseStatus(event, 400)
            return JSON.stringify({success: false, error: 'Something went wrong while trying to ask gpt'})
        }
        setResponseStatus(event, 500)
        return JSON.stringify({success: false, error: '500 internal server error'})
    }
});

function getText(question: string) {
    const dataset = "\n" +
        "<about_creatormate>\n" +
        "yo, meet creator mate: your new bff in the creator world\n" +
        "\n" +
        "creator mate is a kickass dutch startup dreamed up by jens glerum and marnix vandooren. these guys have been hustlin' together for the last four years, launching businesses like creator talent agency and creator partnership agency. they've teamed up with creators you probs know like ben azelart, anotr, cordea, and tommyswereld.\n" +
        "\n" +
        "the spark for creator mate came when jens and marnix saw just how much creators juggle. you're not just a creator, you're the director, editor, writer, videographer, bookkeeper, salesperson, and so much more. building an audience and turning it into a tight-knit community is hard as hell, especially when you're running the whole show.\n" +
        "\n" +
        "working with creators, they realized how crucial it is to have a support system to hit those goals. but making that kind of help available to millions of creators? not so easy. enter: AI. they documented their work as “creator consultants” and found a lot of what they did was about figuring out what clicks with an audience and how to grow that connection into something special.\n" +
        "\n" +
        "they spent a ton of time creating, testing, and optimizing AI models. the goal? an AI that boosts creativity, not replaces it. this AI helps you understand your audience better, so you can make content that truly hits home. it’s like having a personal coach to help you build, grow, and even monetize your community.\n" +
        "</about_creatormate>\n" +
        "\n" +
        "<about_ai_capabilities>\n" +
        "creator mate wants to help creators in a way that's never been done before. their AI doesn’t just boost creativity; it streamlines it into real action. once you publish a concept through creator mate, the AI analyzes the data to understand why it performed the way it did. it learns from your unique thinking patterns and audience reactions to help generate new ideas that resonate even more.\n" +
        "\n" +
        "they’ve tested a model that works, but they’re still fine-tuning it to see how it fits best with creators. imagine an AI that evolves with your creativity, making every new project better than the last. pretty rad, right?\n" +
        "</about_ai_capabilities>\n" +
        "\n" +
        "<about_creator_stories>\n" +
        "right now, creator mate is in private beta, working closely with a select group of creators. the team is helping these creators 1:1, and every insight gained is fed back into the AI to make it smarter for future users. jens and marnix have worked with some well-known creators over the past five years, and while they prefer not to take credit for others’ creativity, you can check out their social media to see who they’ve collaborated with.\n" +
        "</about_creator_stories>\n" +
        "\n" +
        "<about_feedback>\n" +
        "since they’re still in private beta, there’s limited feedback from users outside their inner circle. but those who have experienced the AI are stoked, saying it’s unlike anything they’ve tried before. they see so much potential, and so does the creator mate team!\n" +
        "</about_feedback>\n" +
        "\n" +
        "<about_vision>\n" +
        "creator mate’s long-term vision is to become the go-to company in the creator economy. they want every creative individual with a story to feel seen and supported. they’re building the infrastructure to get creators the exposure they deserve and the money they need—not just to survive, but to take their art to the next level.\n" +
        "</about_vision>\n" +
        "\n" +
        "<about_community>\n" +
        "creator mate isn’t just about online success; they’re all about real-world connections too. they’re planning to host meetups and worldwide collaborations. the highlight? helping creators take their online audience to offline events. imagine hosting your first live event and building meaningful relationships with your fans in person. creator mate is here to make that happen.\n" +
        "</about_community>\n" +
        "\n" +
        "<about_philosophy>\n" +
        "so, how does creator mate think you can grow as a creator? check this out:\n" +
        "\n" +
        "through loads of testing and experience, they’ve come up with strategies for real growth. platforms like instagram put profiles into niches and value them based on what they offer. once your profile has high value and a clear niche, insta shows your content to people who are most likely to dig it.\n" +
        "\n" +
        "example time: if you're a personal trainer sharing your workout schedule, engage with fitness-focused accounts. when you post, your content will get in front of these fitness fans, letting you fine-tune your content for the perfect audience.\n" +
        "\n" +
        "here are the key metrics to keep an eye on:\n" +
        "- reach\n" +
        "- engagement\n" +
        "- saves\n" +
        "- likes\n" +
        "- shares\n" +
        "- profile clicks\n" +
        "- new followers from profile clicks\n" +
        "- story views from non-followers\n" +
        "- retention rate\n" +
        "\n" +
        "tracking these helps you see what your audience loves. analyzing this data lets you create more engaging posts that your followers will adore.\n" +
        "\n" +
        "creator mate uses all this info to help you build, grow, and monetize your audience. from breaking down data insights to handling your to-do list, it’s like having a virtual team right beside you.\n" +
        "</about_philosophy>\n" +
        "\n" +
        "<about_team>\n" +
        "based in amsterdam, the netherlands, creator mate has scored $200K to craft custom solutions for their community of local creators. here’s the team:\n" +
        "\n" +
        "- jens glerum, ceo & co-founder\n" +
        "- marnix vandooren, coo & co-founder\n" +
        "- robin mons, lead developer\n" +
        "- jesse vermeulen, head of design\n" +
        "- jelmer hilhorst, head of ai\n" +
        "- boni dewanti, head of productions\n" +
        "- gedewa van maanen, graphic designer\n" +
        "</about_team>\n" +
        "\n" +
        "<about_founders>\n" +
        "let’s get to know the founders a bit better:\n" +
        "\n" +
        "jens glerum, 22, from amsterdam, has been in the marketing game for years. he became an e-commerce manager at 18 and started teaming up with marnix at 19. inspired by casey neistat, jens, who has adhd and a super creative mind, found his groove in exploring creativity. besides creator mate, he’s a fashion/graphic designer and a jazz drummer.\n" +
        "\n" +
        "marnix vandooren, 24, from the hague, has worked on loads of startups. he joined the dutch army for nearly a year, fulfilling a childhood dream. marnix is the analytical brain, making sure the startup runs smoothly and efficiently.\n" +
        "\n" +
        "jesse vermeulen, 26, from amsterdam, has worked for airfoill, a leading web3 design agency. known for his minimalistic designs and unique diet of raw foods, jesse brings a fresh perspective to the team.\n" +
        "\n" +
        "jelmer hilhorst, 24, from utrecht, co-founded a dutch ai agency called royalution. he’s the guy building the ai model for creator mate. jelmer loves steak and is always scouting new restaurants for the team.\n" +
        "\n" +
        "boni dewanti, 24, from zevenaar, is a passionate cinematographer. she handles all content creation for creator mate. boni’s into traveling, camping, and nature.\n" +
        "\n" +
        "robin mons, 24, from arnhem, is the lead developer, making sure everything works seamlessly. he’s also a musician who loves creating and jamming to music.\n" +
        "</about_founders>\n" +
        "\n" +
        "<about_focus_and_future>\n" +
        "creator mate recently raised $220K, giving them a 6-7 month runway to build and test their platform with full-time creators. their goal? grow this community to over 10K content creators and secure more investment to speed up their journey.\n" +
        "\n" +
        "they’re also cooking up brand partnership programs, matching brands with creators based on style, audience interests, and other cool metrics. creator mate believes in long-term partnerships where creators offer something special to their audience, and brands gain from established communities.\n" +
        "</about_focus_and_future>\n" +
        "\n" +
        "<about_faq>\n" +
        "- **is it free?** yeah, at least for now. creator mate's goal is to build a real solution for creators, and if they can't help you, they don't think you should have to pay.\n" +
        "- **when do applications end? when will i know if i got in?** they’re in closed beta until february 2025. wanna boost your chances? improve your application score.\n" +
        "- **how do you make money?** right now, they don’t. the goal is to never charge without providing real value.\n" +
        "- **what kind of creators are accepted?** anyone who’s genuinely excited about their work, be it robotics, dancing, music, or whatever else.\n" +
        "- **can i apply as a team?** yep! one person needs to apply, but include info about your team members.\n" +
        "- **what if i'm already creating content?** awesome! apply with what you’re already doing and let them know how it’s going.\n" +
        "- **who can apply?** anyone, any age, anywhere. students are welcome too.\n" +
        "- **does it have to be a new idea or something i’m already working on?** doesn’t matter. the goal is to create and iterate over six weeks.\n" +
        "- **i’m not yet posting content. can i still apply?** absolutely. they welcome creators at all stages. if you’ve got a story to tell, they wanna help you share it.\n" +
        "</about_faq>\n" +
        "\n" +
        "<about_vision>\n" +
        "creator mate wants to be the go-to partner for creators. they’re all about helping you find your purpose, nail your content market fit, and monetize in a meaningful way. whether it’s through brand partnerships or launching your own products, they’re here to support your journey.\n" +
        "\n" +
        "they’re on a mission to help creators produce meaningful content that activates, motivates, and inspires their audience. they wanna make the internet social again, building frameworks that support every creative mind and workflow.\n" +
        "</about_vision>\n" +
        "\n" +
        "<about_features_and_goals>\n" +
        "creator mate helps you figure out your purpose on platforms like instagram, define your audience’s interests, and turn data into actionable insights. they offer both free and AI-enhanced tools to streamline your creative\n" +
        "\n" +
        " process.\n" +
        "\n" +
        "they’ve got some exciting features coming up, like collaboration tools that match you with other creators, brands, investors, and more. the aim? help you grow your online presence and start making bank from your work.\n" +
        "\n" +
        "initially, they’re focusing on helping new creators grow their audience and turn it into a community. they believe the creator economy can make the internet a more social place. they’re building a global community of creators, tackling everything from content creation to mental struggles.\n" +
        "</about_features_and_goals>\n" +
        "\n" +
        "<about_monetization>\n" +
        "creator mate helps you monetize by figuring out your audience’s interests and suggesting relevant products or services. they match brands with creators who share similar audiences and suggest collab strategies that benefit both sides.\n" +
        "\n" +
        "their goal? help you grow faster and more meaningfully, while also getting paid for your impact. they plan to bring on more team members with experience in the creator economy to keep pushing their mission forward.\n" +
        "</about_monetization>\n" +
        "\n" +
        "---\n" +
        "\n" +
        "\n" +
        "\n" +
        "<questions-creators-might-have>\n" +
        "what is creatormate?\n" +
        "yo, meet creatormate: your new bff in the creator world. it's a kickass dutch startup by jens glerum and marnix vandooren. we use ai to help creators understand their audience and make killer content that hits home.\n" +
        "who’s making the short form content?\n" +
        "it’s our freaking talented videographer and head of production @bonifilms. if you haven’t seen his work – go check it out. we're looking for amazing talented content creators to join us. interested? send us a dm on instagram!\n" +
        "who did the logo design?\n" +
        "jesse vermeulen, our insanely talented designer, did the first few sketches. he’s got more cool stuff coming soon.\n" +
        "how will creatormate help me?\n" +
        "creatormate helps you understand your audience, boost creativity, and grow your community. it's like having a personal coach to help you build and monetize your content.\n" +
        "what brands are working with creatormate?\n" +
        "we're finalizing partnerships with big names, from social media giants to fortune 500 companies. media is shifting to individual creators, and we're here to help you make those genuine connections.\n" +
        "how did they raise $200k?\n" +
        "creatormate raised $200k by showcasing our vision and potential. we’re building the best tool for creators and have amazing backers supporting us.\n" +
        "can i join the team?\n" +
        "absolutely! we’re looking for talented content creators, designers, and more. if you're interested, send us a dm on instagram!\n" +
        "\n" +
        "who are new upcoming creators?\n" +
        "some amazing upcoming creators are:\n" +
        "@boys.with.the.bus\n" +
        "@aligallop\n" +
        "@leomagnusolsson\n" +
        "@the.creators.cut\n" +
        "@babybushwhacked\n" +
        "@anna_barger\n" +
        "@tejashullur\n" +
        "@helenemoo\n" +
        "what makes creatormate different from other ai tools?\n" +
        "creatormate isn’t just about churning out generic ideas. it learns your unique vibe and helps you create content that really connects. think of it as a personal coach that evolves with you, making every project better.\n" +
        "can creatormate help me with video editing?\n" +
        "hell yeah! while creatormate focuses on boosting your creativity, it can also help with video editing by suggesting improvements and streamlining your process.\n" +
        "how do i get access to the private beta?\n" +
        "apply through our platform! we’re looking for passionate creators who can give us solid feedback. applications are open until february 2025.\n" +
        "what kind of feedback do you need from beta testers?\n" +
        "we want it all—what you love, what you don’t, and what could be better. your detailed feedback helps us make creatormate the best it can be.\n" +
        "how does creatormate handle my data?\n" +
        "privacy first. we use your data to tailor insights to your style and never share it without permission. your data helps us help you grow.\n" +
        "can creatormate help me with brand partnerships?\n" +
        "absolutely! creatormate matches you with brands that fit your style and audience, helping you brainstorm authentic collab ideas.\n" +
        "is there a community for creators using creatormate?\n" +
        "yep! you’ll join a network of creators where you can share tips, collab, and support each other. we also host events and meetups for real-life connections.\n" +
        "what if i'm not tech-savvy? can i still use creatormate?\n" +
        "totally! creatormate is super user-friendly with tutorials and support to guide you. we want every creator, tech-savvy or not, to level up their content game.</questions-creators-might-have>\n" +
        "\n";

    return `Here is a dataset containing information about a company:\n\n<dataset>\n${dataset}\n</dataset>\n\nA user will ask a question about the company. Please provide the question inside <question> tags:\n\n<question>\n${question}\n</question>\n\nTo answer the question, carefully search the provided dataset for any information that is relevant to the question. If you find relevant information, extract the key quotes or facts and include them inside <relevant_info> tags. For example:\n\n<relevant_info>\nThe company was founded in 2010.\nIn 2021, the company had $25 million in revenue.\n</relevant_info>\n\nThen, compose an answer to the question based solely on the information you extracted. Do not add any claims or speculative statements that are not directly supported by the extracted information. Provide your answer inside <answer> tags, like this:\n\n<answer>\nBased on the information provided, the company was founded in 2010 and had revenue of $25 million in 2021.\n</answer>\n\nIf after searching the dataset you do not find any information that is relevant to answering the question, simply respond with:\n\n<answer>\nI do not have enough information to answer this question.\n</answer>\n\nIt is very important that you do not make any claims in your answer that are not directly stated in the provided dataset. If the dataset does not contain the information needed to answer the question, do not try to speculate or make up an answer. Only answer if you can do so based strictly on the facts provided in the dataset.`
}