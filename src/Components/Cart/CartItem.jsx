import React, { Fragment } from "react";
// import RmButton from "../UI/RmButton";
import DeleteIcon from "./DeleteIcon";

const CartItem = (props) => {
    const priceItem = `$${props.price.toFixed(2)}`;

    return (
        <Fragment>
            <li className="flex justify-between py-2">
                <div>
                    <h2 className="text-2xl text-[#8a2b06] ">{props.name}</h2>
                    <div className="flex items-center">
                        <span>{priceItem}</span>
                        <span className="flex items-center mx-10"><DeleteIcon /> {props.amount}</span>
                    </div>
                </div>

                <div className="flex items-center">
                    <button onClick={props.onRemove}
                        className="border-2 px-3 mx-1"
                    >
                        -
                    </button>

                    <button
                        onClick={props.onAdd}
                        className="border-2 px-3 mx-1"
                    >
                        +
                    </button>
                </div>

                {/* <RmButton
                        // onClick={ }
                    /> */}
            </li>
            <hr />
        </Fragment>
        
    );
}

export default CartItem;