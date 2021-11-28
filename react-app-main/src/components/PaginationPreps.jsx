import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Posts from './PostsHere/Posts';
import PaginationWork from './PostsHere/PaginationWork';
const PaginationPreps=()=>{
    const [posts,setPosts] =useState([]);
        const [loading,setLoading]=useState(false);
        const [currentPage,setCurrentPage]=useState(1);
        const [postsPerPage,setPostsPerPage]=useState(10);
        useEffect(()=>{
            const fetchPosts =async()=>{
                setLoading(true);
                const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
                setPosts(res.data);
                setLoading(false);
            }
            fetchPosts();
        },[]);
        // console.log(posts);
        //get current posts
         const indexOfLastPost=currentPage*postsPerPage;
         const indexOfFirstPost=indexOfLastPost-postsPerPage;
         const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);
         //change page
         const paginate=(pageNumber)=>setCurrentPage(pageNumber);
    return(
    <>
    {/* <h6>{JSON.stringify(posts)}</h6> */}
    <div className="container mt-5">
        <h1 className="text-primary mb-3">My Blog</h1>
        <Posts posts={currentPosts} loading={loading}/>
        <PaginationWork postsPerPage={postsPerPage} totalPosts={posts.length}  
            paginate={paginate} />
    </div>
        
    </>)
}
export default PaginationPreps;