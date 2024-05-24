import {OpenAI} from "openai";
import {RoyalReturn, Royalution} from "~/server/app/Royalution";

export default defineEventHandler(async (event): Promise<string> => {
    const body = await readBody(event);
    const config = useRuntimeConfig();

    const response = await Royalution.send(config.royalution.apiKey,  body);

    setResponseStatus(event, response.code)
    return JSON.stringify(response);
});
