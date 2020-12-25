import dotEnvExtended from 'dotenv-extended';
dotEnvExtended.load(); 

export const ApiConfig =  {
    Url: process.env.API_URL ?? '',
    Key: process.env.API_KEY ?? '',
}
