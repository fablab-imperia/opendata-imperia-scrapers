
import { OrganizationsQueryParams } from './dtos/organizations-query-params';
import { promisify } from 'util';
import { CkanResponse } from './dtos/ckan-response';
import { OrganizationCreateParams } from './dtos/organization-create-params';
import { OrganizationDeleteParameters } from './dtos/organization-delete-params';
import { Client } from 'ckan';
import { DatasetDeleteParameters } from './dtos/dataset-delete-params';
import { CreateContextOptions } from 'vm';
import { DatastoreCreateParams, ResourceParams } from './dtos/datastore-create-params';


export class Ckan {

    client: Client;

    constructor(private baseUrl: string, private key: string) {
      this.client = new Client(this.baseUrl,this.key);
    }

    private async makePromiseForAction<T>(action: string, data: any): Promise<CkanResponse<T>|string> {
        const response = await promisify<string,any,string>(this.client.action).bind(this.client)(action, data);
        try {
        return JSON.parse(response) as CkanResponse<T>;
        } catch(e){
            return response;
        }
    }

    getOrganizations(queryParams?: OrganizationsQueryParams): Promise<CkanResponse<string[]>|string> {
        return this.makePromiseForAction<string[]>('organization_list', queryParams);
    }

    createOrganization(createParams?: OrganizationCreateParams): Promise<CkanResponse<string>|string> {
        return this.makePromiseForAction<any>('organization_create', createParams);
    }

    deleteOrganization(id: OrganizationDeleteParameters): Promise<CkanResponse<string>|string> {
        return this.makePromiseForAction<any>('organization_purge', id);
    }

    getDatasets(limit?: number, offset?: number): Promise<CkanResponse<string[]>|string> {
        return this.makePromiseForAction<string[]>('package_list',{limit: limit, offset: offset});
    }

    createDataset(datasetName: string, organizationId: string): Promise<CkanResponse<string>|string> {  
        return this.makePromiseForAction<any>('dataset_create', { name: datasetName, owner_org: organizationId });
    }

    deleteDataset(id: DatasetDeleteParameters): Promise<CkanResponse<string>|string> {
        return this.makePromiseForAction<any>('package_delete', id);
    }

    createDatasetResource(params: ResourceParams) {

    }

    createDataForDataset(params: DatastoreCreateParams): Promise<CkanResponse<any>|string> {
        return this.makePromiseForAction<any>('datastore_create', params);
    }

}