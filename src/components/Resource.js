// Resource.js

function Resource({ category, text, sources }) {
    return (
      <div>
        <h2>{category}</h2>
        <p>{text}</p>
        <ul>
          {sources.map((source, index) => (
            <li key={index}>
              <a href={source.url} target="_blank">
                {source.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Resource;
  