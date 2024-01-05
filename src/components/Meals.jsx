import React, { useState } from 'react';
function Meals({ meal, passengerId, onMealSelect }) {
    const [selectedDrink, setSelectedDrink] = useState('');
    const [totalPrice, setTotalPrice] = useState(meal.price);
    const [mealSelected, setMealSelected] = useState(false);
    const handelPrice = (selectedDrink1)=>{
        const drinkPrice = meal.drinks.find(drink => drink.title === selectedDrink1)?.price || 0;
        const totalPrice = meal.price + drinkPrice;
        setTotalPrice(totalPrice);
    }
    const handleDrinkChange = (event) => {
        setSelectedDrink(event.target.value);
        handelPrice(event.target.value);
    };
    const selectMeal = () => {
        const drinkPrice = meal.drinks.find(drink => drink.title === selectedDrink)?.price || 0;
        const totalPrice = meal.price + drinkPrice;
        const mealSelection = { meal, drink: selectedDrink, totalPrice };
        setTotalPrice(totalPrice);
        setMealSelected(true);
        onMealSelect(passengerId, mealSelection);
    };
    return (
    
            <div className='grid grid-cols-1 sm:grid-cols-6 gap-8 p-4 relative border h-1/2  mt-6 mb-6 ml-4 mr-4'>
                <div className='col-span-2'>
                    <img src={meal.img}  className=' h-40 w-96'></img>
                </div>
                <div className='col-span-2'>
                    <h3>{meal.title}</h3>
                    <p>Starter: {meal.starter}</p>
                    <p>Desert: {meal.desert}</p>
                    <select value={selectedDrink} onChange={handleDrinkChange}>
                        <option value="">Choose a Drink</option>
                        {meal.drinks.map(drink => (
                            <option key={drink.id} value={drink.title}>{drink.title} - ${drink.price}</option>
                        ))}
                    </select>
                </div>
                <div className='col-span-2'>
                    {<p>Total Price: ${totalPrice.toFixed(2)}</p>}
                    <button className='absolute right-5 bottom-5 ' onClick={selectMeal}>Select Meal</button>
                </div>
            </div>
    );
}
export default Meals;