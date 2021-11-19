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

export class Enchantment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Enchantment entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Enchantment entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Enchantment", id.toString(), this);
  }

  static load(id: string): Enchantment | null {
    return store.get("Enchantment", id) as Enchantment | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get decimals(): i32 {
    let value = this.get("decimals");
    return value.toI32();
  }

  set decimals(value: i32) {
    this.set("decimals", Value.fromI32(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get seance(): Bytes {
    let value = this.get("seance");
    return value.toBytes();
  }

  set seance(value: Bytes) {
    this.set("seance", Value.fromBytes(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get ratio(): BigDecimal {
    let value = this.get("ratio");
    return value.toBigDecimal();
  }

  set ratio(value: BigDecimal) {
    this.set("ratio", Value.fromBigDecimal(value));
  }

  get enchantMinted(): BigDecimal {
    let value = this.get("enchantMinted");
    return value.toBigDecimal();
  }

  set enchantMinted(value: BigDecimal) {
    this.set("enchantMinted", Value.fromBigDecimal(value));
  }

  get enchantBurned(): BigDecimal {
    let value = this.get("enchantBurned");
    return value.toBigDecimal();
  }

  set enchantBurned(value: BigDecimal) {
    this.set("enchantBurned", Value.fromBigDecimal(value));
  }

  get seanceStaked(): BigDecimal {
    let value = this.get("seanceStaked");
    return value.toBigDecimal();
  }

  set seanceStaked(value: BigDecimal) {
    this.set("seanceStaked", Value.fromBigDecimal(value));
  }

  get seanceStakedUSD(): BigDecimal {
    let value = this.get("seanceStakedUSD");
    return value.toBigDecimal();
  }

  set seanceStakedUSD(value: BigDecimal) {
    this.set("seanceStakedUSD", Value.fromBigDecimal(value));
  }

  get seanceHarvested(): BigDecimal {
    let value = this.get("seanceHarvested");
    return value.toBigDecimal();
  }

  set seanceHarvested(value: BigDecimal) {
    this.set("seanceHarvested", Value.fromBigDecimal(value));
  }

  get seanceHarvestedUSD(): BigDecimal {
    let value = this.get("seanceHarvestedUSD");
    return value.toBigDecimal();
  }

  set seanceHarvestedUSD(value: BigDecimal) {
    this.set("seanceHarvestedUSD", Value.fromBigDecimal(value));
  }

  get enchantAge(): BigDecimal {
    let value = this.get("enchantAge");
    return value.toBigDecimal();
  }

  set enchantAge(value: BigDecimal) {
    this.set("enchantAge", Value.fromBigDecimal(value));
  }

  get enchantAgeDestroyed(): BigDecimal {
    let value = this.get("enchantAgeDestroyed");
    return value.toBigDecimal();
  }

  set enchantAgeDestroyed(value: BigDecimal) {
    this.set("enchantAgeDestroyed", Value.fromBigDecimal(value));
  }

  get users(): Array<string> {
    let value = this.get("users");
    return value.toStringArray();
  }

  set users(value: Array<string>) {
    this.set("users", Value.fromStringArray(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
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

  get enchantment(): string | null {
    let value = this.get("enchantment");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set enchantment(value: string | null) {
    if (value === null) {
      this.unset("enchantment");
    } else {
      this.set("enchantment", Value.fromString(value as string));
    }
  }

  get enchant(): BigDecimal {
    let value = this.get("enchant");
    return value.toBigDecimal();
  }

  set enchant(value: BigDecimal) {
    this.set("enchant", Value.fromBigDecimal(value));
  }

  get enchantIn(): BigDecimal {
    let value = this.get("enchantIn");
    return value.toBigDecimal();
  }

  set enchantIn(value: BigDecimal) {
    this.set("enchantIn", Value.fromBigDecimal(value));
  }

  get enchantOut(): BigDecimal {
    let value = this.get("enchantOut");
    return value.toBigDecimal();
  }

  set enchantOut(value: BigDecimal) {
    this.set("enchantOut", Value.fromBigDecimal(value));
  }

  get enchantMinted(): BigDecimal {
    let value = this.get("enchantMinted");
    return value.toBigDecimal();
  }

  set enchantMinted(value: BigDecimal) {
    this.set("enchantMinted", Value.fromBigDecimal(value));
  }

  get enchantBurned(): BigDecimal {
    let value = this.get("enchantBurned");
    return value.toBigDecimal();
  }

  set enchantBurned(value: BigDecimal) {
    this.set("enchantBurned", Value.fromBigDecimal(value));
  }

  get enchantOffset(): BigDecimal {
    let value = this.get("enchantOffset");
    return value.toBigDecimal();
  }

  set enchantOffset(value: BigDecimal) {
    this.set("enchantOffset", Value.fromBigDecimal(value));
  }

  get enchantAge(): BigDecimal {
    let value = this.get("enchantAge");
    return value.toBigDecimal();
  }

  set enchantAge(value: BigDecimal) {
    this.set("enchantAge", Value.fromBigDecimal(value));
  }

  get enchantAgeDestroyed(): BigDecimal {
    let value = this.get("enchantAgeDestroyed");
    return value.toBigDecimal();
  }

  set enchantAgeDestroyed(value: BigDecimal) {
    this.set("enchantAgeDestroyed", Value.fromBigDecimal(value));
  }

  get seanceStaked(): BigDecimal {
    let value = this.get("seanceStaked");
    return value.toBigDecimal();
  }

  set seanceStaked(value: BigDecimal) {
    this.set("seanceStaked", Value.fromBigDecimal(value));
  }

  get seanceStakedUSD(): BigDecimal {
    let value = this.get("seanceStakedUSD");
    return value.toBigDecimal();
  }

  set seanceStakedUSD(value: BigDecimal) {
    this.set("seanceStakedUSD", Value.fromBigDecimal(value));
  }

  get seanceHarvested(): BigDecimal {
    let value = this.get("seanceHarvested");
    return value.toBigDecimal();
  }

  set seanceHarvested(value: BigDecimal) {
    this.set("seanceHarvested", Value.fromBigDecimal(value));
  }

  get seanceHarvestedUSD(): BigDecimal {
    let value = this.get("seanceHarvestedUSD");
    return value.toBigDecimal();
  }

  set seanceHarvestedUSD(value: BigDecimal) {
    this.set("seanceHarvestedUSD", Value.fromBigDecimal(value));
  }

  get seanceOut(): BigDecimal {
    let value = this.get("seanceOut");
    return value.toBigDecimal();
  }

  set seanceOut(value: BigDecimal) {
    this.set("seanceOut", Value.fromBigDecimal(value));
  }

  get seanceIn(): BigDecimal {
    let value = this.get("seanceIn");
    return value.toBigDecimal();
  }

  set seanceIn(value: BigDecimal) {
    this.set("seanceIn", Value.fromBigDecimal(value));
  }

  get usdOut(): BigDecimal {
    let value = this.get("usdOut");
    return value.toBigDecimal();
  }

  set usdOut(value: BigDecimal) {
    this.set("usdOut", Value.fromBigDecimal(value));
  }

  get usdIn(): BigDecimal {
    let value = this.get("usdIn");
    return value.toBigDecimal();
  }

  set usdIn(value: BigDecimal) {
    this.set("usdIn", Value.fromBigDecimal(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }

  get seanceOffset(): BigDecimal {
    let value = this.get("seanceOffset");
    return value.toBigDecimal();
  }

  set seanceOffset(value: BigDecimal) {
    this.set("seanceOffset", Value.fromBigDecimal(value));
  }

  get usdOffset(): BigDecimal {
    let value = this.get("usdOffset");
    return value.toBigDecimal();
  }

  set usdOffset(value: BigDecimal) {
    this.set("usdOffset", Value.fromBigDecimal(value));
  }
}

export class History extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save History entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save History entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("History", id.toString(), this);
  }

  static load(id: string): History | null {
    return store.get("History", id) as History | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get timeframe(): string {
    let value = this.get("timeframe");
    return value.toString();
  }

  set timeframe(value: string) {
    this.set("timeframe", Value.fromString(value));
  }

  get seanceStaked(): BigDecimal {
    let value = this.get("seanceStaked");
    return value.toBigDecimal();
  }

  set seanceStaked(value: BigDecimal) {
    this.set("seanceStaked", Value.fromBigDecimal(value));
  }

  get seanceStakedUSD(): BigDecimal {
    let value = this.get("seanceStakedUSD");
    return value.toBigDecimal();
  }

  set seanceStakedUSD(value: BigDecimal) {
    this.set("seanceStakedUSD", Value.fromBigDecimal(value));
  }

  get seanceHarvested(): BigDecimal {
    let value = this.get("seanceHarvested");
    return value.toBigDecimal();
  }

  set seanceHarvested(value: BigDecimal) {
    this.set("seanceHarvested", Value.fromBigDecimal(value));
  }

  get seanceHarvestedUSD(): BigDecimal {
    let value = this.get("seanceHarvestedUSD");
    return value.toBigDecimal();
  }

  set seanceHarvestedUSD(value: BigDecimal) {
    this.set("seanceHarvestedUSD", Value.fromBigDecimal(value));
  }

  get enchantAge(): BigDecimal {
    let value = this.get("enchantAge");
    return value.toBigDecimal();
  }

  set enchantAge(value: BigDecimal) {
    this.set("enchantAge", Value.fromBigDecimal(value));
  }

  get enchantAgeDestroyed(): BigDecimal {
    let value = this.get("enchantAgeDestroyed");
    return value.toBigDecimal();
  }

  set enchantAgeDestroyed(value: BigDecimal) {
    this.set("enchantAgeDestroyed", Value.fromBigDecimal(value));
  }

  get enchantMinted(): BigDecimal {
    let value = this.get("enchantMinted");
    return value.toBigDecimal();
  }

  set enchantMinted(value: BigDecimal) {
    this.set("enchantMinted", Value.fromBigDecimal(value));
  }

  get enchantBurned(): BigDecimal {
    let value = this.get("enchantBurned");
    return value.toBigDecimal();
  }

  set enchantBurned(value: BigDecimal) {
    this.set("enchantBurned", Value.fromBigDecimal(value));
  }

  get enchantSupply(): BigDecimal {
    let value = this.get("enchantSupply");
    return value.toBigDecimal();
  }

  set enchantSupply(value: BigDecimal) {
    this.set("enchantSupply", Value.fromBigDecimal(value));
  }

  get ratio(): BigDecimal {
    let value = this.get("ratio");
    return value.toBigDecimal();
  }

  set ratio(value: BigDecimal) {
    this.set("ratio", Value.fromBigDecimal(value));
  }
}
