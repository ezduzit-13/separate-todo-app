import React,{useState,useEffect} from 'react'
import Update from './Update'
import Create from './Create'
import Delete from './Delete'
import axios from 'axios'
import './style-fetching.css'
import { Link } from "react-router-dom";



const Fetching = () => {
  const [list,getList] = useState(null)
  const [update, getUpdate] = useState(false)
  const [create, getCreate] = useState (false)
  const [list_id,getList_id] = useState(null)

  const user = localStorage.getItem('user')

  async function fetchTask() {
    let response = await fetch('http://localhost:8000/api/user-tasks/' + user)
    let data = response.json()
    return data
  }

  useEffect(()=>{
    fetchTask().then((data)=> {
      console.log(data)
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
      <tr>
        <td>{list.title}</td>
        <td>
          <button onClick={()=>{getUpdate(true);getList_id(()=>list.id)}}>update</button>
        </td>
        <td><Delete num = {list.id}/></td>
      </tr> 
    )
  }


  return (user ?list ?  
    <div>       
        <table>
            {list.map(taskListShow)}
        </table>
        <button onClick = {()=>getCreate(()=>true)}>New To-Do</button>
        <br />
        <Create trigger = {create}/>
        <Update trigger = {update} list_id = {list_id}/>
        <br />
        <br /> 
        <div onClick={Logout}>log out</div>
    </div>: <></>: window.location.href = '/login')

  
}
export default Fetching

