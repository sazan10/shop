import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const onDataUpdate = (state, action) => {
    // state.component.push(action.component);
    return updateObject(state,  return updateObject( state );
    );
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_STATE: return onDataUpdate(state, action);
        default:
            return state;
    }
};
export default reducer;