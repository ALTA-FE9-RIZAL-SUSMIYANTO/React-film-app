import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ButtonSecondary, ButtonPrimary } from "./Button";
import { ThemeContext } from "utils/context";

const Layout = ({ children }) => {
  const { isLight, setIsLight } = useContext(ThemeContext);

  return (
    <div className="w-full h-screen">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-500 mb-3 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <Link to="/">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href=""
              >
                Movie In Life
              </a>
            </Link>
          </div>
          <div
            className="lg:flex flex-grow items-center"
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
                <ButtonPrimary
                  label={isLight ? "Light Mode" : "Dark Mode"}
                  onClick={() => setIsLight(!isLight)}
                />
              </li>
              <li className="nav-item">
                <Link to="/favorites">
                  <ButtonSecondary label="My Favorite" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="w-full h-full bg-white dark:bg-black overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
