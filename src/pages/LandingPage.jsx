import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <h1>Learn How Many Calories You Burn Every Day</h1>
      <p>
        Use the TDEE calculator to learn your Total Daily Energy Expenditure, a
        measure of how many calories you burn per day. This calculator will also
        display your BMR, Macros & many other useful statistics!
      </p>
      <p>
        If you know your macro needs, click <Link to="EnterMacros">here</Link>
      </p>
    </div>
  )
}

export default LandingPage
