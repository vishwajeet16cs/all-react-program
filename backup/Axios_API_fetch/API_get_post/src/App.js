import React from 'react';
import PostForm from './API/PostForm';
import PostLoist from './API/PostList';
const App=()=>{
  return(
    <>
    <PostForm/>
      <PostLoist/>  
    </>
  )
}
export default App;