import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="flex justify-center gap-2 mt-10 mb-4">
                {pageNumbers.map(number => (
                    <li key={number} className="list-none">
                        <a onClick={() => paginate(number)} 
                           href="!#" 
                           className={`px-3 py-1 border rounded ${
                             currentPage === number ? 'bg-blue-500 text-white' : 'bg-white'
                           }`}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
