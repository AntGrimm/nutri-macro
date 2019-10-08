import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const RecipeList = props => {
  const [recipeData, setRecipeData] = useState([])

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
      `https://api.spoonacular.com/recipes/findByNutrients?apiKey=55d5937ac1794abf9708407d5a08fe7b&minCalories=${minCalories}&maxCalories=${maxCalories}&minCarbs=${minCarbs}&maxCarbs=${maxCarbs}&minProtein=${minProtein}&maxProtein=${maxProtein}&minFat=${minFat}&maxFat=${maxFat}&number=30`
    )
    console.log(resp.data)
    setRecipeData(resp.data)
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
                    <p className="recipe-title">{recipe.title}</p>
                    <img
                      className="recipe-specific-image"
                      src={recipe.image}
                      alt={recipe.title}
                    ></img>
                  </Link>
                  <p className="recipe-macros">
                    Calories: {recipe.calories} - Protein: {recipe.protein}
                    <br></br> Carbs: {recipe.carbs} - Fat: {recipe.fat}
                  </p>
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
