"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert a hex string to a byte array
 * @param hex
 */
exports.hexToBytes = (hex) => {
    const bytes = [];
    for (let c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return new Uint8Array(bytes);
};
/**
 * Converts a byte array to a hex string
 * @param bytes
 */
exports.bytesToHex = (bytes) => {
    const hex = [];
    for (let i = 0; i < bytes.length; i++) {
        const current = bytes[i] < 0 ? bytes[i] + 256 : bytes[i];
        const hexString = (0xff & current).toString(16);
        if (hexString.length == 1) {
            hex.push("0");
        }
        hex.push(hexString);
    }
    return hex.join("");
};
//# sourceMappingURL=utils.js.map