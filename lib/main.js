"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CkanClient_1 = require("./ckan-api/CkanClient");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        var client = new CkanClient_1.CkanClient('http://localhost:5000', '1e65ad7c-474a-4768-837b-a9e5d215e918');
        var response = yield client.getDatasets();
        response = yield client.getOrganizations();
        if (!response.result.includes("fablabimperia")) {
            response = yield client.createOrganization({ name: "fablabimperia" });
        }
        else {
            console.log("Organization fablabimperia is already created!");
        }
    });
}
main();
