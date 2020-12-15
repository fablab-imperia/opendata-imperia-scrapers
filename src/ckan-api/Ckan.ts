import {Client} from 'ckan';
import { OrganizationsQueryParams } from './dtos/organizations-query-params';
import { promisify } from 'util';
import { CkanResponse } from './dtos/ckan-response';


export class Ckan {

    client: Client;

    constructor(private baseUrl: string, private key: string) {
      this.client = new Client(this.baseUrl,this.key);
    }

    private async makePromiseForAction<T>(action: string, data: any): Promise<CkanResponse<T>> {
        const response = await promisify<string,any,string>(this.client.action).bind(this.client)(action, data);
        return JSON.parse(response) as CkanResponse<T>;
    }

    createDataset(datasetName: string, organizationId: string): Promise<CkanResponse<string>> {  
         return this.makePromiseForAction<string>('dataset_create', { name: datasetName, owner_org: organizationId });
    }

    getOrganizations(queryParams?: OrganizationsQueryParams): Promise<CkanResponse<string[]>> {
        return this.makePromiseForAction<string[]>('organization_list', queryParams);
    }

}