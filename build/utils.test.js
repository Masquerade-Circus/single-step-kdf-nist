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
const crypto_1 = __importDefault(require("crypto"));
const utils_1 = require("./utils");
describe("hexToBytes", () => {
    it("hexToBytes", () => {
        const hex = "3007de";
        const bytes = utils_1.hexToBytes(hex);
        expect(bytes.toString()).toBe([48, 7, 222].toString());
    });
    it("converts a random hex to bytes", () => __awaiter(void 0, void 0, void 0, function* () {
        const randomHex = yield new Promise((resolve, reject) => {
            crypto_1.default.randomBytes(16, (err, buffer) => {
                if (err) {
                    reject(err);
                }
                resolve(buffer.toString("hex"));
            });
        });
        const bytes = utils_1.hexToBytes(randomHex);
        expect(utils_1.bytesToHex(bytes)).toBe(randomHex);
    }));
});
describe("bytesToHex", () => {
    it("converts bytes to hex", () => {
        const bytes = new Uint8Array([90, 189, 6]);
        const hex = utils_1.bytesToHex(bytes);
        expect(hex).toEqual("5abd06");
    });
});
//# sourceMappingURL=utils.test.js.map