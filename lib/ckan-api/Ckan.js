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
exports.Ckan = void 0;
const ckan_1 = require("ckan");
const util_1 = require("util");
class Ckan {
    constructor(baseUrl, key) {
        this.baseUrl = baseUrl;
        this.key = key;
        this.client = new ckan_1.Client(this.baseUrl, this.key);
    }
    makePromiseForAction(action, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield util_1.promisify(this.client.action).bind(this.client)(action, data);
            return JSON.parse(response);
        });
    }
    createDataset(datasetName, organizationId) {
        return this.makePromiseForAction('dataset_create', { name: datasetName, owner_org: organizationId });
    }
    getOrganizations(queryParams) {
        return this.makePromiseForAction('organization_list', queryParams);
    }
}
exports.Ckan = Ckan;
