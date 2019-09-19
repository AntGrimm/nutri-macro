import React from 'react'

export default function MealsArray() {
  const getRandomMeal = () => {
    const number = Math.floor(Math.random() * 3) // number between 0-3
    switch (number) {
      case 1:
        return []

      case 2:
        return '"Without requirements or design, programming is the art of adding bugs to an empty text file." ―Louis Srygley'

      default:
        return '"In the one and only true way. The object-oriented version of Spaghetti code is, of course, Lasagna code." ―Roberto Waltman.'
    }
  }
  return <div>{getRandomMeal()}</div>
}
