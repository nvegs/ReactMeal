
import React, {forwardRef} from "react";

const Input = forwardRef((props, ref) => {
    return (
        <div className="flex items-center mb-2 text-inherit">
            <label className="font-bold mr-4"
                htmlFor={props.input.id}
            >
                {props.label}
            </label>
          
            <input ref={ref} className="w-12 rounded-md pl-2"
                id={props.input.id}
                {...props.input}
            />
        
        </div>
    );
});

export default Input;