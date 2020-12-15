import { CkanClient } from "./CkanClient";
import * as ApiConfig from '../api.config';



test('Environment and client object can be created', () =>{

    const ckan = new CkanClient('http://localhost:5000', 'bfb3ffe4-6887-4084-b895-74d6103e1e9f');
    expect(ckan).not.toBeFalsy();
});

test('Can create an organization and delete it', async () => {

    const ckan = new  CkanClient('http://localhost:5000', 'bfb3ffe4-6887-4084-b895-74d6103e1e9f');
    const response = await ckan.createOrganization({name:'Organizzazione di test', id: 'test-org' });
    console.log(response);
});