// src/components/Profile.js

import React, { Fragment, useEffect, useState } from 'react'
import { useAuth0 } from '../react-auth0-wrapper'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Profile = () => {
  const { loading, user, getIdTokenClaims } = useAuth0()
  const [recipeData, setRecipeData] = useState([])

  const fetchFavoriteRecipes = async id => {
    const tokenStuff = await getIdTokenClaims()
    const token = tokenStuff.__raw
    console.log(token)
    const resp = await axios.get(
      `https://tdee-recipe-finder.herokuapp.com/api/recipe`,
      {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    )
    console.log(resp)
    setRecipeData(resp.data)
  }

  // axios.get(`https://api.spoonacular.com/recipes/informationBulk?apiKey=55d5937ac1794abf9708407d5a08fe7b&ids=715538,716429,${id}`)

  useEffect(() => {
    fetchFavoriteRecipes()
  }, [])

  if (loading || !user) {
    return <div>Loading...</div>
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <ul className="favorite-list">
        <h3>Favorite Recipes:</h3>
        {recipeData.map((recipe, i) => {
          return (
            <li className="recipe-specific" key={i}>
              <Link to={`RecipeList/${recipe.recipeId}`}>
                <p className="recipe-title">{recipe.title}</p>
              </Link>
            </li>
          )
        })}
      </ul>
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
    </Fragment>
  )
}

export default Profile
