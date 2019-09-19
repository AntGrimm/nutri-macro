import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header-section">
      <Link to="/">
        <h1 className="header">Macro Recipe Maker</h1>
      </Link>
    </header>
  )
}

export default Header
