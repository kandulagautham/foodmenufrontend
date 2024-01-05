import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'
import Meals from './components/Meals'
import MealWithDrinks from './components/MealWithDrinks'
import ListPassengers from './components/ListPassenger'
import ListPage from './components/ListPage'
const mealData1 = {
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
function App() {
  const [count, setCount] = useState(0)
  {
    /*
      <div className="grid grid-cols-5 gap-4">
        <div className="gap-4 col-span-4  bg-slate-300">
          <MealWithDrinks/>
        </div>
        <div className=' bg-slate-600'>Outer 2</div>
        <ListPassengers mealData={mealData1}/>
      </div>
    */
  }

  return (
    <>
      <ListPage/>
    </>
  )
}

export default App
