import { ApiConfig } from "../api.config";
import { Ckan } from "./ckan";
import { CkanResponse } from "./dtos/ckan-response";

describe('Ckan Api', function () {
    
    it('should be able to create a new organization and delete it', async () => {
        const config = new ApiConfig();
        const client = new Ckan(config.Url, config.Key);
        const organizationsBefore =  await client.getOrganizations() as CkanResponse<string[]>;
        expect(typeof(organizationsBefore)).toEqual('object');
        await client.createOrganization({id: "my-test-organization6666", name: "my-test-organization6666"});
        const organizationsAfter =  await client.getOrganizations() as CkanResponse<string[]>;
        expect(organizationsBefore.result).toBeTruthy();
        expect(organizationsBefore.result).not.toContain("my-test-organization6666");
        expect(organizationsAfter.result).toBeTruthy();
        expect(organizationsAfter.result).toContain("my-test-organization6666");
        const lengthBefore = organizationsBefore.result?.length ?? 0;
        const lengthAfter = organizationsAfter.result?.length ?? 0;
        expect(lengthAfter).toEqual(lengthBefore +1);
        await client.deleteOrganization({id: "my-test-organization6666"});
        expect(organizationsBefore.result).not.toContain("my-test-organization6666");
    }); 


    it('shoult be able to create a dataset for a given organiization and retrieve it', async () => {
        const config = new ApiConfig();
        const client = new Ckan(config.Url, config.Key);
        await client.createOrganization({id: "my-test-organization6666", name: "my-test-organization6666"});

        await client.createDataset('test-dataset6666','my-test-organization6666');
        const response = await client.getDatasets()  as CkanResponse<string[]>;
        expect(response.result).toContain("test-dataset6666");
        await client.deleteDataset({id: 'test-dataset6666'});
        await client.deleteOrganization({id: "my-test-organization6666"});
    });
});