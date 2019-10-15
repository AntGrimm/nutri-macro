import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Recipe = props => {
  const [recipe, setRecipe] = useState({})
  const [instructions, setInstructions] = useState({})
  const recipeSearch = props.match.params.recipe

  const fetchRecipe = async () => {
    const resp = await axios.get(
      `https://api.spoonacular.com/recipes/${recipeSearch}/information?apiKey=55d5937ac1794abf9708407d5a08fe7b&includeNutrition=false`
    )
    console.log(resp.data)
    setRecipe(resp.data)
    // setInstructions(resp.data.analyzedInstructions[0].steps)
  }

  const fetchRecipeInstructions = async () => {
    const resp = await axios.get(
      `https://api.spoonacular.com/recipes/${recipeSearch}/analyzedInstructions?apiKey=55d5937ac1794abf9708407d5a08fe7b`
    )
    console.log(resp.data)
    // setInstructions(resp.data.analyzedInstructions[0].steps)
  }

  useEffect(() => {
    fetchRecipe()
    fetchRecipeInstructions()
  }, [])

  return (
    <>
      <main className="main-area">
        <h1>{recipe.title}</h1>
        <p>Cook time: {recipe.readyInMinutes} minutes</p>
        <section>
          {/* <ul className="recipe">
            {instructions.map((item, j) => {
              return (
                <li className="recipe-ingredients" key={j}>
                  <p>
                    {item.number} - {item.step}
                  </p>
                </li>
              )
            })}
          </ul> */}
        </section>
      </main>
    </>
  )
}

export default Recipe
