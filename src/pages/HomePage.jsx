import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <main className="main-area">
        <p className="calc-macros">
          Calculate your macros, and enter them here. A portioned meal and
          recipe will be provided for you.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.katyhearnfit.com/macro-calculator"
        >
          <button>Calculate Macros Here</button>
        </a>
        <section>
          <div>
            <h4>Calories</h4>
            <input type="text" placeholder="Calories" />
          </div>
          <div>
            <h4>Protein</h4>
            <input type="text" placeholder="Protein" />
          </div>
          <div>
            <h4>Carbs</h4>
            <input type="text" placeholder="Carbs" />
          </div>
          <div>
            <h4>Fat</h4>
            <input type="text" placeholder="Fat" />
          </div>
        </section>
        <section>
          <Link to="/ingredients">
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Dinner</button>
          </Link>
        </section>
      </main>
    </>
  )
}

export default HomePage
