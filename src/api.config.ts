import dotenv from 'dotenv';

dotenv.config();

export const ApiConfig =  {
    Url: process.env.API_URL ?? '',
    Key: process.env.API_KEY ?? '',
}
