import React from 'react'
import recipePhoto from '../images/grill-vegetable-pic.jpg'
import { Link } from 'react-router-dom'

const IngredientsMacros = () => {
  return (
    <>
      <main className="main-area">
        <section>
          <h3>Grill and Vegetables</h3>
          <h4>20 minutes</h4>
        </section>
        <section>
          <img src={recipePhoto} alt="Grill and Vegetables" />
        </section>
        <section className="ingredients-macros">
          <div className="ingredients">
            <h2>3 Ingredients</h2>
            <ul>
              <li>4.75 oz Sirloin Steak(uncooked weight)</li>
              <li>2.35 oz butter</li>
              <li>
                5.9 oz non starch vegetables (your choice: broccoli, asparagus,
                spinach, etc)
              </li>
            </ul>
          </div>
          <div>
            <h2>Macros</h2>
            <ul>
              <li>Calories: 696 Calories</li>
              <li>Protein: 38 Grams</li>
              <li>Carbs: 3 Grams</li>
              <li>Fat: 30 Grams</li>
            </ul>
          </div>
        </section>
        <Link to="/ingredients/recipe">
          <button>View Recipe</button>
        </Link>
      </main>
    </>
  )
}

export default IngredientsMacros
