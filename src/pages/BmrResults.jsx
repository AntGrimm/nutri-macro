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
  const protein = parseFloat(Math.round((bmrAndActivity * 0.2) / 4))
  const fat = parseFloat(Math.round((bmrAndActivity * 0.3) / 9))
  const carbs = parseFloat(Math.round((bmrAndActivity * 0.5) / 4))
  const calories = bmrAndActivity

  return (
    <>
      <section className="mod-low-high-carb-section">
        <div className="macro-box">
          <h4>Basal Metabolic Rate</h4>
          <p>Your BMR is {bmr}</p>
          <p>Your BMR with activity is {calories}</p>
        </div>
        <div className="macro-box">
          <h4>Moderate Carb (20/30/50)</h4>
          <p>Protein {protein}g</p>
          <p>Fats {fat}g</p>
          <p>Carbs {carbs}g</p>
        </div>
        {/* <div className="macro-box">
          <h4>Higher Carb (30/20/50)</h4>
          <p>Protein {protein}g</p>
          <p>Fats {fat}g</p>
          <p>Carbs {carbs}g</p>
        </div>
        <div className="macro-box">
          <h4>Lower Carb (40/40/20)</h4>
          <p>Protein {protein}g</p>
          <p>Fats {fat}g</p>
          <p>Carbs {carbs}g</p>
        </div> */}
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
