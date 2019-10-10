import React from 'react'
import EnterMacros from './pages/EnterMacros'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Recipe from './pages/Recipe'
import BmrResults from './pages/BmrResults'
import RecipeList from './pages/RecipeList'
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import PrivateRoute from './components/PrivateRoute'
import { useAuth0 } from './react-auth0-wrapper'

function App() {
  const { loading } = useAuth0()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/profile" component={Profile} />
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

export default App
