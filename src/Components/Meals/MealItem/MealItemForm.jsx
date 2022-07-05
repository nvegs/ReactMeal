import React from "react";
import Input from "../../UI/Input";

const MealItemForm = () => {
    return (
        <form className="text-right">
            <Input 
                label="Amount"
                input={{
                id: "amount",
                type: "number",
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',

                }}
            />

            <button className="cursor-pointer bg-[#8a2b06] text-sky-50 py-1 px-8 rounded-3xl font-bold border-[#8a2b06] border-2 hover:bg-[#641e03] active:border-[#641e03] ">+</button>
        </form>
    );
}

export default MealItemForm;