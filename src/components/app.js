import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
export default function App(props) {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN")

  const handleSuccessfulLogin = () => {
    console.log("handle Succesful login")
    setLoggedInStatus("LOGGED_IN")
    console.log(loggedInStatus)
  }

  const handleUnSuccessfulLogin = () => {
    setLoggedInStatus("NOT_LOGGED_IN")
  }

  const authorizedPages = () => {
    return [
      <Route key="new-blog-form" path="/new-blog" component={NewBlog} />
    ]
  }

  // const checkLoginStatus = () => {
  //   return axios.get()
  // }

  return (
    <div className='app'>
      <Router>
        <div>
          <Navigation loggedInStatus={loggedInStatus} />
          <h2>{loggedInStatus}</h2>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/auth"
              render={props => (
                <Auth
                  {...props}
                  handleSuccessfulLogin={handleSuccessfulLogin}
                  handleUnSuccessfulLogin={handleUnSuccessfulLogin}
                />
              )
              }
            />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/b/:slug" component={BlogDetail} />
            {loggedInStatus === "LOGGED_IN" ? authorizedPages() : null}

          </Switch>
        </div>
      </Router>
    </div>
  );
}



