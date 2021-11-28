import React, { Component } from 'react';
import './Navbar.css';
import Hom from './Hom';
import Search from './Search';
import Carts from './Carts';

export class Navbar extends Component {
    render() {
        return (
           
            <div>
               <Hom/>
                <nav class="navbar navbar-expand-lg fixed-top  navbar-light px-2 px-lg-0" id="cus-navbar">
            <div class="container-fluid">
               <div class="d-flex align-items-center logo">
                  <a class="navbar-brand py-1" href="https://ibooking.co.uk/"><img src="https://ibooking.co.uk/custom_assets/image/ibooking-logo-white.png" className="logo__image" alt="ibooking" /></a>
                  <div class="d-none" id="cus-input-group">
                     <form class="form-inline d-none d-lg-flex" action="#" id="search">
                        <div class="input-label-absolute input-label-absolute-left input-reset input-expand ml-lg-2 ml-xl-3"> 
                           <label class="label-absolute" for="search_search"><i class="fa fa-search"></i><span class="sr-only">What're you searching for?</span></label>
                           <input class="form-control form-control-lg border-1 shadow-1 bg-white py-2" id="search_search" placeholder="What're you searching for?" aria-label="Search"/>
                           <button class="btn btn-reset btn-sm" type="reset"><i class="fa-times fas"></i></button>
                        </div>
                     </form>
                  </div>
               </div>
               <button class="navbar-toggler navbar-toggler-right cus-navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" id="cus-navbar-toggle"><i class="fa fa-bars"></i></button>
              
               {/* <!-- Navbar Collapse --> */}


               <div class="collapse navbar-collapse custom-navbar-collapse " id="navbarCollapse">
                  <div class="d-none  col-4" id="cus-input-group">
                     <form class="form-inline mt-4 mb-2 d-sm-none" action="#" id="searchcollapsed">
                        <div class="input-label-absolute input-label-absolute-left input-reset w-100">
                           <label class="label-absolute" for="searchcollapsed_search"><i class="fa fa-search"></i><span class="sr-only">What are you looking for?</span></label>
                           <input class="form-control form-control-sm border-0 shadow-0 bg-gray-200" id="searchcollapsed_search" placeholder="Search" aria-label="Search"/>
                           <button class="btn btn-reset btn-sm" type="reset"><i class="fa-times fas">           </i></button>
                        </div>
                     </form>
                  </div>
                  <ul class="navbar-nav ml-auto">

                     {/* <!-- /Megamenu end--> */}

                     <li className="nav-item d-none d-lg-block buddy"><a className="nav-link pl-2 mr-4" href="https://ibooking.co.uk/business">For Businesses </a>   </li>
                   
                     <li className="nav-item d-none d-lg-block"><a className="nav-link pl-2 mr-4 " href="https://ibooking.co.uk/login">Login  </a>   </li>
					 
					 
					 
                            <div className="d-block d-lg-none cus-menu" aria-labelledby="docsDropdownMenuLink">
                               <div className="mt-3">
                                
                                  <div className="d-flex justify-content-center align-items-center">
                                     <a className="dropdown-item menbar_a"  href="https://ibooking.co.uk/book">Book a Service 
                                     <i className="fa fa-angle-right float-right menbar_arrow"></i>
                                     </a>						
                                  </div>
                                  <div className="dropdown-divider mb-0"></div>
												
                                  <div className="d-flex justify-content-center align-items-center">
                                     <a className="dropdown-item menbar_a"  href="https://ibooking.co.uk/login">Login
                                     <i className="fa fa-angle-right float-right menbar_arrow"></i>
                                     </a>						
                                  </div>
                                  <div className="dropdown-divider mb-0"></div>
								  
								  
                                  <p className="dropdown-header font-weight-normal menbar_title">BUSINESSES</p>
                                
                                 
                                  <div className="d-flex justify-content-center align-items-center  pt-1">
                                     <a className="dropdown-item menbar_a"  href="#">Business Sign up
                                     <i className="fa fa-angle-right float-right menbar_arrow"></i>
                                     </a>						
                                  </div>
                                  <div className="dropdown-divider mb-0"></div>
                                  <p className="dropdown-header font-weight-normal menbar_title">CONNECT WITH US</p>
                                  <div className="d-flex justify-content-center align-items-center pt-1">
                                     <a className="dropdown-item menbar_a " href="https://ibooking.co.uk/about">About Us
                                     <i className="fa fa-angle-right float-right menbar_arrow"></i>
                                     </a>						
                                  </div>
                                  <div className="dropdown-divider"></div>
                                  <div className="d-flex justify-content-center align-items-center">
                                     <a className="dropdown-item menbar_a"  href="https://ibooking.co.uk/faq">FAQ
                                     <i className="fa fa-angle-right float-right menbar_arrow"></i>
                                     </a>						
                                  </div>
                                  <div className="dropdown-divider"></div>
                                  <div className="d-flex justify-content-center align-items-center">
                                     <a className="dropdown-item menbar_a"   href="https://ibooking.co.uk/blog">Blog
                                     <i className="fa fa-angle-right float-right menbar_arrow"></i>
                                     </a>						
                                  </div>
                                  <div className="dropdown-divider"></div>
                                  <div className="d-flex justify-content-center align-items-center">
                                     <a className="dropdown-item menbar_a" href="https://ibooking.co.uk/contact">Contact Us
                                     <i className="fa fa-angle-right float-right menbar_arrow"></i>
                                     </a>						
                                  </div>
                               </div>
                            </div>
					 
					 
					 
					 
                     <li className="nav-item dropdown d-none d-lg-block">
                        <a className="nav-link" id="docsDropdownMenuLink" href="index.php" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-bars fa-lg"></i></a>
                        <div className="dropdown-menu dropdown-menu-right cus-menu" aria-labelledby="docsDropdownMenuLink">
                           <p className="dropdown-header font-weight-normal">CUSTOMERS</p>
                         
						   <a className="dropdown-item" href="#">Book a Service </a>
				
                           <div className="dropdown-divider"></div>
                           <p className="dropdown-header font-weight-normal">BUSINESSES</p>
              				 <a className="dropdown-item" href="#">Business Sign up </a>
						   
						    <div class="dropdown-divider mb-0"></div>
                           <p className="dropdown-header font-weight-normal">CONNECT WITH US</p>
                           <a className="dropdown-item" href="https://ibooking.co.uk/about">About Us </a>
						   <a className="dropdown-item" href="https://ibooking.co.uk/faq">FAQ</a>
						   <a className="dropdown-item" href="https://ibooking.co.uk/blog">Blog</a>
						   <a className="dropdown-item" href="https://ibooking.co.uk/contact">Contact Us</a>
                        </div>
                     </li>
                
                  </ul>
               </div>
            </div>
         </nav>
         <Search/>
         <Carts/>
            </div>
        )
    }
}

export default Navbar