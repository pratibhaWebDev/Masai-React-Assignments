import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const TodoList = () => {

    const [pages,setPages]=useState(1)
    const [todos,setTodos]=useState([])
    const pageRef=useRef(pages)
    const PostperPage=5

    async function fetchData(){
        const response=await fetch("https://jsonplaceholder.typicode.com/todos")
        const data=await response.json()
        setTodos(data)
        pageRef.current=pages
        
    }
    
    useEffect(()=>{
        fetchData()
    },[])

    const indexLastPost=pages*PostperPage;
    const indexFirstPost=indexLastPost-PostperPage;
    const posts= todos.slice(indexFirstPost,indexLastPost)


    // Total pages
  const totalPages = Math.ceil(todos.length / PostperPage);

  return (
    <div>
        <h1>Todo List</h1>
        <ul>
        {posts.map((post)=>(
            <li key={post.id}>
            <strong>{post.id}.</strong> {post.title}
          </li>
        ))}
        </ul>

        <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setPages((prev) => Math.max(prev - 1, 1))}
          disabled={pages === 1}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setPages(pageNum)}
              style={{
                margin: "0 5px",
                backgroundColor: pageNum === pages ? "lightblue" : "white",
                fontWeight: pageNum === pages ? "bold" : "normal",
                border: "1px solid black",
                padding: "5px 10px",
              }}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => setPages((prev) => Math.min(prev + 1, totalPages))}
          disabled={pages === totalPages}
        >
          Next
        </button>
      </div>
    </div>

  )
}

export default TodoList