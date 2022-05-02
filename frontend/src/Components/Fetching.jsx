import React,{useState,useEffect} from 'react'
import Update from './Update'
import Create from './Create'
import Delete from './Delete'
import axios from 'axios'
import './style-fetching.css'
import { Link } from "react-router-dom";
import { getRequest,deleteRequest } from './utils-folder/api-calls'



const Fetching = () => {
  const [list,getList] = useState(null)
  const [update, getUpdate] = useState(false)
  const [create, getCreate] = useState (false)
  const [list_id,getList_id] = useState(null)

  const user = localStorage.getItem('user')

  const url = 'http://localhost:8000/api/user-list/' + user  
  useEffect(()=>{
    getRequest(url)
    .then(data=>{
      getList(data)
    })
  },[])

  const Logout = () => {
    localStorage.removeItem('tokens')
    localStorage.removeItem('user')
    window.location.href = ('/login')
  }

  function updateClick() {

    getUpdate(true)

    getList_id(list.id)
  }

  
  function taskListShow(list) {
    return (
      <>
      {/* put the update form here plz. The form will then call the api to put the new data
      url = http://localhost:8000/api/list/{list.id}/
        putRequest(url,{the object that should be changed.})
      */}
      <div style={{
        display:'flex'
      }}>
        {/* add an on click event to the button that will trigger the form above it
        */}
        <h3>{list.list_name}</h3> <button style={{
          width:'2vw',
          height:'2vh'
        }}>u</button>
        <button 
        style={{
          width:'2vw',
          height:'2vh'
        }}
        onClick={()=>{
          let delete_url = 'http://localhost:8000/api/list/' + list.id
          console.log('what??')
          deleteRequest(delete_url)
        }}
        >X</button>

      </div>
        
        {/* Need to add the table of tasks below this thing here */}
      </> 
    )
  }


  return (user ?list ?  
    <div>       
        {list.map(taskListShow)}
        <button onClick = {()=>getCreate(()=>true)}>New List</button>
        <br />
        {/* Create list form... this will be where the form is triggered after the button is pressed */}
        <Create trigger = {create}/>
        
        <Update trigger = {update} list_id = {list_id}/>
        <br />
        <br /> 
        <div onClick={Logout}>log out</div>
    </div>: <></>: window.location.href = '/login')

  
}
export default Fetching

