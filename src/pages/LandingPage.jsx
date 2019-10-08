import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the recipe finder app</h1>
      <p>
        The idea for this app came to me when I was trying to lose weight and
        was directed to "track my calories" as they say diet is 90% of exercise.
        I soon find out that there are a number of ways of trackings your
        intake, but the most important is to track your total caloric intake,
        protein, carbs, and fat. I had no idea where to start, but through some
        research have found that there are scientific calculations to adjust to
        your needs. Cool. I found this, but now I had to find recipes. The
        internet has no shortage of recipes, but finding one that fit my
        individual needs? Couldn't find it. They say necessity is the mother of
        invention so I felt the need to invent this.
      </p>
      <p>
        Click
        <Link to="BasalMetabolicRate"> here </Link>to get started.
      </p>
      <p>
        If you know your macro needs, click
        <Link to="EnterMacros"> here</Link>
      </p>
    </div>
  )
}

export default LandingPage
