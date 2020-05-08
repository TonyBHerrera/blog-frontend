import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Blog from "./pages/blog"
import BlogDetail from "./blog-comps/blog-detail.js"
import Auth from "./pages/auth"
import Navigation from "./navigation/navigation"

import About from "./pages/about"
import Home from "./pages/home"
import NewBlog from './pages/new-blog';



export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

  }
  handleSuccessfulLogin() {

  }

  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/auth" component={Auth} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/new-blog" component={NewBlog} />


            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}