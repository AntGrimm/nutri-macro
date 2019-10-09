import React, { Component } from 'react'
import EnterMacros from './pages/EnterMacros'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Recipe from './pages/Recipe'
import BmrResults from './pages/BmrResults'
import RecipeList from './pages/RecipeList'
import LandingPage from './pages/LandingPage'
import auth from './Auth'
import axios from 'axios'

class App extends Component {
  render() {
    return (
      <>
        <Router history={history}>
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
          />
          <Header />
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
