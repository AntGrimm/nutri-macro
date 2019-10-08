import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header-section">
      <div>
        <Link to="/">
          <h3 className="header">TDEE Calculator and Recipe Finder</h3>
        </Link>
      </div>
      <div className="navbar-items">
        <p>About</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
    </header>
  )
}

export default Header
