import React from "react";
import Input from "../../UI/Input";
import AddIcon from "../../Cart/AddIcon";

const MealItemForm = () => {
    return (
        <form className="text-right">
            <Input 
                label="Quantity"
                input={{
                id: "quantity",
                type: "number",
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',

                }}
            />

            <button className="cursor-pointer bg-[#8a2b06] text-sky-50 px-4 rounded-2xl font-bold border-[#8a2b06] border-2 hover:bg-[#641e03] active:border-[#641e03]"><AddIcon className="text-2xl" /></button>
        </form>
    );
}

export default MealItemForm;