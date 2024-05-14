import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button
          key={index} // Use index as key if categories don't have unique IDs
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
