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

export class OwnerChanged extends ethereum.Event {
  get params(): OwnerChanged__Params {
    return new OwnerChanged__Params(this);
  }
}

export class OwnerChanged__Params {
  _event: OwnerChanged;

  constructor(event: OwnerChanged) {
    this._event = event;
  }

  get oldOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnerNominated extends ethereum.Event {
  get params(): OwnerNominated__Params {
    return new OwnerNominated__Params(this);
  }
}

export class OwnerNominated__Params {
  _event: OwnerNominated;

  constructor(event: OwnerNominated) {
    this._event = event;
  }

  get newOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PauseChanged extends ethereum.Event {
  get params(): PauseChanged__Params {
    return new PauseChanged__Params(this);
  }
}

export class PauseChanged__Params {
  _event: PauseChanged;

  constructor(event: PauseChanged) {
    this._event = event;
  }

  get isPaused(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class Recovered extends ethereum.Event {
  get params(): Recovered__Params {
    return new Recovered__Params(this);
  }
}

export class Recovered__Params {
  _event: Recovered;

  constructor(event: Recovered) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RewardAdded extends ethereum.Event {
  get params(): RewardAdded__Params {
    return new RewardAdded__Params(this);
  }
}

export class RewardAdded__Params {
  _event: RewardAdded;

  constructor(event: RewardAdded) {
    this._event = event;
  }

  get reward(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class RewardPaid extends ethereum.Event {
  get params(): RewardPaid__Params {
    return new RewardPaid__Params(this);
  }
}

export class RewardPaid__Params {
  _event: RewardPaid;

  constructor(event: RewardPaid) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get reward(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RewardsDurationUpdated extends ethereum.Event {
  get params(): RewardsDurationUpdated__Params {
    return new RewardsDurationUpdated__Params(this);
  }
}

export class RewardsDurationUpdated__Params {
  _event: RewardsDurationUpdated;

  constructor(event: RewardsDurationUpdated) {
    this._event = event;
  }

  get newDuration(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class StakingRewardsSoul__pendingTokensResult {
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

export class StakingRewardsSoul extends ethereum.SmartContract {
  static bind(address: Address): StakingRewardsSoul {
    return new StakingRewardsSoul("StakingRewardsSoul", address);
  }

  MASTERCHEF_V2(): Address {
    let result = super.call("MASTERCHEF_V2", "MASTERCHEF_V2():(address)", []);

    return result[0].toAddress();
  }

  try_MASTERCHEF_V2(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "MASTERCHEF_V2",
      "MASTERCHEF_V2():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  earned(account: Address): BigInt {
    let result = super.call("earned", "earned(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_earned(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("earned", "earned(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRewardForDuration(): BigInt {
    let result = super.call(
      "getRewardForDuration",
      "getRewardForDuration():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getRewardForDuration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRewardForDuration",
      "getRewardForDuration():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastPauseTime(): BigInt {
    let result = super.call("lastPauseTime", "lastPauseTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastPauseTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastPauseTime",
      "lastPauseTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastTimeRewardApplicable(): BigInt {
    let result = super.call(
      "lastTimeRewardApplicable",
      "lastTimeRewardApplicable():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_lastTimeRewardApplicable(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastTimeRewardApplicable",
      "lastTimeRewardApplicable():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastUpdateTime(): BigInt {
    let result = super.call("lastUpdateTime", "lastUpdateTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastUpdateTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastUpdateTime",
      "lastUpdateTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nominatedOwner(): Address {
    let result = super.call("nominatedOwner", "nominatedOwner():(address)", []);

    return result[0].toAddress();
  }

  try_nominatedOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "nominatedOwner",
      "nominatedOwner():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  pendingTokens(
    pid: BigInt,
    user: Address,
    param2: BigInt
  ): StakingRewardsSoul__pendingTokensResult {
    let result = super.call(
      "pendingTokens",
      "pendingTokens(uint256,address,uint256):(address[],uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(pid),
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );

    return new StakingRewardsSoul__pendingTokensResult(
      result[0].toAddressArray(),
      result[1].toBigIntArray()
    );
  }

  try_pendingTokens(
    pid: BigInt,
    user: Address,
    param2: BigInt
  ): ethereum.CallResult<StakingRewardsSoul__pendingTokensResult> {
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
      new StakingRewardsSoul__pendingTokensResult(
        value[0].toAddressArray(),
        value[1].toBigIntArray()
      )
    );
  }

  periodFinish(): BigInt {
    let result = super.call("periodFinish", "periodFinish():(uint256)", []);

    return result[0].toBigInt();
  }

  try_periodFinish(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("periodFinish", "periodFinish():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardPerSecond(): BigInt {
    let result = super.call(
      "rewardPerSecond",
      "rewardPerSecond():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_rewardPerSecond(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardPerSecond",
      "rewardPerSecond():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardPerToken(): BigInt {
    let result = super.call("rewardPerToken", "rewardPerToken():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rewardPerToken(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardPerToken",
      "rewardPerToken():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardPerTokenStored(): BigInt {
    let result = super.call(
      "rewardPerTokenStored",
      "rewardPerTokenStored():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_rewardPerTokenStored(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardPerTokenStored",
      "rewardPerTokenStored():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardRate(): BigInt {
    let result = super.call("rewardRate", "rewardRate():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rewardRate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("rewardRate", "rewardRate():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardToken(): Address {
    let result = super.call("rewardToken", "rewardToken():(address)", []);

    return result[0].toAddress();
  }

  try_rewardToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("rewardToken", "rewardToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewards(param0: Address): BigInt {
    let result = super.call("rewards", "rewards(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_rewards(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("rewards", "rewards(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardsDistribution(): Address {
    let result = super.call(
      "rewardsDistribution",
      "rewardsDistribution():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_rewardsDistribution(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "rewardsDistribution",
      "rewardsDistribution():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewardsDuration(): BigInt {
    let result = super.call(
      "rewardsDuration",
      "rewardsDuration():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_rewardsDuration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardsDuration",
      "rewardsDuration():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardsToken(): Address {
    let result = super.call("rewardsToken", "rewardsToken():(address)", []);

    return result[0].toAddress();
  }

  try_rewardsToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("rewardsToken", "rewardsToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stakingToken(): Address {
    let result = super.call("stakingToken", "stakingToken():(address)", []);

    return result[0].toAddress();
  }

  try_stakingToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("stakingToken", "stakingToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userRewardPerTokenPaid(param0: Address): BigInt {
    let result = super.call(
      "userRewardPerTokenPaid",
      "userRewardPerTokenPaid(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_userRewardPerTokenPaid(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userRewardPerTokenPaid",
      "userRewardPerTokenPaid(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _rewardsDistribution(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _rewardsToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _stakingToken(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _rewardsDuration(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall extends ethereum.Call {
  get inputs(): AcceptOwnershipCall__Inputs {
    return new AcceptOwnershipCall__Inputs(this);
  }

  get outputs(): AcceptOwnershipCall__Outputs {
    return new AcceptOwnershipCall__Outputs(this);
  }
}

export class AcceptOwnershipCall__Inputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall__Outputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class NominateNewOwnerCall extends ethereum.Call {
  get inputs(): NominateNewOwnerCall__Inputs {
    return new NominateNewOwnerCall__Inputs(this);
  }

  get outputs(): NominateNewOwnerCall__Outputs {
    return new NominateNewOwnerCall__Outputs(this);
  }
}

export class NominateNewOwnerCall__Inputs {
  _call: NominateNewOwnerCall;

  constructor(call: NominateNewOwnerCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class NominateNewOwnerCall__Outputs {
  _call: NominateNewOwnerCall;

  constructor(call: NominateNewOwnerCall) {
    this._call = call;
  }
}

export class NotifyRewardAmountCall extends ethereum.Call {
  get inputs(): NotifyRewardAmountCall__Inputs {
    return new NotifyRewardAmountCall__Inputs(this);
  }

  get outputs(): NotifyRewardAmountCall__Outputs {
    return new NotifyRewardAmountCall__Outputs(this);
  }
}

export class NotifyRewardAmountCall__Inputs {
  _call: NotifyRewardAmountCall;

  constructor(call: NotifyRewardAmountCall) {
    this._call = call;
  }

  get reward(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get rewardHolder(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class NotifyRewardAmountCall__Outputs {
  _call: NotifyRewardAmountCall;

  constructor(call: NotifyRewardAmountCall) {
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

  get user(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get newLpAmount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class OnSushiRewardCall__Outputs {
  _call: OnSushiRewardCall;

  constructor(call: OnSushiRewardCall) {
    this._call = call;
  }
}

export class RecoverERC20Call extends ethereum.Call {
  get inputs(): RecoverERC20Call__Inputs {
    return new RecoverERC20Call__Inputs(this);
  }

  get outputs(): RecoverERC20Call__Outputs {
    return new RecoverERC20Call__Outputs(this);
  }
}

export class RecoverERC20Call__Inputs {
  _call: RecoverERC20Call;

  constructor(call: RecoverERC20Call) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RecoverERC20Call__Outputs {
  _call: RecoverERC20Call;

  constructor(call: RecoverERC20Call) {
    this._call = call;
  }
}

export class SetPausedCall extends ethereum.Call {
  get inputs(): SetPausedCall__Inputs {
    return new SetPausedCall__Inputs(this);
  }

  get outputs(): SetPausedCall__Outputs {
    return new SetPausedCall__Outputs(this);
  }
}

export class SetPausedCall__Inputs {
  _call: SetPausedCall;

  constructor(call: SetPausedCall) {
    this._call = call;
  }

  get _paused(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetPausedCall__Outputs {
  _call: SetPausedCall;

  constructor(call: SetPausedCall) {
    this._call = call;
  }
}

export class SetRewardsDistributionCall extends ethereum.Call {
  get inputs(): SetRewardsDistributionCall__Inputs {
    return new SetRewardsDistributionCall__Inputs(this);
  }

  get outputs(): SetRewardsDistributionCall__Outputs {
    return new SetRewardsDistributionCall__Outputs(this);
  }
}

export class SetRewardsDistributionCall__Inputs {
  _call: SetRewardsDistributionCall;

  constructor(call: SetRewardsDistributionCall) {
    this._call = call;
  }

  get _rewardsDistribution(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRewardsDistributionCall__Outputs {
  _call: SetRewardsDistributionCall;

  constructor(call: SetRewardsDistributionCall) {
    this._call = call;
  }
}

export class SetRewardsDurationCall extends ethereum.Call {
  get inputs(): SetRewardsDurationCall__Inputs {
    return new SetRewardsDurationCall__Inputs(this);
  }

  get outputs(): SetRewardsDurationCall__Outputs {
    return new SetRewardsDurationCall__Outputs(this);
  }
}

export class SetRewardsDurationCall__Inputs {
  _call: SetRewardsDurationCall;

  constructor(call: SetRewardsDurationCall) {
    this._call = call;
  }

  get _rewardsDuration(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetRewardsDurationCall__Outputs {
  _call: SetRewardsDurationCall;

  constructor(call: SetRewardsDurationCall) {
    this._call = call;
  }
}

export class UpdatePeriodFinishCall extends ethereum.Call {
  get inputs(): UpdatePeriodFinishCall__Inputs {
    return new UpdatePeriodFinishCall__Inputs(this);
  }

  get outputs(): UpdatePeriodFinishCall__Outputs {
    return new UpdatePeriodFinishCall__Outputs(this);
  }
}

export class UpdatePeriodFinishCall__Inputs {
  _call: UpdatePeriodFinishCall;

  constructor(call: UpdatePeriodFinishCall) {
    this._call = call;
  }

  get timestamp(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdatePeriodFinishCall__Outputs {
  _call: UpdatePeriodFinishCall;

  constructor(call: UpdatePeriodFinishCall) {
    this._call = call;
  }
}
