import React from "react";
import pizzaImage from "../../Assets/meals.jpg";
import CartButton from "./CartButton";

const Header = (props) => {
    
    return (
        <>
            <header className="flex flex-row fixed top-0 left-0 justify-between items-center z-10 shadow-md px-4 md:px-28 w-full h-20 text-sky-50 bg-[#8a2b06]">
                <h1 className="text-2xl font-bold">ReactMeals</h1>
                <CartButton onClick={props.onShowCartHandler}>Your Cart</CartButton>
            </header>

            <div className="w-full h-[25rem] z-0 overflow-hidden">
                <img src={pizzaImage} alt={`A Table full of delicious food`} className="w-full h-full" />
            </div>
        </>
    );
}

export default Header;