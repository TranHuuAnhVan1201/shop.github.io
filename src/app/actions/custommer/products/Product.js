import *as types from '../../../constants/ActionType';

export const IDName = (id) => {
    return {
        type: types.ID,
        id
    };
};

export const getProduct = () => {
    return {
        type: types.GETPRODUCT
    };
};


export const addProductToCart = (payload) => {
    return {
        type: types.ADD_PRODUCT_TO_CART,
        payload
    };
};
export const deleteProductInCart = (payload) => {
    return {
        type: types.DELETE_CART,
        payload
    };
};
export const getIncrease_Quantity = (payload) => {
    return {
        type: types.INCREASE_QUANTITY,
        payload
    };
};
export const getDecrease_Quantity = (payload) => {
    return {
        type: types.DECREASE_QUANTITY,
        payload
    };
};

