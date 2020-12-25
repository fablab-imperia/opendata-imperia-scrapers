import { ApiConfig } from "../api.config";
import { Ckan } from "./ckan";
import { CkanResponse } from "./dtos/ckan-response";

describe('Ckan Api', function () {

    

    it('should be able to create new organizations', async () => {
        const client = new Ckan(ApiConfig.Url, ApiConfig.Url);
        const organizationsBefore =  await client.getOrganizations() as CkanResponse<string[]>;
        expect(typeof(organizationsBefore)).toEqual('object');
        await client.createOrganization({id: "test-organization", name: "Test Organization"});
        const organizationsAfter =  await client.getOrganizations() as CkanResponse<string[]>;
        expect(organizationsBefore.result).toBeTruthy();
        expect(organizationsBefore.result).not.toContain("test-organization");
        expect(organizationsAfter.result).toBeTruthy();
        expect(organizationsAfter.result).toContain("test-organization");
        const lengthBefore = organizationsBefore.result?.length ?? 0;
        const lengthAfter = organizationsAfter.result?.length ?? 0;
        expect(lengthAfter).toEqual(lengthBefore +1);
    });
});