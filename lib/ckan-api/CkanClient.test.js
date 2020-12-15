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
const CkanClient_1 = require("./CkanClient");
test('Environment and client object can be created', () => {
    const ckan = new CkanClient_1.CkanClient('http://localhost:5000', 'bfb3ffe4-6887-4084-b895-74d6103e1e9f');
    expect(ckan).not.toBeFalsy();
});
test('Can create an organization and delete it', () => __awaiter(void 0, void 0, void 0, function* () {
    const ckan = new CkanClient_1.CkanClient('http://localhost:5000', 'bfb3ffe4-6887-4084-b895-74d6103e1e9f');
    const response = yield ckan.createOrganization({ name: 'Organizzazione di test', id: 'test-org' });
    console.log(response);
}));
