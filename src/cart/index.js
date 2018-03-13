import * as types from './types';
import cartActions from './actions';

const initialState = false

const reducer = (state = {initialState}, action) => {
    switch(action.type){
        case types.TOGGLE_CART: {
            return state === false ? true : false;
        }
        default:
            return state;
    }
    return state;
}

export {
    cartActions
}

export default reducer;