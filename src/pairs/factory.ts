/* eslint-disable prefer-const */
import { BigInt } from "@graphprotocol/graph-ts";
import { SoulSwapFactory, Pair, Token } from "../../generated/schema";
import { PairCreated } from "../../generated/Factory/Factory";
import { fetchTokenDecimals, fetchTokenName, fetchTokenSymbol } from "./utils/ERC20";

let ZERO_BI = BigInt.fromI32(0);
let ONE_BI = BigInt.fromI32(1);
let FACTORY_ADDRESS = "0x1120e150dA9def6Fe930f4fEDeD18ef57c0CA7eF";

export function handlePairCreated(event: PairCreated): void {
  let factory = SoulSwapFactory.load(FACTORY_ADDRESS);
  if (factory === null) {
    factory = new SoulSwapFactory(FACTORY_ADDRESS);
    factory.totalPairs = ZERO_BI;
    factory.save();
  }
  factory.totalPairs = factory.totalPairs.plus(ONE_BI);
  factory.save();

  let token0 = Token.load(event.params.token0.toHex());
  if (token0 === null) {
    token0 = new Token(event.params.token0.toHex());
    token0.name = fetchTokenName(event.params.token0);
    token0.symbol = fetchTokenSymbol(event.params.token0);
    let decimals = fetchTokenDecimals(event.params.token0);
    if (decimals === null) {
      return;
    }
    token0.decimals = decimals;
    token0.save();
  }

  let token1 = Token.load(event.params.token1.toHex());
  if (token1 === null) {
    token1 = new Token(event.params.token1.toHex());
    token1.name = fetchTokenName(event.params.token1);
    token1.symbol = fetchTokenSymbol(event.params.token1);
    let decimals = fetchTokenDecimals(event.params.token1);
    if (decimals === null) {
      return;
    }
    token1.decimals = decimals;
    token1.save();
  }

  let pair = new Pair(event.params.pair.toHex());
  pair.token0 = token0.id;
  pair.token1 = token1.id;
  pair.name = token0.symbol.concat("-").concat(token1.symbol);
  pair.block = event.block.number;
  pair.timestamp = event.block.timestamp;
  pair.save();
}
