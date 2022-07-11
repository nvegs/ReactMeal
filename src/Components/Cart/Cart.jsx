import React, { useContext } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../Store/cart-context";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    
    //validation to check if there is an item in the cart
    const hasItem = cartCtx.items.length > 0;

    const cartItemAddHandler = item => {
        cartCtx.addItem(item); 
    }

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    }


    const cartItem = (
        <ul className="m-0 p-0 max-h-80 overflow-auto">
            {
                cartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onAdd={cartItemAddHandler.bind(null, item)}
                        onRemove={cartItemRemoveHandler.bind(null, item .id)}
                    />
                ))
            }
        </ul>
    );
    return (
        <Modal onHideBackdrop={props.onHideCartHandler}>
            <div className="flex flex-col text-base font-semibold my-2">
                <h5>{cartItem}</h5>
                <div className="flex items-center font-bold text-2xl justify-between mt-2">
                    <span>Total Amount</span>
                     <span>{totalAmount}</span>        
                </div>
            </div>
            <div className="text-right">
                <Button onClick={props.onHideCartHandler} className="text-[#8a2b06] border-[1px] border-[#5a1a01] bg-sky-50">Close</Button>
               {hasItem && <Button className="text-sky-50 bg-[#763115]">Order</Button>}
            </div>
        </Modal>
    );
}

export default Cart;