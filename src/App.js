import React, { Component } from 'react'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IngredientsMacros from './pages/IngredientsMacros'
import Recipe from './pages/Recipe'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route
              exact
              path="/ingredients"
              component={IngredientsMacros}
            ></Route>
            <Route exact path="/ingredients/recipe" component={Recipe}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
