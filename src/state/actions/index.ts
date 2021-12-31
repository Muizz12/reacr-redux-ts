import { ActionType } from "../action-type";

interface Deposit{
    type:ActionType.DEPOSIt,
    payload:number

}
interface Withdraw{
    type:ActionType.WITHDRAW
    payload:number

}
interface bankrupt{
    type:ActionType.BANCRUPT,

}

export type Action=Deposit|Withdraw|bankrupt