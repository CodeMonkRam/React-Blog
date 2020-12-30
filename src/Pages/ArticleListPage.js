import React from 'react';
//import { Link } from 'react-router-dom';
import ArticleList from '../Components/ArticleList';
import articleContent from './Article-content' 


const ArticleListPage = () => {
    return(
    <>
    <h1> ArticleList </h1>
    <ArticleList article={articleContent}/> 
    </>

);
    }
export default ArticleListPage;

 