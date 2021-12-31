import { ActionType } from "../action-type"
import { Dispatch } from "redux"
import { Action } from "../actions"

export const depositmoney=(amount:number)=>{
return (dispatch:Dispatch<Action>)=>{
    dispatch({
        type:ActionType.DEPOSIt,
        payload:amount
    })
}
}
export const withdrawMoney=(amount:number)=>{
    return (dispatch:Dispatch)=>{
        dispatch({
            type:ActionType.WITHDRAW,
            payload:amount
        })
    }
}
export const bankrupt=()=>{
    return (dispatch:Dispatch)=>{
        dispatch({
            type:ActionType.BANCRUPT,
        })
    }
}
