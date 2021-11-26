import React from "react";
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>FakeShop</h2>
        <Link to="/helo" >Test Link</Link>
      </div>
    </div>
  );
};

export default Header;