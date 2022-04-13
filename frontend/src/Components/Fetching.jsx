import React,{useState,useEffect} from 'react'
import Update from './Update'
import Create from './Create'
import Delete from './Delete'
import axios from 'axios'
import './style-fetching.css'


const Fetching = () => {
  const [list,getList] = useState(null)
  const [update, getUpdate] = useState(false)
  const [create, getCreate] = useState (false)
  const [number,getNumber] = useState(null)

  const url = 'http://localhost:8000/api/task/'

  useEffect(()=>{
    axios.get(url)
    .then(response=>{
      console.log('fetching api...')
      getList(response.data)
    })
  },[url])

  function taskListShow(list) {
    return (
      <tr>
        <td>{list.title}</td>
        <td>
          <button onClick={()=>{getUpdate(() => true); getNumber(()=>list.id)}}>update</button>
        </td>
        <td><Delete num = {list.id}/></td>
      </tr> 

    )
  }


  if(list){
    return(
    <div>       
        <table>
            {list.map(taskListShow)}
        </table>
        <button onClick = {()=>getCreate(()=>true)}>New To-Do</button>
        <br />
        <Create trigger = {create}/>

        <Update trigger = {update} num_id = {number}/>


    </div>
    
    )
}
  return(
    <div>

    </div>
  )
}
export default Fetching

