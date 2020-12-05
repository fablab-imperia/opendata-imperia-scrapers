import axios from 'axios';

export interface CkanError {
    message: string;
    __type: string;
}
 
export interface CkanResponse {
    success: boolean;
    result: string[];
    help: string;
    error?: CkanError
}

export interface CkanNewDatasetConfig {
    name: string;
    title?: string;
    author?: string;
    author_email?: string;
    maintainer?: string;
    maintainer_email?: string;
    license_id?: string;
    notes?: string;
    url?: string;
    version?: string;
    state?: string;
    type?: string;
    owner_org: string;
}

export interface CkanNewOrganizationConfig {
    name: string;
    id?: string;
    title?: string;
    description?: string;
    image_url?: string;
    state?: string;
    approval_status?: string;
}

export class CkanClient {

    constructor(private baseUrl: string, private key: string) {
        axios.defaults.baseURL = baseUrl;
        axios.defaults.headers.common['Authorization'] = key;
    }

    async getDatasets() : Promise<CkanResponse> {
        var response = await axios.post('/api/3/action/package_list');
        return response.data as CkanResponse; 
    }

    async createDataset(cfg: CkanNewDatasetConfig){
        var response = await axios.post('/api/3/action/package_create');
        return response.data as CkanResponse; 
    }

    async createOrganization(cfg: CkanNewOrganizationConfig) {
        var response = await axios.post('/api/3/action/organization_create', cfg);
        return response.data as CkanResponse; 
    }

    async removeOrganizationByName(id: string) {
        var response = await axios.post('/api/3/action/organization_delete', id);
        return response.data as CkanResponse; 
    }

    async getOrganizations() {
        var response = await axios.post('/api/3/action/organization_list');
        return response.data as CkanResponse; 
    }
}