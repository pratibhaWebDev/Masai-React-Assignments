import React ,{useEffect, useRef, useState} from 'react'

const Pagination = () => {
    const [pages,setPages]=useState(1)
     const pageRef = useRef(pages)
     const [posts,setPosts]=useState([])

     async function fetchData(){
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pages}`)
        const data = await response.json()
        setPosts(data.results)
        pageRef.current = pages; // update ref when page changes
        console.log("Current page (ref):", pageRef.current);
    
     }

    useEffect(()=>{
        fetchData()
    },[pages])
  return (
    <div>
        {posts.map((post)=>(
            <div key={post.id}>
            <h1>{post.id}</h1>
            <p>{post.name}</p>
            <img src={post.image} />
            </div>
        ))}
          <button onClick={()=>setPages(pages-1)} disabled={pages==1}>Prev</button>
        <button onClick={()=>setPages(pages+1)}>Next</button>
      
    </div>
  )
}

export default Pagination