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
const api_config_1 = require("../api.config");
const ckan_1 = require("./ckan");
describe('Ckan Api', function () {
    it('should be able to create a new organization and delete it', () => __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const config = new api_config_1.ApiConfig();
        const client = new ckan_1.Ckan(config.Url, config.Key);
        const organizationsBefore = yield client.getOrganizations();
        expect(typeof (organizationsBefore)).toEqual('object');
        yield client.createOrganization({ id: "my-test-organization6666", name: "my-test-organization6666" });
        const organizationsAfter = yield client.getOrganizations();
        expect(organizationsBefore.result).toBeTruthy();
        expect(organizationsBefore.result).not.toContain("my-test-organization6666");
        expect(organizationsAfter.result).toBeTruthy();
        expect(organizationsAfter.result).toContain("my-test-organization6666");
        const lengthBefore = (_b = (_a = organizationsBefore.result) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        const lengthAfter = (_d = (_c = organizationsAfter.result) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0;
        expect(lengthAfter).toEqual(lengthBefore + 1);
        yield client.deleteOrganization({ id: "my-test-organization6666" });
        expect(organizationsBefore.result).not.toContain("my-test-organization6666");
    }));
    it('should be able to create a dataset for a given organiization and retrieve it', () => __awaiter(this, void 0, void 0, function* () {
        const config = new api_config_1.ApiConfig();
        const client = new ckan_1.Ckan(config.Url, config.Key);
        yield client.createOrganization({ id: "my-test-organization6666", name: "my-test-organization6666" });
        yield client.createDataset('test-dataset6666', 'my-test-organization6666');
        const response = yield client.getDatasets();
        expect(response.result).toContain("test-dataset6666");
        yield client.deleteDataset({ id: 'test-dataset6666' });
        yield client.deleteOrganization({ id: "my-test-organization6666" });
    }));
    it('should be able to create data for a dataset', () => __awaiter(this, void 0, void 0, function* () {
        const config = new api_config_1.ApiConfig();
        const client = new ckan_1.Ckan(config.Url, config.Key);
        yield client.createOrganization({ id: "my-test-organization6666", name: "my-test-organization6666" });
        yield client.createDataset('test-dataset6666', 'my-test-organization6666');
        const response = yield client.createDataForDataset({ resource: { package_id: 'test-dataset6666' }, records: [{ 'col1': 12, 'col2': 12 }] });
        console.log(response);
    }));
});
