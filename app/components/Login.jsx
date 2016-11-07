import React from 'react'
import {browserHistory, Link} from 'react-router'

export const Login = ({ login }) => (<div>
  <form onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
    browserHistory.push('/')
  } }>
    <input name="username" />
    <input name="password" type="password" />
    <input type="submit" value="Login" />
  </form>
  <div>
  Don't have an account?
  <button onClick={() => {browserHistory.push('/signup')}}> Sign Up</button>
  </div>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
