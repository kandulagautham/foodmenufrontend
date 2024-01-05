import React from 'react'
import { useState } from 'react';

const demo=
{
      "id": "meal1",
      "title": "3 course chicken",
      "starter": "Lorem Ipsum",
      "desert": "Cake",
      "price": 9.99,
      "labels": [
        "chicken",
        "breakfast"
      ],
      "img": "https://source.unsplash.com/XaDsH-O2QXs",
      "drinks": [
        {
          "id": "drink-1",
          "title": "Vine",
          "price": 4.99
        },
        {
          "id": "drink-2",
          "title": "Juice",
          "price": 5.99
        },
        {
          "id": "drink-3",
          "title": "Beer",
          "price": 6.99
        }
      ]
}
const Menu = () => {
     const [count, setCount] = useState(0);
  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-8 p-4 relative border h-1/2 w-3/4 lg:left-24 left-10 mt-6 mb-6'>
            <div className='col-span-2'>
                <img src={demo.img} height='300' width='300' className=''></img>
            </div>
            <div className='col-span-2'>
                <h3>{demo.title}</h3>
                <p>Starter: {demo.starter}</p>
                <p>Desert: {demo.desert}</p>
                <p>Selected Drink: </p>
                <div className='flex'>
                    {demo.drinks.map((d) => (
                        <div key={d.id} className=' pr-4'>
                            <h3>{d.title}</h3>
                        </div>
                    ))}
                </div>
                <p className='absolute right-1 bottom-5 '>hi</p>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-8 p-4 relative border h-6/10 w-3/4 lg:left-24 left-10 mt-6 mb-6'>
            <div className='col-span-2'>
                <img src={demo.img} height='300' width='300' className=''></img>
            </div>
            <div className='col-span-2'>
                <h3>{demo.title}</h3>
                <p>Starter: {demo.starter}</p>
                <p>Desert: {demo.desert}</p>
                <p>Selected Drink: {drink1}</p>
                <div className='flex'>
                    {demo.drinks.map((d) => (
                        <button key={d.id} className=' pr-4'>
                            <h3>{d.title}</h3>
                        </button>
                    ))}
                </div>
                <p className='absolute right-1 bottom-5 '>hi</p>
            </div>
        </div>
    </>
  )
}

export default Menu