import React,{useState,useEffect} from 'react'

const Create = (props) => {
  const [content,setContent] = useState('')
  const url = 'http://localhost:8000/api/task/'

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken')
  const handleSubmit = (e) => {
    const blog = {
        title: content,
        user_id: 1
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
      <p>{content}</p>
    </div>
  ) : ''
}
export default Create


