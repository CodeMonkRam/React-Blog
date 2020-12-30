import React from 'react';
import { Link } from 'react-router-dom';
import articleContent from './Article-content' 


const ArticleList = () => {
    return(
    <>
    <h1> ArticleList </h1>
    {articleContent.map((articles, key) => (
        // eslint-disable-next-line no-template-curly-in-string
        <Link key={key} to={`/article/${articles.name}`}>
        
      <h3>{articles.title}</h3> 
       <p>{articles.content[0].substring(0,150)}...</p> 
        </Link>
        
        ))}  
    </>

);
    }
export default ArticleList;

 