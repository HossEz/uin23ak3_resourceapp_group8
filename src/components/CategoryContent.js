import React from 'react';

function CategoryContent(props) {
  const { resources } = props;

  return (
    <div className="category-content">
      {resources.map((resource, index) => (
        <div key={index}>
          <h2>{resource.title}</h2>
          <p>{resource.category}</p>
          <ul>
            <li>
              <a href={resource.url} target="_blank">
                {resource.title}
              </a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CategoryContent;
