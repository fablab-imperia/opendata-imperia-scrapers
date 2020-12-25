import { Ckan } from "./ckan-api/Ckan";
import { CkanResponse } from "./ckan-api/dtos/ckan-response";

async function run() {
    try {
    var client = new Ckan('http://localhost:5000', 'bfb3ffe4-6887-4084-b895-74d6103e1e9f');

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