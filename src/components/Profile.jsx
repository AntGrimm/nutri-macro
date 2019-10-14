// src/components/Profile.js

import React, { Fragment, useEffect } from 'react'
import { useAuth0 } from '../react-auth0-wrapper'
import axios from 'axios'

const fetchFavoriteRecipes = async id => {
  const tokenStuff = await getIdTokenClaims()
  const token = tokenStuff.__raw
  console.log(token)
  const resp = await axios.get(`https://localhost:5001/api/recipe`, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  console.log(resp)
}

useEffect(() => {
  fetchFavoriteRecipes()
}, [])

const Profile = () => {
  const { loading, user } = useAuth0()

  if (loading || !user) {
    return <div>Loading...</div>
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
    </Fragment>
  )
}

export default Profile
