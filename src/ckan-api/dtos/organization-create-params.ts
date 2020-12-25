export interface OrganizationCreateParams {
    name: string;
    id?: string;
    title?: string;
    description?: string;
    image_url?: string;
    state?: 'active' | 'delete';
    approval_status?: string;

}