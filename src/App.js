import React, { Component } from 'react'
import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ArticleList from './Pages/ArticleList';
import ArticlePage from './Pages/ArticlePage';
import NavBar from './NavBar';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"> 
        <NavBar/>
        <div id="page-body">
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/article-list" component={ArticleList} />
        <Route path="/article/:name" component={ArticlePage} />
        </div>
        
        </div>
      </Router>
      
    );
  }
}

export default App;
