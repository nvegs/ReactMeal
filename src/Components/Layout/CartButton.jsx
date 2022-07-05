import React from "react"
import CartIcon from "../Cart/CartIcon";

const CartButton = (props) => { 

    return (
        <button onClick={props.onClick} className="flex items-center cursor-pointer justify-between gap-4 rounded-3xl bg-[#4d1601] hover:bg-[#2c0d00] text-sky-50 font-bold p-2 active:bg-[#2c0d00] ">
            <span><CartIcon className="text-xl"/></span>
            <span>{props.children }</span>
            <span className="bg-[#b94517] rounded-3xl py-1 px-4 ">3</span>
        </button>
    );
}

export default CartButton