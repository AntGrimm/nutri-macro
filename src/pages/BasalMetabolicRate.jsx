import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BasalMetabolicRate = () => {
  const [gender, setGender] = useState()
  const [age, setAge] = useState()
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [activity, setActivity] = useState()

  const bmr = parseFloat(
    Math.round(
      10 * (weight / 2.205) +
        6.25 * (height * 2.54) -
        5 * age +
        parseInt(gender)
    )
  )

  const bmrAndActivity = parseFloat(Math.round(bmr * activity))

  // let feet = 0
  // let inches = 0
  // for(i = 55; i >= 84; i++)
  //   i/12(Math.floor) = feet
  //   Math.floor(i%12) = inches

  //   const shuffleDeck = () => {
  //     for (let i = state.deck.length - 1; i >= 0; i--) {
  //       const j = Math.floor(Math.random() * i)
  //       const firstArray = state.deck[i]
  //       const secondArray = state.deck[j]
  //       state.deck[i] = secondArray
  //       state.deck[j] = firstArray
  //     }
  //     console.log(state.deck)
  //   }

  const protein = parseFloat(Math.round((bmrAndActivity * 0.3) / 4))
  const fats = parseFloat(Math.round((bmrAndActivity * 0.35) / 9))
  const carbs = parseFloat(Math.round((bmrAndActivity * 0.35) / 4))

  return (
    <>
      <main className="main-area">
        <section>
          <div>
            <input
              type="radio"
              value="5"
              name="gender"
              onChange={e => {
                setGender(e.target.value)
              }}
            />
            Male
            <input
              type="radio"
              value="-151"
              name="gender"
              onChange={e => {
                setGender(e.target.value)
              }}
            />
            Female
          </div>
          <div></div>
          <pre id="log"></pre>
          <div>
            <h4>Age</h4>
            <input
              type="text"
              placeholder="Age"
              onChange={e => {
                setAge(e.target.value)
              }}
            />
          </div>
          <div>
            <h4>Weight</h4>
            <input
              type="text"
              placeholder="lbs"
              onChange={e => {
                setWeight(e.target.value)
              }}
            />
          </div>
          <div>
            <h4>Height</h4>
            <select
              onChange={e => {
                setHeight(e.target.value)
              }}
            >
              <option>Select Height</option>
              <option value="55">4ft 7in</option>
              <option value="56">4ft 8in</option>
              <option value="57">4ft 9in</option>
              <option value="58">4ft 10in</option>
              <option value="59">4ft 11in</option>
              <option value="60">5ft 0in</option>
              <option value="61">5ft 1in</option>
              <option value="62">5ft 2in</option>
              <option value="63">5ft 3in</option>
              <option value="64">5ft 4in</option>
              <option value="65">5ft 5in</option>
              <option value="66">5ft 6in</option>
              <option value="67">5ft 7in</option>
              <option value="68">5ft 8in</option>
              <option value="69">5ft 9in</option>
              <option value="70">5ft 10in</option>
              <option value="71">5ft 11in</option>
              <option value="72">6ft 0in</option>
              <option value="73">6ft 1in</option>
              <option value="74">6ft 2in</option>
              <option value="75">6ft 3in</option>
              <option value="76">6ft 4in</option>
              <option value="77">6ft 5in</option>
              <option value="78">6ft 6in</option>
              <option value="79">6ft 7in</option>
              <option value="80">6ft 8in</option>
              <option value="81">6ft 9in</option>
              <option value="82">6ft 10in</option>
              <option value="83">6ft 11in</option>
              <option value="84">7ft 0in</option>
            </select>
          </div>
          <div>
            <h4>Activity Level</h4>
            <select
              onChange={e => {
                setActivity(e.target.value)
              }}
            >
              <option>Select Activity Level</option>
              <option value="1.2">Sedentary (office job)</option>
              <option value="1.375">Light Exercise (1-2 days/week)</option>
              <option value="1.55">Moderate Exercise (3-5 days/week)</option>
              <option value="1.725">Heavy Exercise (6-7 days/week)</option>
              <option value="1.9">Athlete (2x per day)</option>
            </select>
          </div>
          {/* <Link to="/BasalMetabolicRate/profile"> */}
          <button
            className="form-button"
            onClick={e => {
              console.log('BMR is ' + bmr + ' kcals')
              console.log('BMR and Activity is ' + bmrAndActivity + ' kcals')
              console.log('protein is ' + protein + 'g')
              console.log('carbs is ' + carbs + 'g')
              console.log('fats is ' + fats + 'g')
              e.preventDefault()
            }}
          >
            Submit
          </button>
          {/* </Link> */}
        </section>
      </main>
    </>
  )
}

export default BasalMetabolicRate
