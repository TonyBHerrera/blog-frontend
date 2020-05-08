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
import Navbar from "./navigation/navBar"
import About from "./pages/about"
import Home from "./pages/home"
import GlobalStyle from '..style/GlobalStyle'


export default class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen})
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
              <Route path="/Blog" component={Blog} />


            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}