function Passenger({ name, mealSelection }) {
    return (
        <div className='relative border md:mr-4 md:ml-4 md:mt-6 md:mb-6 md-3 mt-3 ml-1 mr-1'>
            <h3>{name}</h3>
            {mealSelection ? (
                <div>
                    <p>Meal: {mealSelection.meal.title}</p>
                    <p>Drink: {mealSelection.drink}</p>
                    <p>Total Price: ${mealSelection.totalPrice}</p>
                </div>
            ) : (
                <p>No meal selected.</p>
            )}
        </div>
    );
}
export default Passenger