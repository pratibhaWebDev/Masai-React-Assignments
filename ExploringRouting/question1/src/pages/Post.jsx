import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch('https://dummyjson.com/posts/${id}')
            .then(response => response.json())
            .then(data => setPost(data))
    }, [id])

    if (!post) return <p>Loading post....</p>
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <h4>Tags:</h4>
            {post.tags && (
        <>
          <h4>Tags:</h4>
          <ul>
            {post.tags.map(tag => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        </>
      )}
        </div>
    )
}

export default Post