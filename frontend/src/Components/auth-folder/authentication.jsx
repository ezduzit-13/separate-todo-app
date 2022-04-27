import jwt_decode from 'jwt-decode';

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
    window.location.href = ('/')

  }

async function createUser(e){
  e.preventDefault()

  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  let new_user = {
    email:email,
    password:password,
  }
  
  let url = 'http://localhost:8000/api/create-user'

  try {
    let response =  await fetch(url, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(new_user)
    })
  
    let data = await response.json()
  
    console.log(data, '<created user success message')
    window.location.href = ('/login')
    
  } catch (error) {
    console.log(error)
    
  }
  
}

const logout = () => {

  localStorage.removeItem('tokens')
  localStorage.removeItem('user')
  window.location.href = ('/login')
}


async function tokenValid(){
  let token = localStorage.getItem('tokens')
  let refreshToken = JSON.parse(token).refresh
  let response =  await fetch('http://localhost:8000/api/token/refresh/', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(
      {refresh:refreshToken}
    ) 
  })
  let data = response.json()
  return data
}


export {userLogin, createUser,logout,tokenValid}

