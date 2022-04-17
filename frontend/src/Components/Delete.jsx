import React from 'react'
import axios from 'axios'

const Delete = (props) => {

  const handleSubmitDelete = (e) => {

    let delete_url = 'http://localhost:8000/api/task/' + props.num + '/'
    axios.delete(delete_url).then(()=>{
      console.log('delete successful')
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmitDelete}>
        <input type="hidden" name="delete_item" value = {props.num}/>
        <button type = 'submit'>delete</button>
      </form>
    </div>
  )
}

export default Delete

