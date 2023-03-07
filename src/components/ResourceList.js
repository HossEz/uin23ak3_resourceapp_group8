// ResourceList.js

import { useState } from "react";
import Categories from "./Categories";
import CategoryContent from "./CategoryContent";

function ResourceList({ resources }) {
  const categories = resources.map((resource) => resource.category);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }

  return (
    <div>
      <Categories categories={categories} onClick={handleCategoryClick} />
      <CategoryContent
        category={selectedCategory}
        resources={resources}
      />
    </div>
  );
}

export default ResourceList;
