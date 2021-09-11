/* eslint-disable prefer-const */
import { BigInt } from "@graphprotocol/graph-ts";
import { SoulPower } from "../../generated/schema";
import { Transfer } from "../../generated/SoulPower/ERC20";
//import { fetchTokenDecimals, fetchTokenName, fetchTokenSymbol } from "./utils/erc20";

let ZERO_BI = BigInt.fromI32(0);
const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
let SOUL_ADDRESS = "0xe2fb177009ff39f52c0134e8007fa0e4baacbd07";

export function handleTransfer(event: Transfer): void {
    let token = SoulPower.load(SOUL_ADDRESS);
    if (token === null) {
      token = new SoulPower(SOUL_ADDRESS);
      // token.totalBurned = ZERO_BI;
      token.save();
    }

    // Burning    
    if (event.params.to.toHex() == ADDRESS_ZERO) {
     token.totalBurned = token.totalBurned.plus(event.params.value);
     token.save();
   }
}
