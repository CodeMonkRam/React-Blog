import React, { Component } from 'react'
import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ArticleListPage from './Pages/ArticleListPage';
import ArticlePage from './Pages/ArticlePage';
import NavBar from './NavBar';
import { NotFoundPage } from './Pages/NotFoundPage';



class App extends Component {
  render() {
    return (
      <Router>      
        <div className="App"> 
        <NavBar/>
        <div id="page-body">
          <Switch>
         <Route path="https://codemonkram.github.io/React-Blog/" component={HomePage} exact />
        <Route path="https://codemonkram.github.io/React-Blog/about" component={AboutPage} />
        <Route path="https://codemonkram.github.io/React-Blog/article-list" component={ArticleListPage} />
        <Route path="https://codemonkram.github.io/React-Blog/article/:name" component={ArticlePage} />
        <Route component={NotFoundPage}/>
        </Switch>
        
        </div>
        </div>
        </Router>
      
    );
  }
}

export default App;
