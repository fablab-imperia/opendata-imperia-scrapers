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
const api_config_1 = require("../src/api.config");
const ckan_1 = require("../src/ckan-api/ckan");
describe('Ckan Api', function () {
    it('should be able to create new organizations', () => __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const client = new ckan_1.Ckan(api_config_1.ApiConfig.Url, api_config_1.ApiConfig.Url);
        const organizationsBefore = yield client.getOrganizations();
        expect(typeof (organizationsBefore)).toEqual('object');
        yield client.createOrganization({ id: "test-organization", name: "Test Organization" });
        const organizationsAfter = yield client.getOrganizations();
        expect(organizationsBefore.result).toBeTruthy();
        expect(organizationsBefore.result).not.toContain("test-organization");
        expect(organizationsAfter.result).toBeTruthy();
        expect(organizationsAfter.result).toContain("test-organization");
        const lengthBefore = (_b = (_a = organizationsBefore.result) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        const lengthAfter = (_d = (_c = organizationsAfter.result) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0;
        expect(lengthAfter).toEqual(lengthBefore + 1);
    }));
});
