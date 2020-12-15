export interface CkanResponse<T> {
    help: string;
    success: boolean;
    error?: any;
    result?: T;
}