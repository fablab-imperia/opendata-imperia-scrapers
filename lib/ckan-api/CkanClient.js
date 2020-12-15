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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CkanClient = void 0;
const axios_1 = __importDefault(require("axios"));
class CkanClient {
    constructor(baseUrl, key) {
        this.baseUrl = baseUrl;
        this.key = key;
        axios_1.default.defaults.baseURL = baseUrl;
        axios_1.default.defaults.headers.common['Authorization'] = key;
    }
    getDatasets() {
        return __awaiter(this, void 0, void 0, function* () {
            var response = yield axios_1.default.post('/api/3/action/package_list');
            return response.data;
        });
    }
    createDataset(cfg) {
        return __awaiter(this, void 0, void 0, function* () {
            var response = yield axios_1.default.post('/api/3/action/package_create');
            return response.data;
        });
    }
    createOrganization(cfg) {
        return __awaiter(this, void 0, void 0, function* () {
            var response = yield axios_1.default.post('/api/3/action/organization_create', cfg);
            return response.data;
        });
    }
    removeOrganizationByName(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var response = yield axios_1.default.post('/api/3/action/organization_delete', id);
            return response.data;
        });
    }
    getOrganizations() {
        return __awaiter(this, void 0, void 0, function* () {
            var response = yield axios_1.default.post('/api/3/action/organization_list');
            return response.data;
        });
    }
}
exports.CkanClient = CkanClient;
