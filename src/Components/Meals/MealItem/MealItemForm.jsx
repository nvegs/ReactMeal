import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import AddIcon from "../../Cart/AddIcon";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef(1);

    //submit to add to cart
    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        //converting string to number
        // const enteredAmountNumber = +enteredAmount;
        const enteredAmountNumber = Math.floor(enteredAmount);

        //validatation
        if (enteredAmount.trim().length === 0
            || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        //only execute when AmountIsValud is true
        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form onSubmit={submitHandler} className="text-right">
            <Input 
                label="Amount"
                ref={amountInputRef}
                input={{
                    id: "amount",
                    type: "number",
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',

                }}
            />

            <button className="cursor-pointer bg-[#8a2b06] text-sky-50 px-4 rounded-2xl font-bold border-[#8a2b06] border-2 hover:bg-[#641e03] active:border-[#641e03]"><AddIcon className="text-2xl" /></button>
            {!amountIsValid && <p>Pls enter a valid number from (1 - 5)</p>}
        </form>
    );
}

export default MealItemForm;