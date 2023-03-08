import React from 'react';

function CategoryButton(props) {
  const { category, onClick, isActive } = props;

  return (
    <button className={`categorybtn ${isActive ? 'active' : ''}`} onClick={() => onClick(category)}>
      {category}
    </button>
  );
}

export default CategoryButton;
