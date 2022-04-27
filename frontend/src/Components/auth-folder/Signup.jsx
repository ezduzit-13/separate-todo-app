import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {createUser} from './authentication'


const Signup = () => {
  const navigate = useNavigate()
  return (
  
    <>
    <div>
      <div>
      <h1>signup.</h1>
    <hr></hr>
    <form onSubmit={createUser}>
      <input name="email" id="email" placeholder="Username"/>
      <br />
      <br />
      <input type='password' id = 'password' placeholder='Password'/>
      <br />
      <br />
      <button id='submit'>submit</button>
    </form>


      </div>

    </div>
    <br /><br />
    <h2
      onClick={
        ()=>{
          navigate('/login')
        }
      }>
        Existing User
      </h2>

  </>
  )
}

export default Signup