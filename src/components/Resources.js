import React, { useState } from 'react';
import CategoryButton from './CategoryButton';
import CategoryContent from './CategoryContent';




const resources = [
    {
        title: "W3Schools",
        url: "https://www.w3schools.com/html/",
        category: "html"
    },
    {
        title: "W3Schools",
        url: "https://www.w3schools.com/css/",
        category: "css"
    },
    {
        title: "W3Schools",
        url: "https://www.w3schools.com/js/",
        category: "javascript"
    },
    {
        title: "W3Schools",
        url: "https://www.w3schools.com/REACT/DEFAULT.ASP",
        category: "react"
    },
    {
        title: "HTML Living standard",
        url: "https://html.spec.whatwg.org/multipage/",
        category: "html"
    },
    {
        title: "HTML.com Tutorials",
        url: "https://html.com/",
        category: "html"
    },
    {
        title: "W3C HTML & CSS Standards",
        url: "https://www.w3.org/standards/webdesign/htmlcss.html",
        category: "css"
    },
    {
        title: "W3C CSS Validator",
        url: "https://jigsaw.w3.org/css-validator/",
        category: "css"
    },
    {
        title: "CSS Tricks",
        url: "https://css-tricks.com/",
        category: "css"
    },
    {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        category: "javascript"
    },
    {
        title: "How to read JavaScript Documentation",
        url: "https://www.youtube.com/watch?v=O3iR-CIufKM",
        category: "javascript"
    },
    {
        title: "React documentation",
        url: "https://reactjs.org/docs/getting-started.html",
        category: "react"
    },
    {
        title: "Sanity documentation",
        url: "https://www.sanity.io/docs",
        category: "headless-cms"
    },
    {
        title: "OnCrawl: a beginners guide to headless CMS",
        url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/",
        category: "headless-cms"
    },
    {
        title: "Section.io: Getting started with Sanity CMS",
        url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/",
        category: "headless-cms"
    }
]

function Penger() {
    const [activeCategory, setActiveCategory] = useState('HTML');
  
    const filteredResources = resources.filter((resource) => resource.category === activeCategory);
  
    return (
      <div>
        <div id="categories">
          <CategoryButton
            category="HTML"
            onClick={setActiveCategory}
            isActive={activeCategory === 'HTML'}
          />
          <CategoryButton
            category="CSS"
            onClick={setActiveCategory}
            isActive={activeCategory === 'CSS'}
          />
          <CategoryButton
            category="JavaScript"
            onClick={setActiveCategory}
            isActive={activeCategory === 'JavaScript'}
          />
          <CategoryButton
            category="React"
            onClick={setActiveCategory}
            isActive={activeCategory === 'React'}
          />
          <CategoryButton
            category="Sanity and headless CMS"
            onClick={setActiveCategory}
            isActive={activeCategory === 'Sanity and headless CMS'}
          />
        </div>
        <CategoryContent resources={filteredResources} />
      </div>
    );
  }
  
  export default Penger;