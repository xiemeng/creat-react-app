import * as TYPES from './ActionsTypes'

const initailState = '我是默认的';
const change_chice = {
    a:1,
    b:2,
};

export const inputVal = function(state = initailState, action){
    switch (action.type){
        case TYPES.CHANGE_INPUT_VAL:
            return action.inpVal
        default:
            return state
    }
}
export const CHANGE_CHICSHI = function(state = change_chice, action){
    switch (action.type){
        case TYPES.CHANGE_CHICSHI:
            return action.change_chice
        default:
            return state
    }
}