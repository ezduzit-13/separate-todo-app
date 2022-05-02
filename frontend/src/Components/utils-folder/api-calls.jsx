import axios from 'axios'





async function getRequest(url){
  let response = await fetch(url,{
    method:'GET',
    headers:{'Content-type': 'application/json'}
  })
  let data = response.json()
  return data
}


async function postRequest(url,obj){
  let response =  await fetch(url, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(obj)
  })

  let data = await response.json()
  return data
}

async function putRequest(url,obj){
  let response =  await fetch(url, {
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(obj)
  })
  
  let data = await response.json()
  return data

}

function deleteRequest(url){

  axios.delete(url).then(()=>{
    console.log('delete successful')
    window.location.reload(false)
  })
}

export {getRequest,postRequest,deleteRequest}

