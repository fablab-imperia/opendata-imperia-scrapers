export interface DatatoreResourceCreateParams {
    package_id: string;
    url: string;
    description?: string;
    format?: string;
    hash?: string;
    name?: string;
    resource_type?: string;
    mimetype?: string;
    mimetype_inner?: string;
    cache_url?: string;
    size?: number;
    upload?: any;
}