import { Hash } from "./types";
/**
 * KDM - a one step key derivation function as described in NIST SP 800-56C REV 1 Chapter 4.1.
 *
 * Derives a key with the given parameters. At the moment, just derivation using SHA-256 is available.
 *
 * @param hash           The hash to use.
 * @param sharedSecretZ  Known as `Z` in the spec: a byte string that represents the shared secret
 * @param outLengthBytes Knnown as `L` in the spec: positive integer that indicates the lenght (in bytes) of the secret
 *                       keying material to be derived; how long the output will be.
 * @param fixedInfo      A bit string of context-specific data that is appropiate for the relying key-establishment scheme.
 *                       FixedInfo may, for example, include appropriately formatted representations of the values of salt and/or L.
 *                       The inclusion of additional copies of the values of salt and L in FixedInfo would ensure that
 *                       each block of derived keying material is affected by all of the information
 *                       conveyed in OtherInput. See [SP 800-56A] and [SP 800-56B] for more detailed
 *                       recommendations concerning the format and content of FixedInfo.
 * @returns The derived keying material.
 * @throws IllegalArgumentException if `outLengthBytes` is 0 bytes.
 */
export declare const singleStepKDF: (hash: Hash, sharedSecretZ: Uint8Array, outLengthBytes: number, fixedInfo: Uint8Array) => Uint8Array;
