import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import axios from 'axios';
import ListPassengers from './ListPassenger';
import Filter from './Filter';

function ListPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2); // Adjust as per your API's data per page
    const [totalItems, setTotalItems] = useState(0);
    const [final, setFinal] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const categories = ['pork',
    'seafood',
    'kids',
    'chicken',
    'beef',
    'vegetarian',
    'breakfast'];
    const [selectedCategory, setSelectedCategory] = useState('All');
    useEffect(() => {
        // Fetch the total number of items
        axios.get('http://localhost:3000/meals/count')
            .then(response => {
                setTotalItems(response.data); 
                setFinal(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the total items:', error);
            });
    }, []);

    /*useEffect(() => {
        if (selectedCategory === 'All'){
            axios.get(`http://localhost:3000/meals/query?page=${currentPage}`)
            .then(response => {

                setCurrentItems(response.data);
            })
        }
        else{
        axios.get(`http://localhost:3000/meals/query?page=${currentPage}&keyword=${selectedCategory}`)
            .then(response => {

                setCurrentItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the items:', error);
            });
    }}, [currentPage]);*/
    useEffect(() => {
        if (selectedCategory === 'All'){
            axios.get(`http://localhost:3000/meals/query?page=${currentPage}`)
            .then(response => {
                axios.get('http://localhost:3000/meals/count')
                .then(response => {
                setTotalItems(response.data); 
                setFinal(response.data);
            })

                setCurrentItems(response.data);
            })
        }
        else{
        axios.get(`http://localhost:3000/meals/query?page=${currentPage}&keyword=${selectedCategory}`)
            .then(response => {
                setCurrentItems(response.data);
                setTotalItems(response.data.length)
            })
            .catch(error => {
                console.error('There was an error fetching the items:', error);
            });
    }}, [selectedCategory,currentPage]);
    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };
    const paginate = pageNumber => setCurrentPage(pageNumber);
    console.log(totalItems)
    return (
        <div className="App">
            <Filter categories={['All', ...categories]} onSelectCategory={handleSelectCategory}  selectedCategory={selectedCategory} />
            <div>
                 
                {
                    <ListPassengers allMeals={currentItems}/> // Adjust based on your data structure
                }
            </div>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
}

export default ListPage;
