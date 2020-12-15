export interface OrganizationsQueryParams {
    order_by?: 'name' | 'packages';
    sort?: 'name asc' | 'name desc' | 'package_count asc' | 'package_count desc' | 'title asc' | 'title_desc';
    limit?: number;
    offset?: number;
    organizations?: string[];
    all_fields?: boolean;
    include_dataset_count?: boolean;
    include_extras?: boolean;
    include_tags?: boolean;
    include_groups?: boolean;
    include_users?: boolean; 
}