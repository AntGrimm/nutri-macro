import React, { Component } from 'react'
import EnterMacros from './pages/EnterMacros'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Recipe from './pages/Recipe'
import BasalMetabolicRate from './pages/BasalMetabolicRate'
import BmrResults from './pages/BmrResults'
import RecipeList from './pages/RecipeList'
import LandingPage from './pages/LandingPage'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route
              exact
              path="/BasalMetabolicRate"
              component={BasalMetabolicRate}
            ></Route>
            <Route exact path="/EnterMacros" component={EnterMacros}></Route>
            <Route
              exact
              path="/BasalMetabolicRate/:BmrResults"
              component={BmrResults}
            ></Route>
            <Route exact path="/RecipeList" component={RecipeList}></Route>
            <Route exact path="/ingredients/recipe" component={Recipe}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
