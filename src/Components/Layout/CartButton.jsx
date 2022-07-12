import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";

const CartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    console.log({items})

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setBtnIsHighlighted(true);

        const timeOut = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);

        return () => {
            clearTimeout(timeOut);
        }

        
    }, [items]);

    //accumulating all the items selected
    const numberOfCartItems = items.reduce((curAccumulator, item) => { 
        return curAccumulator + item.amount;
    }, 0);

    const btnClasses = `flex items-center cursor-pointer justify-between gap-4 rounded-3xl bg-[#4d1601] hover:bg-[#2c0d00] text-sky-50 font-bold p-2 active:bg-[#2c0d00] ${ btnIsHighlighted ? 'animate-bump': '' }`;
    
    return (
        <button onClick={props.onClick} className={btnClasses}>
            <span><CartIcon className="text-xl"/></span>
            <span>{props.children}</span>
            <span className="bg-[#b94517] rounded-3xl py-1 px-4 ">{ numberOfCartItems }</span>
        </button>
    );
} 

export default CartButton;