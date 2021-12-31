import { ActionType } from "../action-type";
import { Action } from "../actions";

const intialstate =0;


const reducer=(state :number=intialstate,action:Action)=>{
    switch(action.type){
        case ActionType.DEPOSIt:
            return state + action.payload
        case ActionType.WITHDRAW:
            return state -action.payload
        case ActionType.BANCRUPT:
            return 0;
        default:
            return state
    }

}

export default reducer
