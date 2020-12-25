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
const api_config_1 = require("./api.config");
const ckan_1 = require("./ckan-api/ckan");
function run() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var client = new ckan_1.Ckan(api_config_1.ApiConfig.Url, api_config_1.ApiConfig.Key);
            let response = yield client.getOrganizations();
            console.log(response);
            if ((_a = response.result) === null || _a === void 0 ? void 0 : _a.find(x => x === "6666")) {
                response = (yield client.deleteOrganization({ id: "6666" }));
            }
            else {
                response = (yield client.createOrganization({ id: "6666", name: "6666" }));
            }
            if (typeof (response) !== 'string' && response.success) {
                console.log(response.result);
            }
        }
        catch (error) {
            console.log("Got error: " + error);
        }
    });
}
run();
