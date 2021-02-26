import *as types from './../../../constants/ActionType';

const init = JSON.parse(localStorage.getItem('IDName')) || [];
var myReducer = (state = init, action) => {
    switch (action.type) {
        case types.ID:
            state = {
                id: action.id
            }
            localStorage.setItem('IDName', JSON.stringify(state));
            return {
                ...state
            };
        default:
            return state;
    };
    
}

export default myReducer;