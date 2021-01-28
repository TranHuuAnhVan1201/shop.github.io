import { combineReducers } from 'redux';
import IDName from './product/Id';
import GetProduct from './product/GetProduct';
const appReducer = combineReducers({
    IDName,
    GetProduct
});

export default appReducer;