import React from 'react'
import {useEffect, useRef, useState} from 'react'

const Manually = () => {

    const [pages,setPages]=useState(1)
    //  const pageRef = useRef(pages)
     const [posts,setPosts]=useState([])
     const PostPerPage=10


    async function fetchData(){
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        setPosts(data.results)
        // pageRef.current = pages; // update ref when page changes
        // console.log("Current page (ref):", pageRef.current);

    
     }


     const indexOfLastPost= pages*PostPerPage;
     const indexOfFirstPost= indexOfLastPost-PostPerPage;
     const currentPosts= posts.slice(indexOfFirstPost,indexOfLastPost)


     useEffect(() => {
        fetchData();
      }, [pages]);

  return (
      <div>
        {currentPosts.map((post)=>(
            <div key={post.id}>
            <h1>{post.id}</h1>
            <p>{post.name}</p>
            <img src={post.image} />
            </div>
        ))}
          <button onClick={()=>setPages(pages-1)} disabled={pages==1}>Prev</button>
        <button onClick={()=>setPages(pages+1)} disabled={indexOfLastPost >= posts.length}>Next</button>
      
    </div>
  )
}

export default Manually