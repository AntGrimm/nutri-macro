import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '../react-auth0-wrapper'

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
  return (
    <header className="header-section">
      <div>
        <Link to="/">
          <h3 className="header">TDEE Recipe Finder</h3>
        </Link>
      </div>
      <div className="navbar-items">
        <p>About</p>
        <p>FAQ</p>
        <p>Contact</p>
        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect({})}>Log in</button>
        )}

        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        {isAuthenticated && (
          <span>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/profile">Profile</Link>
          </span>
        )}
      </div>
    </header>
  )
}

export default NavBar
