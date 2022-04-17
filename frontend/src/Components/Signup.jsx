import React from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
  async function createUser(e){
    e.preventDefault()
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let new_user = {
      email:email,
      password:password,
    }
    let url = 'http://localhost:8000/api/create-user'
  let response =  await fetch(url, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(new_user)
  })

  let data = await response.json()

  console.log(data, '<created user success message')
  window.location.href = '/login'
}
  return (
    <div>
    <h1>Sign up Page....</h1>
    <hr></hr>
    <form onSubmit={createUser}>
      <input name="email" id="email" placeholder="Username"/>
      <br />
      <input id = 'password' placeholder='Password'/>
      <br />
      <button>submit</button>
    </form>
    <br />
    <br />
    <Link to = '/login'>log in here!</Link>




  </div>
  )
}

export default Signup