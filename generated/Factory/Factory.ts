// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ContractAdded extends ethereum.Event {
  get params(): ContractAdded__Params {
    return new ContractAdded__Params(this);
  }
}

export class ContractAdded__Params {
  _event: ContractAdded;

  constructor(event: ContractAdded) {
    this._event = event;
  }

  get contractAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Factory extends ethereum.SmartContract {
  static bind(address: Address): Factory {
    return new Factory("Factory", address);
  }

  contracts(param0: BigInt): Address {
    let result = super.call("contracts", "contracts(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_contracts(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("contracts", "contracts(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class AddContractCall extends ethereum.Call {
  get inputs(): AddContractCall__Inputs {
    return new AddContractCall__Inputs(this);
  }

  get outputs(): AddContractCall__Outputs {
    return new AddContractCall__Outputs(this);
  }
}

export class AddContractCall__Inputs {
  _call: AddContractCall;

  constructor(call: AddContractCall) {
    this._call = call;
  }

  get nftContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddContractCall__Outputs {
  _call: AddContractCall;

  constructor(call: AddContractCall) {
    this._call = call;
  }
}
