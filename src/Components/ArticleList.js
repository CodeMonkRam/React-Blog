import React from 'react'
import { Link } from 'react-router-dom';



const ArticleList = ({article}) => {
    return (
        <>

    {article.map((article, key) => (
        // eslint-disable-next-line no-template-curly-in-string
        <Link className= "article-list-item " key={key} to={`/article/${article.name}`}>
        
      <h3>{article.title}</h3> 
       <p>{article.content[0].substring(0,150)} ..... read more</p> 
        </Link>
        
        ))}  
    </>
    )
}

export default  ArticleList;
