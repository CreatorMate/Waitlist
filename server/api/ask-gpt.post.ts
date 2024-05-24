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
            model: 'gpt-3.5-turbo-16k',
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
    const dataset = "creator mate is a dutch started founded by jens glerum & marnix vandooren. these two have been working together for the past 4 years, founded multiple creator focused business such as creator talent agency, creator partnership agency, and as individuals working with creators they were close to such as Ben Azelart, Anotr, Cordea, Tommyswereld.\n" +
        "\n" +
        "creator mate started when both co-founders discovered that as a creator you need juggle way to many roles at once if you want to experience any form of success. for example, as a creator who is starting, you are the director, editor, writer, videographer, bookkeeper, sales person, and much much more. this is not even considering what it takes to succeed as a creator, because building an audience online and turning this into a community is really hard, especially when you are the brains and the face.\n" +
        "\n" +
        "we had the opportunity to work closely with creators for the past few years, and see what it does when others help them achieve their goals. knowing that this isn’t scaleable (meaning we can’t help millions of creators at once) we started exploring other options. during this period AI became more trustworthy, and reliable. we started discovering and documenting what it is we actually do as “creator consultants” and found out that most of our job is analysing what sticks with your audience and how we can enhance this to create a meaningful connection, and a community people want to be a part off. \n" +
        "\n" +
        "we took the time to create, test, analyse, and optimise multiple AI models. Seeking for one who helped creators best, considering that we need to enhance & stimulate their creativity instead of trying to replace it, help them learn and understand what we found within their data (relationship with audience) make sure they know best what it is they’re audience wants to see, and just helping on the side making sure this is also what is being created and distributed. and of course many more things that will help creators build, grow & monetise their community.\n" +
        "\n" +
        "yes, monetisation! Probably not in the way you think of right now – we want creators to suggest to their audience instead of sell to their audience, and find ways for brands and creators to collaborate in this way. BUT we also believe that creators should focus on creating digital equity in their own products, services, content, etc. \n" +
        "\n" +
        "we want to help people make of living by doing what they love.\n" +
        "\n" +
        "if we can help creators by sharing insights from their profile, defining what it is their audience actually would want, and in what way we can do this while also making sure we can put bread on the table – it would be insane.\n" +
        "\n" +
        "\n" +
        "so how do we think you grow as a creator? what is our philosophy? \n" +
        "\n" +
        "after working with many creators and testing first hand strategies that enabled qualitative growth these were the best self tested strategies!\n" +
        "\n" +
        "So this is actually how the platforms work (instagram) \n" +
        "instagram ranks each profile (from creators and consumers) in categories, from niches (interest) to value (activity & consumebility) once your profile has a high value and your niche is clear to instagram, your content will be tested to an audience similar to those who currently engage most with your profile, but also user groups similar to the profiles you engage most with.\n" +
        "\n" +
        "meaning that if you are a personal trainer posting content online about your training schedule and body transformations, make sure to engage with accounts who could be interested, these can best be found when looking for profiles who are successful (high engagement rate) and engaging with their audiences.\n" +
        "\n" +
        "then when you publish content it is shown/ tested to those accounts you think are interested. THEN we can finally analyse and optimise your content! Because most accounts (if they even analyse) analyse & optimise their content for the wrong audience.\n" +
        "\n" +
        "So now that we know the audience our latest posts are suggested to we can check in analytics how they are responding, matrics that we care about are:\n" +
        "reach\n" +
        "engagement\n" +
        "saves\n" +
        "likes\n" +
        "shares\n" +
        "profile clicks\n" +
        "profile clicks into new followers\n" +
        "story views from non follower accounts\n" +
        "closed story\n" +
        "watched back\n" +
        "retention rate\n" +
        "\n" +
        "these insights will help us gain understanding of what really interest our audience, but only once we know the concept of the post is clear, is related to one specific topic and allows us to get some insight in the audience interest.\n" +
        "\n" +
        "then we can color in this data, analyse what really interest your audience, and how we can implement these learnings into our new posts.\n" +
        "\n" +
        "\n" +
        "these insights in what interest our audience in the form of:\n" +
        "the topic of the content\n" +
        "the format of the content\n" +
        "the way audiences can engage with the content\n" +
        "what the audience does after consuming the content\n" +
        "what happens to new viewers consuming the content?\n" +
        "what happens to followers consuming the content?\n" +
        "\n" +
        "when we discover this we can really help creators in many ways, from growing your audience, partnering with brands, partnering with other relevant creators to your community, launching own products, and services, etc. \n" +
        "\n" +
        "so creator mate is using all this knowledge is trained to contextualise and categorise data, to help you build, grow & monetise your audience. from explaining its findings, to taking tasks of your to-do list, helping with engagement, and so much more.\n" +
        "\n" +
        "\n" +
        "\n" +
        "creator mate is actually a startup from Amsterdam, The Netherlands. they (a team of seven) raised $200K to build custom solutions for their community of local creators.\n" +
        "\n" +
        "our team:\n" +
        "ceo & co-founder – Jens Glerum\n" +
        "coo & co-founder – Marnix Vandoore\n" +
        "Lead developer – Robin Mons\n" +
        "head of design – Jesse Vermeulen\n" +
        "Head of AI – Jelmer Hilhorst\n" +
        "Head of productions – Boni Dewanti\n" +
        "Graphic designer – Gedewa van Maanen \n" +
        "\n" +
        "Jens Glerum is 22 years old, from Amsterdam – worked in marketing for the past few years. at 18 became e-commerce manager at Four Amsterdam (kids) at 19 started working with Marnix Vandooren, helping brands & creators build a community through social media. \n" +
        "Jens grew up watching Casey Neistat who in his own words “changed his life” as someone with ADHD and a creative mind you don’t really fit in society, Casey showed him that it was normal to be and explore your creativity giving him the strengths he needed to do what he did the past few years. besides what jens does at creator mate he is also active as a fashion/ graphic designer, but also a jazz drummer (sort off/ self titled 😋) \n" +
        "\n" +
        "Marnix vandooren is 24 years old, from The Hague – working on many startups in the past, from launching a biro sharing platform to working overseas in Los Angeles with creators, and building creator-led companies. Marnix is a real analyst, someone who makes sure we as a startup get shit done in the best/ leanest way possible, overseeing everyone's processes.\n" +
        "besides work marnix had a “let’s say” unique past, besides his ventures – marnix also decided to join the dutch army almost 2 years ago, leaving his “favorite” partner & friend jens behind to go all-in on his childhood dream. marnix served for almost a year, but didn’t had any trips to the enemy. \n" +
        "\n" +
        "Jesse Vermeulen is 26 years old, from Amsterdam – worked for AirFoill, being one of the largest web3 design agencies in the world, Jesse had the opportunity to work large companies like Near, Polygon, and Solana. Jesse now is responsible for all the amazing, minimalistic design you are experiencing right now. besides his work as a designer jesse is also known for his extremely “interesting” diet, where he will eat raw food (like milk, meat, eggs, etc) jesse is truly someone who will flabbergast you with some of his hobbies & routines.\n" +
        "\n" +
        "Jelmer Hilhorst is 24 years old, from Utrecht – co-founder of a dutch ai agency called royalution, together with his team jelmer is building the ai model for creator mate, having the insanely hard job creating a workflow to stimulate creative people’s creativity. besides work jelmer loves to check out some great restaurants, primarily steak restaurants. don’t ask me how i know, but the team has been pitched a few restaurants many times ;)\n" +
        "\n" +
        "\n" +
        "Boni Dewanti is 24 years old, from Zevenaar (yes, you read this right) – boni is what you can call a f*cking creative person, with his passion for cinematography boni almost always brings a camera. from recording for large artist to his own hobby projects, he has truly done it all and is ready to share some of his learnings with us and make sure your creativity is titled to the next level. boni is responsible for all the content you see from creator mate, from concept to execution he is doing almost everything by himself. besides working (which boni doesn’t think is work) is traveling, camping, in general being in nature.\n" +
        "\n" +
        "Robin Mons is 24 years old, from Arnhem – lead developer of creator mate, making sure that every button you press is working to it’s best capabilities (if not, he will get fired “joking”) robin is working with (tech-stack) to build a version of creator mate creators will truly admire the work for, as he is someone who cares about all the details (all the details), besides work robin is a musician who loves to create his own music, listen to music, and being out there with friends having fun. \n" +
        "\n" +
        "\n" +
        "\n" +
        "where are we focussing on now with creator mate?\n" +
        "\n" +
        "we just raised $220K which with our current team gives us a runway of 6/7 months to build our first version of the platform that we can test with our community of full-time creators in need of more clarity about their audience interest, ways to can expand their reach & identify ways to monetize their reach/ community. besides building this version of the platform we also need to build an interactive waitlist platform where we can learn more information about the creator community, provide resources, and identify how creators benefit from this. \n" +
        "\n" +
        "our goal is to grow this community to +10K content creators with the ambition to become a full-time creator. if we are able to achieve this we will raise a second round of investment of around a million dollars to speed up the process, by hiring more talented individuals who understand and resonate with our mission. we also believe that with this money we have the ability and job to show what the creator economy really stands for, showing that the number on your profile are truly real people by hosting irl events for creators and their community. \n" +
        "\n" +
        "we are also working on doing brand partnership programs where we manually select brands who we feel like understand the true value of working with content creators (not ugc creators) and stimulate partnerships between creators and brands, where creators are being suggested to a brand based on their content style, audience interest, personal interest, fit with the brand, brand community, brand status, etc. we also believe that a partnership should last a period of time where the creator can really offer something special to their audience, and the brand can leverage from working with existing communities, meaning our AI model will help brainstorm ways to collaborate, what pricing method we would suggest based on both data points we know, and ofcourse for what period of time you should work and after what metrics you should consider long term partnerships.\n" +
        "\n" +
        "\n" +
        "here are some other questions creators might have:\n" +
        "\n" +
        "is it this free? \n" +
        "yes, at least at the start. we're funded to build a real solution for creators, if we can’t help – you shouldn’t pay. this is simply a home for creators to work on your ideas.\n" +
        "\n" +
        "\n" +
        "\n" +
        "when do applications end? when do I find out if i got in? \n" +
        "we are in closed beta till februari 2025, before all applicants can increase their chances of getting into the beta, by increasing their application score. \n" +
        "\n" +
        "\n" +
        "\n" +
        "wait so how do you make money!? \n" +
        "as of right now, we don't.  and, our goal is to never charge the user. but, have a guaranteed outcome for our users “if we charge them.” \n" +
        "\n" +
        "\n" +
        "\n" +
        "what kind of creators are accepted? \n" +
        "we don't care as long as it's something you're genuinely excited about. could be in robotics, dancing, entrepreneurship, music, whatever — just apply. \n" +
        "\n" +
        "\n" +
        "\n" +
        "what if i have a team? \n" +
        "applying as a team is completely okay. only one person needs to apply. let us know in your application the other people on your team, so we can get in contact to build a custom space for creators and their team.\n" +
        "\n" +
        "\n" +
        "\n" +
        "what if i'm already creating content? \n" +
        "that's even better. you can apply with the content you're already publishing. be sure to let us know how it's going! \n" +
        "\n" +
        "\n" +
        "\n" +
        "who can apply? \n" +
        "anyone. we accept people of all ages, from all over the world. totally fine if you're a student as well. \n" +
        "\n" +
        "\n" +
        "\n" +
        "\n" +
        "does it have to be a brand new idea or something i am already working on? \n" +
        "doesn't matter if you're already working on the next big idea or in between ideas. the goal is to just ship for six weeks and iterate! \n" +
        "\n" +
        "\n" +
        "\n" +
        "i am not yet posting content. can i still apply? \n" +
        "yes :). we started off focusing on established creators, but, now the ecosystem is pretty diverse with people from all stages – if you feel like you have a story, let’s make sure we share it right.\n";

    return `Here is a dataset containing information about a company:\n\n<dataset>\n${dataset}\n</dataset>\n\nA user will ask a question about the company. Please provide the question inside <question> tags:\n\n<question>\n${question}\n</question>\n\nTo answer the question, carefully search the provided dataset for any information that is relevant to the question. If you find relevant information, extract the key quotes or facts and include them inside <relevant_info> tags. For example:\n\n<relevant_info>\nThe company was founded in 2010.\nIn 2021, the company had $25 million in revenue.\n</relevant_info>\n\nThen, compose an answer to the question based solely on the information you extracted. Do not add any claims or speculative statements that are not directly supported by the extracted information. Provide your answer inside <answer> tags, like this:\n\n<answer>\nBased on the information provided, the company was founded in 2010 and had revenue of $25 million in 2021.\n</answer>\n\nIf after searching the dataset you do not find any information that is relevant to answering the question, simply respond with:\n\n<answer>\nI do not have enough information to answer this question.\n</answer>\n\nIt is very important that you do not make any claims in your answer that are not directly stated in the provided dataset. If the dataset does not contain the information needed to answer the question, do not try to speculate or make up an answer. Only answer if you can do so based strictly on the facts provided in the dataset.`
}