import { ApiConfig } from "./api.config";
import { Ckan } from "./ckan-api/ckan";
import { CkanResponse } from "./ckan-api/dtos/ckan-response";



async function run() {
    try {
    var client = new Ckan(ApiConfig.Url, ApiConfig.Key);

    let response =  await client.getOrganizations() as CkanResponse<string[]>;
    console.log(response);
    if (response.result?.find(x => x === "6666" )) {
        response = await client.deleteOrganization({id: "6666"}) as CkanResponse<any>;
    } else {
        response = await client.createOrganization({id: "6666", name: "6666"}) as CkanResponse<any>;
    }

    if (typeof(response) !== 'string' && response.success) {
        console.log(response.result);
    }
} catch(error) {
    console.log("Got error: " + error);
}
}

run();