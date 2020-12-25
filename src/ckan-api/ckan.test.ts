import { ApiConfig } from "../api.config";
import { Ckan } from "./ckan";
import { CkanResponse } from "./dtos/ckan-response";

describe('Ckan Api', function () {
    
    it('should be able to create new organizations and delete it', async () => {
        const config = new ApiConfig();
        const client = new Ckan(config.Url, config.Key);
        const organizationsBefore =  await client.getOrganizations() as CkanResponse<string[]>;
        expect(typeof(organizationsBefore)).toEqual('object');
        await client.createOrganization({id: "my-test-organization", name: "my-test-organization"});
        const organizationsAfter =  await client.getOrganizations() as CkanResponse<string[]>;
        expect(organizationsBefore.result).toBeTruthy();
        expect(organizationsBefore.result).not.toContain("my-test-organization");
        expect(organizationsAfter.result).toBeTruthy();
        expect(organizationsAfter.result).toContain("my-test-organization");
        const lengthBefore = organizationsBefore.result?.length ?? 0;
        const lengthAfter = organizationsAfter.result?.length ?? 0;
        expect(lengthAfter).toEqual(lengthBefore +1);
        await client.deleteOrganization({id: "my-test-organization"});
        expect(organizationsBefore.result).not.toContain("my-test-organization");
    });
});