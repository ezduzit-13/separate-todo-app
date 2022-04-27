import axios from 'axios'
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from './authentication';



const Login = () => {
  const [userToken, getUserToken] = useState(null)
  const [userID, getUserID] = useState(null)
  const navigate = useNavigate()
  return (
    <div>
      <div className='box'>
        <div className='other-box'>
        <h1>login.</h1>
      <hr></hr>
      <form onSubmit={userLogin}>
        <input id="email" placeholder="Username"/>
        <br />
        <br />
        <input type='password' id='password' placeholder='Password'/>
        <br />
        <br />
        <button id='submit'>submit</button>
      </form>
        </div>
      </div>
     
      <br />
      <br />
      <h2
      className='word-button' 
      onClick={
        ()=>{
          navigate('/signup')
        }
      }>
        Create A New Account
      </h2>
     
    </div>
  )
}

export default Login