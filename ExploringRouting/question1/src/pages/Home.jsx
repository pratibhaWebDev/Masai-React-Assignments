import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    const [posts,setPosts]=useState([])
    const [search,setSearch]=useState('')

    useEffect(()=>{
        fetch('https://dummyjson.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data.posts))
    },[])

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    
  return (
    <div>
        <h2>Blog Posts</h2>
        <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '20px', padding: '5px' }}
      />
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id} style={{ marginBottom: '10px' }}>
            <Link to={`/post/${post.id}`} style={{ fontWeight: 'bold' }}>
              {post.title}
            </Link>
            <p>{post.body.slice(0, 50)}...</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home