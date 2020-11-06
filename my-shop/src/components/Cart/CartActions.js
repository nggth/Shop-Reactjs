import {
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY
} from '../../commons/constants';

// Add cart action
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    };
};

// Remove item action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    };
};

// Subtract qt action
export const subQuantity = (id) => {
    return{
        type: SUB_QUANTITY,
        id
    };
};

// Add qt action
export const addQuantity = (id) => {
    return{
        type: ADD_QUANTITY,
        id
    };
};
