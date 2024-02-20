import React from 'react';

const Category = ({ category, handleSelectCategory, isSelected }) => {
  return (
    <div
      className={`category-item ${isSelected ? 'selected' : ''}`}
      onClick={() => handleSelectCategory(category.id)}
    >
      {category.name}
    </div>
  );
};

export default Category;
