// CategoryContent.js

import Resource from "./Resource";

function CategoryContent({ category, resources }) {
  const filteredResources = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <div className="penger">
      {filteredResources.map((resource, index) => (
        <Resource key={index} {...resource} />
      ))}
    </div>
  );
}

export default CategoryContent;
