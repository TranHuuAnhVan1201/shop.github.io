import *as type from './../../../constants/ActionType';

var initialStage = {};

var myReducer = (state = initialStage, action) => {
    switch (action.type) {
        case type.ID:
            state = {
                id: action.id
            }
            return state;

        default:
            return state;
    }
}
export default myReducer;