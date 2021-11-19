// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Summoner extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Summoner entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Summoner entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Summoner", id.toString(), this);
  }

  static load(id: string): Summoner | null {
    return store.get("Summoner", id) as Summoner | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalAllocPoint(): BigInt {
    let value = this.get("totalAllocPoint");
    return value.toBigInt();
  }

  set totalAllocPoint(value: BigInt) {
    this.set("totalAllocPoint", Value.fromBigInt(value));
  }

  get pools(): Array<string> | null {
    let value = this.get("pools");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set pools(value: Array<string> | null) {
    if (value === null) {
      this.unset("pools");
    } else {
      this.set("pools", Value.fromStringArray(value as Array<string>));
    }
  }

  get poolCount(): BigInt {
    let value = this.get("poolCount");
    return value.toBigInt();
  }

  set poolCount(value: BigInt) {
    this.set("poolCount", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }
}

export class Pool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Pool entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Pool entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Pool", id.toString(), this);
  }

  static load(id: string): Pool | null {
    return store.get("Pool", id) as Pool | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get summoner(): string {
    let value = this.get("summoner");
    return value.toString();
  }

  set summoner(value: string) {
    this.set("summoner", Value.fromString(value));
  }

  get pair(): Bytes {
    let value = this.get("pair");
    return value.toBytes();
  }

  set pair(value: Bytes) {
    this.set("pair", Value.fromBytes(value));
  }

  get rewarder(): string | null {
    let value = this.get("rewarder");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set rewarder(value: string | null) {
    if (value === null) {
      this.unset("rewarder");
    } else {
      this.set("rewarder", Value.fromString(value as string));
    }
  }

  get allocPoint(): BigInt {
    let value = this.get("allocPoint");
    return value.toBigInt();
  }

  set allocPoint(value: BigInt) {
    this.set("allocPoint", Value.fromBigInt(value));
  }

  get lastRewardTime(): BigInt {
    let value = this.get("lastRewardTime");
    return value.toBigInt();
  }

  set lastRewardTime(value: BigInt) {
    this.set("lastRewardTime", Value.fromBigInt(value));
  }

  get accSoulPerShare(): BigInt {
    let value = this.get("accSoulPerShare");
    return value.toBigInt();
  }

  set accSoulPerShare(value: BigInt) {
    this.set("accSoulPerShare", Value.fromBigInt(value));
  }

  get slpBalance(): BigInt {
    let value = this.get("slpBalance");
    return value.toBigInt();
  }

  set slpBalance(value: BigInt) {
    this.set("slpBalance", Value.fromBigInt(value));
  }

  get users(): Array<string> {
    let value = this.get("users");
    return value.toStringArray();
  }

  set users(value: Array<string>) {
    this.set("users", Value.fromStringArray(value));
  }

  get userCount(): BigInt {
    let value = this.get("userCount");
    return value.toBigInt();
  }

  set userCount(value: BigInt) {
    this.set("userCount", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }
}

export class Rewarder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Rewarder entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Rewarder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Rewarder", id.toString(), this);
  }

  static load(id: string): Rewarder | null {
    return store.get("Rewarder", id) as Rewarder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get rewardToken(): Bytes {
    let value = this.get("rewardToken");
    return value.toBytes();
  }

  set rewardToken(value: Bytes) {
    this.set("rewardToken", Value.fromBytes(value));
  }

  get rewardPerSecond(): BigInt {
    let value = this.get("rewardPerSecond");
    return value.toBigInt();
  }

  set rewardPerSecond(value: BigInt) {
    this.set("rewardPerSecond", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get pool(): string | null {
    let value = this.get("pool");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set pool(value: string | null) {
    if (value === null) {
      this.unset("pool");
    } else {
      this.set("pool", Value.fromString(value as string));
    }
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get rewardDebt(): BigInt {
    let value = this.get("rewardDebt");
    return value.toBigInt();
  }

  set rewardDebt(value: BigInt) {
    this.set("rewardDebt", Value.fromBigInt(value));
  }

  get soulHarvested(): BigInt {
    let value = this.get("soulHarvested");
    return value.toBigInt();
  }

  set soulHarvested(value: BigInt) {
    this.set("soulHarvested", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }
}
