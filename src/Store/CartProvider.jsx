import { useReducer } from "react";
import CartContext from "./cart-context";

//initial state
const defaultCartState = {
    items: [],
    totalAmount: 0
}

//the reducer function to update the current state using its action
const cartReducer = (state, action) => {
 
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.payload_item.price * action.payload_item.amount;
        const   existingCartItemIndex = state.items.findIndex(item => item.id === action.payload_item.id);
            
        //getting the existing item using the index
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            //update the amount if there is an existing item in the cart
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount + action.payload_item.amount };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;

        } else {
            updatedItems = state.items.concat(action.payload_item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }    
        
    if (action.type === 'REMOVE') {
        //check the items to find the index of the clicked item
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload_id);
        
        //storing the clicked item to be removed in a variable
        const existingItem = state.items[existingCartItemIndex];
        
        //calculate the new total amount when items are removed from the cart
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        //checking if the existing amount exist? if yes
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.payload_id);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    
    }
}

const CartProvider = (props) => {

    //useReducer function
    const [cartUpdatedState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    //dispatch function for updating the state
    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', payload_item: item });
    }

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', payload_id : id})
    }

    //the value of the context provider where the updated states
    const cartContext = {   
        items: cartUpdatedState.items,
        totalAmount: cartUpdatedState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;