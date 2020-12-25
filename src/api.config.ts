import dotEnvExtended from 'dotenv-extended';


export class ApiConfig {

    Url: string;
    Key: string;

    constructor(dotenvPath: string = process.cwd()){
        dotEnvExtended.load({
            path: `${dotenvPath}/.env`
        }); 
        this.Url = process.env.API_URL ?? '';
        this.Key = process.env.API_KEY ?? '';
    }
}
