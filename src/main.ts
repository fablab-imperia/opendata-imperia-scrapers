import { Ckan } from "./ckan-api/Ckan";

async function run() {
    var client = new Ckan('http://localhost:5000', 'bfb3ffe4-6887-4084-b895-74d6103e1e9f');
    var response =  await client.getOrganizations();
    if (response.success) {
        console.log(response.result);
    }
}

run();