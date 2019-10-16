import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Recipe = props => {
  const [recipe, setRecipe] = useState({})
  const [instructions, setInstructions] = useState([])
  const [summary, setSummary] = useState([])
  const [ingredients, setIngredients] = useState([{}])
  const recipeId = props.match.params.recipe

  const fetchRecipe = async () => {
    const resp = await axios.get(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=55d5937ac1794abf9708407d5a08fe7b&includeNutrition=false`
    )
    console.log(resp.data)
    setRecipe(resp.data)
    setInstructions(resp.data.analyzedInstructions[0].steps)
  }

  const fetchRecipeSummary = async () => {
    const resp = await axios.get(
      `https://api.spoonacular.com/recipes/${recipeId}/summary?apiKey=55d5937ac1794abf9708407d5a08fe7b`
    )
    console.log(resp.data)
    setSummary(resp.data)
  }

  const fetchRecipeIngredients = async () => {
    const resp = await axios.get(
      `https://api.spoonacular.com/recipes/${recipeId}/ingredientWidget?apiKey=55d5937ac1794abf9708407d5a08fe7b&defaultCss=true`
    )
    setIngredients(resp.data)
  }

  useEffect(() => {
    fetchRecipe()
    fetchRecipeSummary()
    fetchRecipeIngredients()
  }, [])

  return (
    <>
      <main className="main-area">
        <h2>{recipe.title}</h2>
        <p>Cook time: {recipe.readyInMinutes} minutes</p>
        <p dangerouslySetInnerHTML={{ __html: summary.summary }} />
        <section dangerouslySetInnerHTML={{ __html: ingredients }} />
        <section>
          <ul className="recipe">
            {instructions.map((item, j) => {
              return (
                <li className="recipe-ingredients" key={j}>
                  <p>
                    {item.number} - {item.step}
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

export default Recipe
