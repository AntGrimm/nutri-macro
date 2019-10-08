import React from 'react'
import { Link } from 'react-router-dom'

const BmrResults = props => {
  const bmr = parseFloat(
    Math.round(
      10 * (props.location.state.weight / 2.205) +
        6.25 * (props.location.state.height * 2.54) -
        5 * props.location.state.age +
        parseInt(props.location.state.gender)
    )
  )

  // Maintenance
  // const bmrAndActivity = parseFloat(
  //   Math.round(bmr * props.location.state.activity)
  // )

  // Cutting
  // const bmrAndActivity = parseFloat(
  //   Math.round(bmr * props.location.state.activity - 500)
  // )

  // Bulking
  // const bmrAndActivity = parseFloat(
  //   Math.round(bmr * props.location.state.activity + 500)
  // )

  // Moderate Carb
  // const protein = parseFloat(Math.round((bmrAndActivity * 0.3) / 4))
  // const fat = parseFloat(Math.round((bmrAndActivity * 0.35) / 9))
  // const carbs = parseFloat(Math.round((bmrAndActivity * 0.35) / 4))

  // Lower Carb
  // const protein = parseFloat(Math.round((bmrAndActivity * 0.4) / 4))
  // const fat = parseFloat(Math.round((bmrAndActivity * 0.4) / 9))
  // const carbs = parseFloat(Math.round((bmrAndActivity * 0.2) / 4))

  // Higher Carb
  // const protein = parseFloat(Math.round((bmrAndActivity * 0.3) / 4))
  // const fat = parseFloat(Math.round((bmrAndActivity * 0.2) / 9))
  // const carbs = parseFloat(Math.round((bmrAndActivity * 0.5) / 4))

  const bmrAndActivity = parseFloat(
    Math.round(bmr * props.location.state.activity)
  )
  const protein = parseFloat(Math.round((bmrAndActivity * 0.3) / 4))
  const fat = parseFloat(Math.round((bmrAndActivity * 0.35) / 9))
  const carbs = parseFloat(Math.round((bmrAndActivity * 0.35) / 4))
  const calories = bmrAndActivity

  return (
    <>
      <section>
        <h1>Your BMR is {bmr}</h1>
        <p>Your BMR with activity is {calories}</p>
        <div>
          <h2>Moderate Carb (30/35/35)</h2>
          <p>Protein {protein}g</p>
          <p>Fats {fat}g</p>
          <p>Carbs {carbs}g</p>
        </div>
        <div>
          <h2>Higher Carb (30/20/50)</h2>
          <p>Protein {protein}g</p>
          <p>Fats {fat}g</p>
          <p>Carbs {carbs}g</p>
        </div>
        <div>
          <h2>Lower Carb (40/40/20)</h2>
          <p>Protein {protein}g</p>
          <p>Fats {fat}g</p>
          <p>Carbs {carbs}g</p>
        </div>
      </section>
      <Link
        to={{
          pathname: '/RecipeList',
          state: { carbs, protein, fat, calories }
        }}
      >
        <button>Get Meals</button>
      </Link>
    </>
  )
}

export default BmrResults
