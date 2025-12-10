import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navber = () => {

  const activeBtn = "text-red-400 underline";
  const inActiveBtn = "";

  return (
    <div className="navbar bg-base-100 shadow-sm">

      {/* LEFT */}
      <div className="navbar-start">

        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

            <li><NavLink to="/" className={({ isActive }) => isActive ? activeBtn : inActiveBtn}>Home</NavLink></li>
            <li><NavLink to="/apps" className={({ isActive }) => isActive ? activeBtn : inActiveBtn}>Apps</NavLink></li>
            <li><NavLink to="/installation" className={({ isActive }) => isActive ? activeBtn : inActiveBtn}>Installation</NavLink></li>

          </ul>
        </div>

        {/* LOGO */}
        <Link
          to="/"
          className="btn btn-ghost text-xl text-purple-500 font-bold flex items-center gap-2"
        >
          <img src={logo} alt="logo" className="w-12" />
          HERO.IO
        </Link>

      </div>

      {/* CENTER MENU (Desktop) */}
      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1">

          <li><NavLink to="/" className={({ isActive }) => isActive ? activeBtn : inActiveBtn}>Home</NavLink></li>
          <li><NavLink to="/apps" className={({ isActive }) => isActive ? activeBtn : inActiveBtn}>Apps</NavLink></li>
          <li><NavLink to="/installation" className={({ isActive }) => isActive ? activeBtn : inActiveBtn}>Installation</NavLink></li>

        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end rounded-xl">
        <a
          className="btn bg-gradient-to-r from-purple-600 to-purple-400 text-white"
          href="https://github.com/SajibSaha207"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} className="text-2xl" /> Contribute
        </a>
      </div>

    </div>
  );
};

export default Navber;
