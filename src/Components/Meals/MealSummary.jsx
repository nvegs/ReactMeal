import React from 'react';


const MealSummary = (props) => {
    return (
        <section className='text-center max-w-3xl w-[90%] m-auto relative text-sky-50 rounded-2xl p-4 shadow-black shadow-xl -mt-8 mb-8 bg-[#383838] '>
            <h2 className='text-4xl mt-0 font-bold'>Delicious food, Delivered to you</h2>
            <p>Choose your favorite meal from our broad
                selection of available meals and enjoy a
                delicious lauch or dinner at home
            </p>
            <p>
                All our meals are cooked with high-quality
                ingredients, just-in-time and of course by
                experience chefs!
            </p>
        </section>
    );
}

export default MealSummary;