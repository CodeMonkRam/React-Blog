import React from 'react';
import ArticleList from '../Components/ArticleList';
import articleContent from "./Article-content"
import { NotFoundPage } from './NotFoundPage';
 


const ArticlePage = ({ match }) => {
  const name= match.params.name;
  const article =articleContent.find(article => article.name === name);  
  
  if(!article) return <NotFoundPage/>
  
  const otherArticle = articleContent.filter(article => article.name !== name);
  return(
    <>
    <h1> {article.title} pages</h1>   
    {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
    ))} 
<h3>Other Articles:</h3>
<ArticleList article={otherArticle} />

    </>

);
    }
export default ArticlePage;

 