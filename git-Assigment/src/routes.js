import React from 'react';
import GitIssue from './GitIssue.jsx';
import { Route, Routes} from 'react-router';
import Home from './Home.jsx';




const AppRoutes = () => {
  
  return (
    <>

      <Routes>

        <Route  path="/" element={<Home />}/>
        <Route  path="/issue" element={<GitIssue />}/>
      </Routes>
    </>
  )

};
export default AppRoutes;