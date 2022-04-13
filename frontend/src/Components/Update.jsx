import React,{useState,useEffect} from 'react'
import './supdate.css'

// get list.id in order to call the api
// show a form when triggered

const Update = (props) => {
  let num_id = props.num_id



  const handleUpdate = (e) => {
    let new_words = e.target[0].value

    let new_post = {
      id: props.num_id,
      title: new_words,
      user_id:1
    }
    let url = 'http://localhost:8000/api/task/' + num_id + '/'
    fetch(url, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(new_post)
    }).then(()=>{
      console.log('blog updated')
    })

  }

  return (props.trigger) ? (
    <div>
      Update to Do
      <form onSubmit = {handleUpdate}>
        <input type="text"  name = 'title' />
        <input type="submit" id = 'submit' />
      </form>
    </div>
)
   : ''
}

export default Update

/*
First you need to create the button, make it console.log something so you know it exists. 
Get a hidden field which will be the list id. 
make this submit thingy also make the form show up

*/