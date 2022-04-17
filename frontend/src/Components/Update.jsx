import React,{useState,useEffect} from 'react'

// get list.id in order to call the api
// show a form when triggered

const Update = (props) => {
  const handleUpdate = (e) => {
    let new_words = e.target[0].value
    let user = localStorage.getItem('user')
    console.log(user)
    console.log(props.list_id)


    let new_post = {
      id: props.list_id,
      title: new_words,
      user_id: user
    }
    let url = 'http://localhost:8000/api/task/' + props.list_id + '/'
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