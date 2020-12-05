import 'dotenv/config'

export class ApiConfig {
    static Url: string  = process.env.API_URL ?? '';
    static Key: string  = process.env.API_KEY ?? '';
}
