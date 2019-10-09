import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EnterMacros = () => {
  const [calories, setCalories] = useState()
  const [protein, setProtein] = useState()
  const [carbs, setCarbs] = useState()
  const [fat, setFat] = useState()

  return (
    <>
      <main className="main-area">
        <Link to="/">
          <p>Go Back</p>
        </Link>
        <p className="calc-macros">
          Calculate your macros, and enter them here. A portioned meal and
          recipe will be provided for you.
        </p>
        <section>
          <div>
            <h4>Calories</h4>
            <input
              type="text"
              placeholder="Calories"
              onChange={e => {
                setCalories(e.target.value)
              }}
            />
          </div>
          <div>
            <h4>Protein</h4>
            <input
              type="text"
              placeholder="Protein"
              onChange={e => {
                setProtein(e.target.value)
              }}
            />
          </div>
          <div>
            <h4>Carbs</h4>
            <input
              type="text"
              placeholder="Carbs"
              onChange={e => {
                setCarbs(e.target.value)
              }}
            />
          </div>
          <div>
            <h4>Fat</h4>
            <input
              type="text"
              placeholder="Fat"
              onChange={e => {
                setFat(e.target.value)
              }}
            />
          </div>
        </section>
        <section>
          <Link
            to={{
              pathname: '/RecipeList',
              state: { carbs, protein, fat, calories }
            }}
          >
            <button>Get Meal</button>
          </Link>
        </section>
      </main>
    </>
  )
}

export default EnterMacros
