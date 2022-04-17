import React,{useState,useEffect} from 'react'

const Create = (props) => {
  const [content,setContent] = useState('')
  const url = 'http://localhost:8000/api/task/'
  const user = localStorage.getItem('user')
  const handleSubmit = (e) => {
    const blog = {
        title: content,
        user_id: user
    }
    console.log(blog)

    fetch(url, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log('new blog added')

    })
  }
  return (props.trigger) ? (
    <div>
      Create a New To-Do
      <form onSubmit = {handleSubmit}>
        <input onChange = {(e) => setContent(e.target.value)} type="text"  name = 'title' />
        <input type="submit" id = 'submit' />
      </form>
    </div>
  ) : ''
}
export default Create


