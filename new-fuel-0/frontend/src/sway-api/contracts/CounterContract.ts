/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.96.1
  Forc version: 0.66.4
  Fuel-Core version: 0.40.0
*/

import { Contract, Interface } from "fuels";
import type {
  Provider,
  Account,
  StorageSlot,
  AbstractAddress,
  BigNumberish,
  BN,
  FunctionFragment,
  InvokeFunction,
} from 'fuels';

const abi = {
  "programType": "contract",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "()",
      "concreteTypeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
      "type": "u64",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
  ],
  "metadataTypes": [],
  "functions": [
    {
      "inputs": [],
      "name": "count",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "increment",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [],
  "messagesTypes": [],
  "configurables": []
};

const storageSlots: StorageSlot[] = [
  {
    "key": "6e3c7b4f69bbff7132c3c3a62883a6868f47b0bc2a7f21605f29038cd9a5e05f",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class CounterContractInterface extends Interface {
  constructor() {
    super(abi);
  }

  declare functions: {
    count: FunctionFragment;
    increment: FunctionFragment;
  };
}

export class CounterContract extends Contract {
  static readonly abi = abi;
  static readonly storageSlots = storageSlots;

  declare interface: CounterContractInterface;
  declare functions: {
    count: InvokeFunction<[], BN>;
    increment: InvokeFunction<[], void>;
  };

  constructor(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider,
  ) {
    super(id, abi, accountOrProvider);
  }
}
