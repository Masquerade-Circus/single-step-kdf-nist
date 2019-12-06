# Single Step KDF (NIST SP 800-56C)

Single-Step Key Derivation function following [NIST SP 800-56C revision 1, chapter 4](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-56Cr1.pdf) in TypeScript.

## Quick start

```

import { hexToBytes, bytesToHex } from "single-step-kdf/utils";

import SingleStepKDF from "single-step-kdf";

const hexSingleStepKDF = () => {
  const sharedSecretString = "test";
  const sharedSecret: Uint8Array = hexToBytes(sharedSecretString);
  const fixedInfo = JSON.stringify({ info: "some info" });

  const kdf = SingleStepKDF.derive(
    "sha256",
    sharedSecret,
    32,
    hexToBytes(fixedInfo)
  );

  return bytesToHex(kdf).toUpperCase();
};

```

# License

Copyright 2018 Patrick Favre-Bulle

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
