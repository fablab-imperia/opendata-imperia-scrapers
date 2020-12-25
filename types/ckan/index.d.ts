declare module 'ckan' {
    export class Client {
        constructor(url: string, apiKey?: string);

        action(actionName: string, data: any,  callback: (err: any, result: any) => void );
    }
}