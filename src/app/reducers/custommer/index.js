import { combineReducers } from 'redux';
import IDName from './product/Id';
import GetCarts from './product/GetCarts';
import GetProduct from './product/GetProduct';
import GetUser from './../admin/user/getUser';

const appReducer = combineReducers({
    IDName,
    GetProduct,
    GetCarts,
    GetUser

});

export default appReducer;