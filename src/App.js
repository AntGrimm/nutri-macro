import React, { Component } from 'react'
import EnterMacros from './pages/EnterMacros'
import { Router, Switch, Route } from 'react-router-dom'
import Recipe from './pages/Recipe'
import BmrResults from './pages/BmrResults'
import RecipeList from './pages/RecipeList'
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'
import auth from './Auth'
import History from './History'
import axios from 'axios'
import Header from './components/NavBar'

class App extends Component {
  // componentWillMount() {
  //   if (auth.isAuthenticated()) {
  //     axios.defaults.headers.common = {
  //       Authorization: auth.authorizationHeader()
  //     }
  //   }
  // }

  render() {
    return (
      <>
        <Router>
          {/* <Router history={History}>
          <Route path="/login" render={() => auth.login()} />
          <Route
            path="/logout"
            render={() => {
              auth.logout()
              return <p />
            }}
          />
          <Route
            path="/callback"
            render={() => {
              auth.handleAuthentication(() => {
                // Set the axios authentication headers
                axios.defaults.headers.common = {
                  Authorization: auth.authorizationHeader()
                }
              })
              return <p />
            }}
          /> */}
          <NavBar />
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/EnterMacros" component={EnterMacros}></Route>
            <Route
              exact
              path="/BasalMetabolicRate/profile"
              component={BmrResults}
            ></Route>
            <Route exact path="/RecipeList" component={RecipeList}></Route>
            <Route exact path="/RecipeList/:recipe" component={Recipe}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
