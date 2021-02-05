import React, { useState, useEffect } from 'react';
import ArticleList from '../Components/ArticleList';
import articleContent from "./Article-content"
import { NotFoundPage } from './NotFoundPage';
import CommentsList from '../Components/CommentsList';
import UpvotesSection from '../Components/UpvotesSection';
import AddCommentForm from '../Components/AddCommentForm';


const ArticlePage = ({ match }) => {
  const name= match.params.name;
  const article =articleContent.find(article => article.name === name);  
  
  const [articleInfo, setArticleInfo] = useState({ upvote: 0, addcomments: [] });

  useEffect(() => {
    const fetchData = async () => {
        const result = await fetch(`/api/articles/${name}`);
        const body = await result.json();
       // console.log(body);
        setArticleInfo(body);
        
    }
    fetchData();
     //setArticleInfo({ upvote: Math.ceil(Math.random()*10) });
  },[name]);

  if(!article) return <NotFoundPage/>
  
  const otherArticle = articleContent.filter(article => article.name !== name);
  return(
    <>
    <h1> {article.title} pages</h1>  
    <UpvotesSection articleName={name} upvotes= {articleInfo.upvote} setArticleInfo={setArticleInfo}/>
    {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
    ))} 

 <CommentsList comments={articleInfo.addcomments}/>  
 <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/> 
<h3>Other Articles:</h3>
<ArticleList article={otherArticle} />

    </>

); 
    }
export default ArticlePage;

 