import React, { useState } from 'react';
import Passenger from './Passenger';
import Meals from './Meals';
const initialPassengers = [
    { id: 1, name: 'Passenger 1', mealSelection: null },
    { id: 2, name: 'Passenger 2', mealSelection: null },
    ];
function ListPassengers({allMeals}) 
{
    const [passengers, setPassengers] = useState(initialPassengers);
    const [selectedPassengerId, setSelectedPassengerId] = useState(passengers[0]?.id || null);
    const handlePassengerChange = (event) => {
        setSelectedPassengerId(parseInt(event.target.value, 10));
    };
    const handleMealSelection = (pass,mealData) => {
        setPassengers(passengers.map(passenger =>
            passenger.id === selectedPassengerId ? { ...passenger, mealSelection: mealData } : passenger
        ));
    };
    const selectedPassenger = passengers.find(p => p.id === selectedPassengerId);
    return (
         <div className="grid grid-cols-5 gap-4 justify-center items-center">
             <div className="gap-4 col-span-4  bg-slate-300 mr-10 ml-10 ">
                {selectedPassenger && (
                    allMeals.map(item => (
                    <Meals
                        key={item.id}
                        meal={item}
                        passengerId={selectedPassengerId}
                        onMealSelect={handleMealSelection}
                    />)
                    )
                )}
            </div>
            <div className=' bg-slate-400 relative border mr-6  mt-6 mb-6 '>
                <div className='relative md:mr-4 md:ml-4 md:mt-6 md:mb-6 md-3 mt-3 ml-1 mr-1'>
                <h2 className='mt-3 mb-3 '>Select Passenger</h2>
                <select className='mt-3 mb-3' value={selectedPassengerId} onChange={handlePassengerChange}>
                    {passengers.map(passenger => (
                        <option key={passenger.id} value={passenger.id}>{passenger.name}</option>
                    ))}
                </select>
                </div>
                {passengers.map(passenger => (
                    <Passenger key={passenger.id} name={passenger.name} mealSelection={passenger.mealSelection} />
                ))}
            </div>
        </div>
    );
}

export default ListPassengers;
