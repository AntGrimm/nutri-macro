import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useAuth0 } from '../react-auth0-wrapper'

const RecipeList = props => {
  const [recipeData, setRecipeData] = useState([])
  const { getIdTokenClaims } = useAuth0()

  const maxCarbs = props.location.state.carbs / 3
  const minCarbs = props.location.state.carbs / 3 - 10
  const maxProtein = props.location.state.protein / 3
  const minProtein = props.location.state.protein / 3 - 10
  const maxFat = props.location.state.fat / 3
  const minFat = props.location.state.fat / 3 - 10
  const maxCalories = props.location.state.calories / 3
  const minCalories = props.location.state.calories / 3 - 100

  const fetchRecipe = async () => {
    const resp = await axios.get(
      `https://api.spoonacular.com/recipes/findByNutrients?apiKey=55d5937ac1794abf9708407d5a08fe7b&minCalories=${minCalories}&maxCalories=${maxCalories}&minCarbs=${minCarbs}&maxCarbs=${maxCarbs}&minProtein=${minProtein}&maxProtein=${maxProtein}&minFat=${minFat}&maxFat=${maxFat}&number=100`
    )
    for (let i = resp.data.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * i)
      const firstArray = resp.data[i]
      const secondArray = resp.data[j]
      resp.data[i] = secondArray
      resp.data[j] = firstArray
    }
    console.log(resp.data)
    setRecipeData(resp.data)
  }

  const AddFavoriteRecipe = async id => {
    const tokenStuff = await getIdTokenClaims()
    const token = tokenStuff.__raw
    console.log(token)
    const resp = await axios.post(
      `https://localhost:5001/api/recipe`,
      {
        recipeId: id,
        recipeTitle: id.title
      },
      {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    )
    if (resp.status === 200) {
      console.log('Sent')
    }
    console.log(resp)
  }

  useEffect(() => {
    fetchRecipe()
    console.log(props.location.state)
  }, [])

  return (
    <>
      <main className="main-area">
        <section>
          <ul className="recipe-list">
            {recipeData.map((recipe, i) => {
              return (
                <li className="recipe-specific" key={i}>
                  <Link to={`RecipeList/${recipe.id}`}>
                    <img
                      className="recipe-specific-image"
                      src={recipe.image}
                      alt={recipe.title}
                    ></img>
                    <h4 className="recipe-title">{recipe.title}</h4>
                  </Link>
                  <p
                    className="add-to-favorites"
                    onClick={() => {
                      AddFavoriteRecipe(recipe.id)
                    }}
                  >
                    Add to favorites
                  </p>
                  <ul className="recipe-macros">
                    <li>
                      <p className="macro-label">Calories: </p>
                      <p className="macro-value">{recipe.calories}</p>
                    </li>
                    <li>
                      <p className="macro-label">Protein: </p>
                      <p className="macro-value">{recipe.protein}</p>
                    </li>
                    <li>
                      <p className="macro-label">Carbs: </p>
                      <p className="macro-value">{recipe.carbs}</p>
                    </li>
                    <li>
                      <p className="macro-label">Fat: </p>
                      <p className="macro-value">{recipe.fat}</p>
                    </li>
                  </ul>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default RecipeList
