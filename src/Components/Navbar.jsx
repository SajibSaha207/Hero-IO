import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
 import { Link, NavLink } from 'react-router-dom'; 
 import  logo from '../assets/logo.png'

const Navber = () => { 

 const activeBtn="text-red-400 underline" 
 const inActiveBtn=""


    return (
     <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li> <NavLink to='/' className={({isActive})=>isActive?activeBtn:inActiveBtn}>Home </NavLink> </li>
        <li>
           <NavLink to='/apps' className={({isActive})=>isActive?activeBtn:inActiveBtn}>Apps </NavLink> 
       
        </li>
        <li><NavLink to='/installation'className={({isActive})=>isActive?activeBtn:inActiveBtn}> Installation </NavLink> </li>
      </ul>
    </div> 
       <Link to='/'> 
    <a className="btn btn-ghost text-xl text-purple-500 font-bold">
      
   
      <img src={logo} alt="logo" className='w-12' /> HERO.IO </a>   </Link>
  </div>
  <div className="navbar-center hidden lg:flex font-bold">
    <ul className="menu menu-horizontal px-1">
      <li> <NavLink to='/' className={({isActive})=>isActive?activeBtn:inActiveBtn}>Home </NavLink>                      </li>
      
       
        <li> <NavLink to='/apps'className={({isActive})=>isActive?activeBtn:inActiveBtn}>Apps </NavLink> </li>
        
        
     
      <li><NavLink to='/installation' className={({isActive})=>isActive?activeBtn:inActiveBtn}> Installation </NavLink></li>
    </ul>
  </div>
  <div className="navbar-end rounded-xl">
    <a className="btn bg-gradient-to-r from-purple-600 to-purple-400 text-white" href='https://github.com/fuadhasan199'> <FontAwesomeIcon icon={faGithubSquare} className="text-2xl" /> Contribute</a>
  </div>
</div>
    );
};

export default Navber;