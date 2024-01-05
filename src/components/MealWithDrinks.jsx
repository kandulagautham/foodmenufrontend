import React from 'react';
import Meals from './Meals';
import { useState } from 'react';
function MealWithDrinks() {
    const [selectedMealInfo, setSelectedMealInfo] = useState(null);
    const handleMealSelection = (mealData) => {setSelectedMealInfo(mealData);};
    
    const mealData = {
        id: "meal1",
        title: "3 course chicken",
        starter: "Lorem Ipsum",
        desert: "Cake",
        price: 9.99,
        labels: ["chicken", "breakfast"],
        img: "https://source.unsplash.com/XaDsH-O2QXs",
        drinks: 
        [
            { id: "drink-1", title: "Vine", price: 4.99 },
            { id: "drink-2", title: "Juice", price: 5.99 },
            { id: "drink-3", title: "Beer", price: 6.99 }
        ]
    };

    return (
        <div className="App">
            <Meals meal={mealData} onMealSelect={handleMealSelection} />
            {selectedMealInfo && (
                <div>
                    <h3>Selected Meal Summary</h3>
                    <p>Meal: {selectedMealInfo.meal.title}</p>
                    <p>Drink: {selectedMealInfo.drink}</p>
                    <p>Total Price: ${selectedMealInfo.totalPrice.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
}
export default MealWithDrinks;
