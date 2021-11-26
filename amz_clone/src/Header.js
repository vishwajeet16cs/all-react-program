import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./StateProvider";
 
function Header(){
  const [{basket}]=useStateValue();

 console.log(
      basket
 )

return(<nav className="header">
 
{/* <logo on the left --img*/}
<Link to="/">
<img  className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
</Link> 


{/* Search bar*/}
<div className="header__search">
<input type="text" className= "header__searchInput"/>
<SearchIcon className="header_SearchIcon"/>
</div>



{/* 3 lnks*/}
<div className="header__nav">
    {/* 1st lnk */}
<Link to ="/login" className="header__link">
<div className="header__option">
<span className="header__optionline1 ">Hello </span>
<span className="header__optionline2 ">Sign In </span>
</div>
</Link>

    {/* 2nd lnk */}
    <Link to ="/" className="header__link">
<div className="header__option">
<span className="header__optionline1 ">Returns </span>
<span className="header__optionline2 ">& Orders </span>
</div>
</Link>
    {/* 3rd lnk */}
    <Link to ="/" className="header__link">
<div className="header__option">
<span className="header__optionline1 ">Your </span>
<span className="header__optionline2 ">Prime </span>
</div>
</Link>
    
{/* Basket icon with number*/}
<Link to="/checkout" className="header__link">
    <div className="header__optionBasket">
        {/* Shopping basket icon */}
         <ShoppingBasketIcon/>  
        {/* No of shopping icon basket */}
        <span className="header__optionline2  header__basketcount">{basket?.length}</span>
    </div>
</Link>

</div>



</nav>)
}
export default Header;