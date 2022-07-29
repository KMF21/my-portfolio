import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex  my-auto">
          <NavLink
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4
             text-red-100 hover:text-green-800 text-4xl font-bold
              cursive tracking-widest"
            to="/"
            exact="true"
          >
            KMF.js
          </NavLink>
          <div className=" absolute invisible md:visible md:static 
          lg:visible lg:static">
            <NavLink
              to="/Post"
              className="inline-flex items-center py-3 px-3 my-6 rounded
               text-red-200 hover:text-green-800 hover:bg-red-700"
              activeClassName="text-red-100 bg-red-700"
            >
              Blog Posts
            </NavLink>
            <NavLink
              activeClassName="text-red-100 bg-red-700"
              className="inline-flex items-center py-3 px-3 my-6 rounded
               text-red-200 hover:text-green-800 hover:bg-red-700"
              to="/project"
            >
              Projects
            </NavLink>
            <NavLink
              activeClassName="text-red-100 bg-red-700"
              className="inline-flex items-center py-3 px-3 my-6 rounded
               text-red-200 hover:text-green-800 hover:bg-red-700"
              to="/about"
            >
              About Me!
            </NavLink>
          </div>
        </nav>
        <div className="inline-flex py-3 px-3 my-auto">
          <SocialIcon
            url="https://twitter.com/KMFordward"
            className="mr-4"
            target="_blank"
            fgColor="white"
            styles={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/kmf.js/?hl=en"
            className="mr-4"
            target="_blank"
            fgColor="white"
            styles={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/ikoojo-joseph-6a735222b/"
            className="mr-4"
            target="_blank"
            fgColor="white"
            styles={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
