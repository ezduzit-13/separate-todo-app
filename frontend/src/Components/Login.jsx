import axios from 'axios'
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Login = () => {
  const [userToken, getUserToken] = useState(null)
  const [userID, getUserID] = useState(null)


  async function userLogin(e){
    e.preventDefault()
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let new_user = {
      email:email,
      password:password,
    }

    let url = 'http://localhost:8000/api/token/'

    let response =  await fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(new_user)
      })

      let data = await response.json()
      localStorage.setItem('tokens',JSON.stringify(data))
      localStorage.setItem('user',JSON.stringify(jwt_decode(data.access).user_id))
      window.location.href = '/'

    }



  return (
    <div>
      <h1>Loginnnnn</h1>
      <hr></hr>
      <form onSubmit={userLogin}>
        <input id="email" placeholder="Username"/>
        <br />
        <input id = 'password' placeholder='Password'/>
        <br />
        <button>submit</button>
      </form>
      <br />
      <br />
      <Link to = '/signup'>sign up here!!</Link>
      <br />
    </div>
  )
}

export default Login