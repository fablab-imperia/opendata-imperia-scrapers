import { CkanClient } from "./ckan-api/CkanClient";

async function main() {
    var client = new CkanClient('http://localhost:5000', '1e65ad7c-474a-4768-837b-a9e5d215e918');
    var response =  await client.getDatasets();
    response = await client.getOrganizations();
    if (!response.result.includes("fablabimperia"))
    {
        response = await client.createOrganization({name: "fablabimperia"});
    } else {
        console.log("Organization fablabimperia is already created!")
    }
}

main();
