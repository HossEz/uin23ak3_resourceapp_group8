// Categories.js

import CategoryButton from "./CategoryButton";

function Categories({ categories, onClick }) {
  return (
    <div id="categories">
      {categories.map((category, index) => (
        <CategoryButton key={index} category={category} onClick={onClick} />
      ))}
    </div>
  );
}

export default Categories;
