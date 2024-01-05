import React, { useState, useEffect } from 'react';
import Filter from './Filter';

function App() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter(item => item.category === selectedCategory));
        }
    }, [selectedCategory]);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <Filter categories={['All', ...categories]} onSelectCategory={handleSelectCategory} />
            <div>
                {filteredData.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    );
}

export default App;
