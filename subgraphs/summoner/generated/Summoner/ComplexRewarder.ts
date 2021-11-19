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

export class LogInit extends ethereum.Event {
  get params(): LogInit__Params {
    return new LogInit__Params(this);
  }
}

export class LogInit__Params {
  _event: LogInit;

  constructor(event: LogInit) {
    this._event = event;
  }
}

export class LogOnReward extends ethereum.Event {
  get params(): LogOnReward__Params {
    return new LogOnReward__Params(this);
  }
}

export class LogOnReward__Params {
  _event: LogOnReward;

  constructor(event: LogOnReward) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get to(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class LogPoolAddition extends ethereum.Event {
  get params(): LogPoolAddition__Params {
    return new LogPoolAddition__Params(this);
  }
}

export class LogPoolAddition__Params {
  _event: LogPoolAddition;

  constructor(event: LogPoolAddition) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get allocPoint(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LogSetPool extends ethereum.Event {
  get params(): LogSetPool__Params {
    return new LogSetPool__Params(this);
  }
}

export class LogSetPool__Params {
  _event: LogSetPool;

  constructor(event: LogSetPool) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get allocPoint(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LogUpdatePool extends ethereum.Event {
  get params(): LogUpdatePool__Params {
    return new LogUpdatePool__Params(this);
  }
}

export class LogUpdatePool__Params {
  _event: LogUpdatePool;

  constructor(event: LogUpdatePool) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get lastRewardTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get lpSupply(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get accSoulPerShare(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RewardRateUpdated extends ethereum.Event {
  get params(): RewardRateUpdated__Params {
    return new RewardRateUpdated__Params(this);
  }
}

export class RewardRateUpdated__Params {
  _event: RewardRateUpdated;

  constructor(event: RewardRateUpdated) {
    this._event = event;
  }

  get oldRate(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newRate(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ComplexRewarder__pendingTokensResult {
  value0: Array<Address>;
  value1: Array<BigInt>;

  constructor(value0: Array<Address>, value1: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddressArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    return map;
  }
}

export class ComplexRewarder__poolInfoResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class ComplexRewarder__updatePoolResultPoolStruct extends ethereum.Tuple {
  get accSoulPerShare(): BigInt {
    return this[0].toBigInt();
  }

  get lastRewardTime(): BigInt {
    return this[1].toBigInt();
  }

  get allocPoint(): BigInt {
    return this[2].toBigInt();
  }
}

export class ComplexRewarder__userInfoResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class ComplexRewarder extends ethereum.SmartContract {
  static bind(address: Address): ComplexRewarder {
    return new ComplexRewarder("ComplexRewarder", address);
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingOwner(): Address {
    let result = super.call("pendingOwner", "pendingOwner():(address)", []);

    return result[0].toAddress();
  }

  try_pendingOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("pendingOwner", "pendingOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingToken(_pid: BigInt, _user: Address): BigInt {
    let result = super.call(
      "pendingToken",
      "pendingToken(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_user)
      ]
    );

    return result[0].toBigInt();
  }

  try_pendingToken(_pid: BigInt, _user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingToken",
      "pendingToken(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_user)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pendingTokens(
    pid: BigInt,
    user: Address,
    param2: BigInt
  ): ComplexRewarder__pendingTokensResult {
    let result = super.call(
      "pendingTokens",
      "pendingTokens(uint256,address,uint256):(address[],uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(pid),
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );

    return new ComplexRewarder__pendingTokensResult(
      result[0].toAddressArray(),
      result[1].toBigIntArray()
    );
  }

  try_pendingTokens(
    pid: BigInt,
    user: Address,
    param2: BigInt
  ): ethereum.CallResult<ComplexRewarder__pendingTokensResult> {
    let result = super.tryCall(
      "pendingTokens",
      "pendingTokens(uint256,address,uint256):(address[],uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(pid),
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ComplexRewarder__pendingTokensResult(
        value[0].toAddressArray(),
        value[1].toBigIntArray()
      )
    );
  }

  poolIds(param0: BigInt): BigInt {
    let result = super.call("poolIds", "poolIds(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_poolIds(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("poolIds", "poolIds(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  poolInfo(param0: BigInt): ComplexRewarder__poolInfoResult {
    let result = super.call(
      "poolInfo",
      "poolInfo(uint256):(uint128,uint64,uint64)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ComplexRewarder__poolInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_poolInfo(
    param0: BigInt
  ): ethereum.CallResult<ComplexRewarder__poolInfoResult> {
    let result = super.tryCall(
      "poolInfo",
      "poolInfo(uint256):(uint128,uint64,uint64)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ComplexRewarder__poolInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  poolLength(): BigInt {
    let result = super.call("poolLength", "poolLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_poolLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("poolLength", "poolLength():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenPerBlock(): BigInt {
    let result = super.call("tokenPerBlock", "tokenPerBlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_tokenPerBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenPerBlock",
      "tokenPerBlock():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  updatePool(pid: BigInt): ComplexRewarder__updatePoolResultPoolStruct {
    let result = super.call(
      "updatePool",
      "updatePool(uint256):((uint128,uint64,uint64))",
      [ethereum.Value.fromUnsignedBigInt(pid)]
    );

    return result[0].toTuple() as ComplexRewarder__updatePoolResultPoolStruct;
  }

  try_updatePool(
    pid: BigInt
  ): ethereum.CallResult<ComplexRewarder__updatePoolResultPoolStruct> {
    let result = super.tryCall(
      "updatePool",
      "updatePool(uint256):((uint128,uint64,uint64))",
      [ethereum.Value.fromUnsignedBigInt(pid)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as ComplexRewarder__updatePoolResultPoolStruct
    );
  }

  userInfo(param0: BigInt, param1: Address): ComplexRewarder__userInfoResult {
    let result = super.call(
      "userInfo",
      "userInfo(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return new ComplexRewarder__userInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_userInfo(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<ComplexRewarder__userInfoResult> {
    let result = super.tryCall(
      "userInfo",
      "userInfo(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ComplexRewarder__userInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _rewardToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenPerBlock(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _MASTERCHEF_V2(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddCall extends ethereum.Call {
  get inputs(): AddCall__Inputs {
    return new AddCall__Inputs(this);
  }

  get outputs(): AddCall__Outputs {
    return new AddCall__Outputs(this);
  }
}

export class AddCall__Inputs {
  _call: AddCall;

  constructor(call: AddCall) {
    this._call = call;
  }

  get allocPoint(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _pid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddCall__Outputs {
  _call: AddCall;

  constructor(call: AddCall) {
    this._call = call;
  }
}

export class ClaimOwnershipCall extends ethereum.Call {
  get inputs(): ClaimOwnershipCall__Inputs {
    return new ClaimOwnershipCall__Inputs(this);
  }

  get outputs(): ClaimOwnershipCall__Outputs {
    return new ClaimOwnershipCall__Outputs(this);
  }
}

export class ClaimOwnershipCall__Inputs {
  _call: ClaimOwnershipCall;

  constructor(call: ClaimOwnershipCall) {
    this._call = call;
  }
}

export class ClaimOwnershipCall__Outputs {
  _call: ClaimOwnershipCall;

  constructor(call: ClaimOwnershipCall) {
    this._call = call;
  }
}

export class MassUpdatePoolsCall extends ethereum.Call {
  get inputs(): MassUpdatePoolsCall__Inputs {
    return new MassUpdatePoolsCall__Inputs(this);
  }

  get outputs(): MassUpdatePoolsCall__Outputs {
    return new MassUpdatePoolsCall__Outputs(this);
  }
}

export class MassUpdatePoolsCall__Inputs {
  _call: MassUpdatePoolsCall;

  constructor(call: MassUpdatePoolsCall) {
    this._call = call;
  }

  get pids(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class MassUpdatePoolsCall__Outputs {
  _call: MassUpdatePoolsCall;

  constructor(call: MassUpdatePoolsCall) {
    this._call = call;
  }
}

export class OnSushiRewardCall extends ethereum.Call {
  get inputs(): OnSushiRewardCall__Inputs {
    return new OnSushiRewardCall__Inputs(this);
  }

  get outputs(): OnSushiRewardCall__Outputs {
    return new OnSushiRewardCall__Outputs(this);
  }
}

export class OnSushiRewardCall__Inputs {
  _call: OnSushiRewardCall;

  constructor(call: OnSushiRewardCall) {
    this._call = call;
  }

  get pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _user(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get lpToken(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class OnSushiRewardCall__Outputs {
  _call: OnSushiRewardCall;

  constructor(call: OnSushiRewardCall) {
    this._call = call;
  }
}

export class SetCall extends ethereum.Call {
  get inputs(): SetCall__Inputs {
    return new SetCall__Inputs(this);
  }

  get outputs(): SetCall__Outputs {
    return new SetCall__Outputs(this);
  }
}

export class SetCall__Inputs {
  _call: SetCall;

  constructor(call: SetCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _allocPoint(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetCall__Outputs {
  _call: SetCall;

  constructor(call: SetCall) {
    this._call = call;
  }
}

export class SetRewardRateCall extends ethereum.Call {
  get inputs(): SetRewardRateCall__Inputs {
    return new SetRewardRateCall__Inputs(this);
  }

  get outputs(): SetRewardRateCall__Outputs {
    return new SetRewardRateCall__Outputs(this);
  }
}

export class SetRewardRateCall__Inputs {
  _call: SetRewardRateCall;

  constructor(call: SetRewardRateCall) {
    this._call = call;
  }

  get _tokenPerBlock(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _pids(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class SetRewardRateCall__Outputs {
  _call: SetRewardRateCall;

  constructor(call: SetRewardRateCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get direct(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get renounce(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdatePoolCall extends ethereum.Call {
  get inputs(): UpdatePoolCall__Inputs {
    return new UpdatePoolCall__Inputs(this);
  }

  get outputs(): UpdatePoolCall__Outputs {
    return new UpdatePoolCall__Outputs(this);
  }
}

export class UpdatePoolCall__Inputs {
  _call: UpdatePoolCall;

  constructor(call: UpdatePoolCall) {
    this._call = call;
  }

  get pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdatePoolCall__Outputs {
  _call: UpdatePoolCall;

  constructor(call: UpdatePoolCall) {
    this._call = call;
  }

  get pool(): UpdatePoolCallPoolStruct {
    return this._call.outputValues[0].value.toTuple() as UpdatePoolCallPoolStruct;
  }
}

export class UpdatePoolCallPoolStruct extends ethereum.Tuple {
  get accSoulPerShare(): BigInt {
    return this[0].toBigInt();
  }

  get lastRewardTime(): BigInt {
    return this[1].toBigInt();
  }

  get allocPoint(): BigInt {
    return this[2].toBigInt();
  }
}
