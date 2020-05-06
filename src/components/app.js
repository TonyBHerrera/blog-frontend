import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Blog from "./pages/blog"
import BlogDetail from "./blog-comps/blog-detail.js"
import Navigation from "./navigation/navigation"
import About from "./pages/about"
import Home from "./pages/home"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/Blog" component={Blog} />


            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
