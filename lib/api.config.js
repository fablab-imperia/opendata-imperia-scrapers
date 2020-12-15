"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.ApiConfig = {
    Url: (_a = process.env.API_URL) !== null && _a !== void 0 ? _a : '',
    Key: (_b = process.env.API_KEY) !== null && _b !== void 0 ? _b : '',
};
