/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(props) {
 
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/welcome"
            >
            FocusMate
            </Link>
           
          </div>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <a href = "/profile" >
              <li

               className=" hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-s font-semibold ">
              About
              
              {/*make this hyperlink*/}
      
              </li>
              </a>
              
              <a href="/welcome">
              <li
            
               className=" hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-s font-semibold ">
              Home
              
              {/*make this hyperlink*/}
      
              </li>
              </a>
              

             
              
            </ul>
        </div>
      </nav>
    </>
  );
}
