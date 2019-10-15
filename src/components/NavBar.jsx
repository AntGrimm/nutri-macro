import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '../react-auth0-wrapper'

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
  return (
    <header className="header-section">
      <div>
        <Link to="/">
          <h3 className="header">Total Energy Expenditure Recipe Finder</h3>
        </Link>
      </div>
      <div className="navbar-items">
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/faq">
          <p>FAQ</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>

        {/* Auth0 components to include home and profile links */}
        {!isAuthenticated && <p onClick={() => loginWithRedirect({})}>Login</p>}

        {isAuthenticated && <p onClick={() => logout()}>Logout</p>}
        {isAuthenticated && (
          <span>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/profile">
              <p>Profile</p>
            </Link>
          </span>
        )}
      </div>
    </header>
  )
}

export default NavBar
