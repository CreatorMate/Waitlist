import {ca} from "cronstrue/dist/i18n/locales/ca";
import {useToastStore} from "~/src/toast/ToastStore";

export class Royalution {
    static async send(apiKey: string, body: any): Promise<RoyalReturn> {
        try {
            const request = await fetch(`https://creatormate-waitinglist-production.azurewebsites.net/api/generate-response?code=${apiKey}`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            return this.getResponse(request)

        } catch (e) {
            return {
                success: false,
                code: 500,
                response: "",
                valid: false,
                category: "",
                name: "",
                location: ""
            }
        }

    };

    private static async getResponse(request: Response): Promise<RoyalReturn> {
        if(request.ok) {
            const data = await request.json();
            return {
                success: true,
                code: data.code,
                response: data.response,
                valid: data.valid,
                category: data.category,
                name: data.name ?? "",
                location: data.location ?? ""
            };
        }

        console.error(request.status);

        return {
            success: false,
            code: request.status,
            response: "",
            valid: false,
            category: "",
            name: "",
            location: ""
        }
    }
}

export interface RoyalReturn {
    code: number
    success: boolean,
    response: string,
    valid: boolean,
    category: string,
    name: string,
    location: string
}