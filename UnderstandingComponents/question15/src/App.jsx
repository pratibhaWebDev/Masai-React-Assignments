import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const blogs = [
    { title: "Mastering JavaScript", content: "JavaScript is a powerful language for web development." },
    { title: "React in Indian Startups", content: "React is widely used in many Indian tech companies." },
    { title: "Career in Web Development", content: "Explore job roles and growth in web development." },
  ];

  const [blogSelect, setBlogSelect] = useState(null);

  return (
    <>
      <h1>Blog Title</h1>
      <ul>
      {blogs.map((blog,index)=>(
        <li
        key={index}
        onClick={()=>setBlogSelect(blog)}
        style={{
          cursor:"pointer",
          listStyle:"none",
          backgroundColor: '#f0f0f0',
          borderRadius: '5px',
          border:"2px solid grey",
          padding:"2px",
          margin:"2px",

        }}
        >
          {blog.title}
        </li>
      ))}
      </ul>

      <div>
        {blogSelect?(
          <div>
             <h3>{blogSelect.title}</h3>
             <p>{blogSelect.content}</p>
          </div>
        ):(
           <p style={{ fontStyle: 'italic' }}>Select a blog to read</p>
        )}
      </div>
    </>
  )
}

export default App
