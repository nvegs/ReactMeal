import React, {useContext} from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/cart-context";

const MealItem = props => {
    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (enteredAmountNumber) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: enteredAmountNumber,
            price: props.price
        });
    }

    return (
        <li key={props.id}  className="flex justify-between m-4 pb-4 border-[#ccc] border-b-2 ">
            <div>
                <h3 className="mt-0 mr-0 mb-1 m ml-0 font-bold text-3xl">{ props.name }</h3>
                <div className="italic"> {props.description} </div>
                <div className="mt-1 font-bold text-[#ab5502] text-xl "> {price} </div>
            </div>

            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
}

export default MealItem;