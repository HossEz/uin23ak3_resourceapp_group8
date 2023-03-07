// CategoryButton.js

function CategoryButton({ category, onClick }) {
    return (
      <button className="categorybtn" onClick={() => onClick(category)}>
        {category}
      </button>
    );
  }
  
  export default CategoryButton;
  