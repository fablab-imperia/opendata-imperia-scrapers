"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConfig = void 0;
const dotenv_extended_1 = __importDefault(require("dotenv-extended"));
class ApiConfig {
    constructor(dotenvPath) {
        var _a, _b;
        dotenv_extended_1.default.load({
            path: `${dotenvPath}/.env`
        });
        this.Url = (_a = process.env.API_URL) !== null && _a !== void 0 ? _a : '';
        this.Key = (_b = process.env.API_KEY) !== null && _b !== void 0 ? _b : '';
    }
}
exports.ApiConfig = ApiConfig;
