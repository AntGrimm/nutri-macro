import React from 'react'
import { Link } from 'react-router-dom'
import PieChart from '../images/bmr-and-tdee.png'

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
        <p className="bmr-results-explanation">
          Based on your stats, the best estimate for your maintenance calories
          is <strong>{calories}</strong> calories per day based on the
          Mifflin-St Jeor Formula, which is widely known to be the most
          accurate.
        </p>
        <div className="macro-box">
          <h4>Your Basal Metabolic Rate</h4>
          <p>BMR: {bmr}</p>
          <p>BMR with activity: {calories}</p>
        </div>
        <div className="macro-box">
          <h4>Your nutrient requirements (20/30/50)</h4>
          <p>Protein: {protein}g</p>
          <p>Fats: {fat}g</p>
          <p>Carbs: {carbs}g</p>
        </div>
        <Link
          to={{
            pathname: '/RecipeList',
            state: { carbs, protein, fat, calories }
          }}
        >
          <button>Get Meals</button>
        </Link>
        <h3 className="bmr-results-explanation">How TEE Is Calculated</h3>
        <p className="bmr-results-explanation">
          Your daily Total Energy Expenditure (TEE) is an estimation of how many
          calories you burn per day when exercise is taken into account. It is
          calculated by first figuring out your Basal Metabolic Rate, then
          multiplying that value by an activity multiplier.
        </p>
        {/* <img src={PieChart} alt="TEE Pie Chart"></img> */}
        <p className="bmr-results-explanation">
          Since your BMR represents how many calories your body burns when at
          rest, it is necessary to adjust the numbers upwards to account for the
          calories you burn during the day. This is true even for those with a
          sedentary lifestyle. Our TEE calculator uses the best formulas and
          displays your score in a way that's easy to read and meaningful.
        </p>
      </section>
    </>
  )
}

export default BmrResults
