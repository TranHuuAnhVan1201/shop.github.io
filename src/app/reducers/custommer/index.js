import { combineReducers } from 'redux';
import IDName from './product/Id';
import GetCarts from './product/GetCarts';
import GetProduct from './product/GetProduct';

const appReducer = combineReducers({
    IDName,
    GetProduct,
    GetCarts

});

export default appReducer;