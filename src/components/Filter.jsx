function Filter({ categories, selectedCategory, onSelectCategory }) {
    return (
        <div className="flex-row sm:flex sm:justify-center  gap-4 ">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`text-sm p-4 border border-gray-500 mt-4 mb-4 rounded-full  ${
                        selectedCategory === category
                        ? 'bg-blue-500 text-white' // Selected category style
                        : 'bg-white text-black' // Non-selected category style
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
export default  Filter;