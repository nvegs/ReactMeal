import React from "react";
import DeleteIcon from "../Cart/DeleteIcon";

const RmButton = (props) => {
    return (
        <button type={props.type} onClick={props.onClick}>
            <DeleteIcon className="text-red-700 ml-2" />
        </button>
    )
}

export default RmButton;