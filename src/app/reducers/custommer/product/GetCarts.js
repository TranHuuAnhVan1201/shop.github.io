import *as types from './../../../constants/ActionType';
const init = { numberCart: 0, items: [] }
var myReducer = (state = init, action) => {
    console.log(state);
    switch (action.type) {
        case types.ADD_PRODUCT_TO_CART:
            if (state.numberCart === 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    title: action.payload.title,
                    url: action.payload.url,
                    price: action.payload.price,
                }
                state.items.push(cart);
            }
            else {
                let check = false;
                state.items.map((value, key) => {
                    if (value.id === action.payload.id) {
                        state.items[key].quantity++;
                        check = true;
                    }
                })
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        title: action.payload.title,
                        url: action.payload.url,
                        price: action.payload.price,
                    }
                    state.items.push(_cart);
                };

            }

            return {
                ...state,
                numberCart: state.numberCart + 1
            };

        case types.INCREASE_QUANTITY:
            state.numberCart++;
            state.items[action.payload].quantity++;
            console.log(state);

            return {
                ...state
            };
        case types.DECREASE_QUANTITY:
            let quantity = state.items[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.items[action.payload].quantity--;
            }
                       
            return {
                ...state
            };
            
        case types.DELETE_CART:
            let quantity_ = state.items[action.payload].quantity;
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                items: state.items.filter(item => {
                    return item.id !== state.items[action.payload].id
                })
            }

        
            
        default:

            return state;
    }
}

export default myReducer;