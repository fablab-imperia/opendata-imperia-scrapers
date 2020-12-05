import { CkanClient } from "./CkanClient";
import { ApiConfig } from '../api.config';



test('Environment and client object can be created', () =>{
    expect(ApiConfig.Url).not.toBeFalsy();
    expect(ApiConfig.Key).not.toBeFalsy();

    const ckan = new CkanClient(ApiConfig.Url, ApiConfig.Key);
    expect(ckan).not.toBeFalsy();
});

test('Can create an organization and delete it', async () => {

    const ckan = new CkanClient(ApiConfig.Url, ApiConfig.Key);
    const response = await ckan.createOrganization({name:'Organizzazione di test', id: 'test-org' });
    console.log(response);
});