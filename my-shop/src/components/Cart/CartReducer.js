import items from '../../data';
import {
    ADD_TO_CART,
    REMOVE_ITEM,
    ADD_QUANTITY,
    SUB_QUANTITY,
    ADD_SHIPPING,
    SUB_SHIPPING
} from '../../commons/constants';

/**
 * [getItems Format data]
 * @return {[Array]}
 */
const getItems = () => {
    const formatItems = items.map(item => {
        const id = item.sys.id,
            images = item.fields.images.map(image => image.fields.file.url),
            cloth = { ...item.fields, images, id };

        return cloth;
    });

    return formatItems;
}

const initState = {
    items: getItems(),
    addedItems:[],
    total: 0
};

const CartReducer = (state = initState, action) => {
    // Add item to cart
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item => item.id === action.id),
            // Check if the action id exists in the addedItems
            existedItem = state.addedItems.find(item => action.id === item.id);
        // Calculate quantity if exists item in cart
        if(existedItem) {
            addedItem.quantity += 1;
            return {
                ...state,
                total: state.total + addedItem.price
            };
        } else {
            addedItem.quantity = 1;
            // Calculating the total
            const newTotal = state.total + addedItem.price;

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
        }
    }

    // Remove item from cart
    if (action.type === REMOVE_ITEM) {
        const itemToRemove= state.addedItems.find(item => action.id === item.id),
            newItems = state.addedItems.filter(item => action.id !== item.id),
            newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);

        return {
            ...state,
            addedItems: newItems,
            total: newTotal
        };
    }

    // Add quantity for item
    if (action.type === ADD_QUANTITY) {
        const addedItem = state.items.find(item => item.id === action.id);
        // Add quantity
        addedItem.quantity += 1;
        // Calculate total
        const newTotal = state.total + addedItem.price;

        return{
          ...state,
          total: newTotal
        };
    }

    // Sub quantity for item
    if (action.type === SUB_QUANTITY) {
        const addedItem = state.items.find(item => item.id === action.id);
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            const newItems = state.addedItems.filter(item=>item.id !== action.id),
                newTotal = state.total - addedItem.price;

            return {
                ...state,
                addedItems: newItems,
                total: newTotal
            };
        } else {
            addedItem.quantity -= 1;
            
            const newTotal = state.total - addedItem.price;

            return {
                ...state,
                total: newTotal
            };
        }
    }

    // Add shipping from total
    if (action.type=== ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 6
        };
    }

    // Remove shipping from total
    if (action.type === SUB_SHIPPING) {
        return{
            ...state,
            total: state.total - 6
        };
    }

    return state;
};

export default CartReducer;
