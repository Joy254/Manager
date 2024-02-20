import React from 'react';
import Category from './Category';

const CategoryList = ({ categories, selectedCategoryId, handleSelectCategory }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          isSelected={category.id === selectedCategoryId}
          handleSelectCategory={handleSelectCategory}
        />
      ))}
    </div>
  );
};

export default CategoryList;