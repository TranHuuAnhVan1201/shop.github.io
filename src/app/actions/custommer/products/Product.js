import *as type from '../../../constants/ActionType';

export const IdTest = (id) => {
    return {
        type: type.ID,
        id
    }
}

export const getProduct = () => {
    return {
        type: type.GETPRODUCT
    }
}