import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-scroll";

function NavBar() {
  const [navToggler, SetNavToggler] = useState(false);
  const handelNavToggle = () => {
    SetNavToggler((prev) => !prev);
  };
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-700/80 py-3 backdrop-blur-lg">
      <div className="container relative mx-auto px-4 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <img className="mr-2 h-10 w-10" src={logo} alt="" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="ml-14 hidden space-x-12 lg:flex ">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={
                      item.href === "workflow"
                        ? -70
                        : item.href === "pricing"? -70 : - 100
                    }
                    className="hover:text-orange-500"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="hidden items-center justify-center space-x-12 lg:flex">
            <a href="#" className="rounded-md border px-3 py-2 ">
              Sign In
            </a>
            <a
              href="#"
              className="rounded-md bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2"
            >
              Create account
            </a>
          </div>
          <div className="flex-cl justify-end md:flex lg:hidden">
            <button>
              {navToggler ? (
                <X className="h-8 w-8" onClick={handelNavToggle} />
              ) : (
                <Menu className="h-8 w-8" onClick={handelNavToggle} />
              )}
            </button>
          </div>
        </div>
        {navToggler && (
          <div className="fixed right-0 z-20 flex w-full flex-col items-center justify-center bg-neutral-900 p-12 lg:hidden">
            <ul>
              {navItems.map((item, index) => {
                return (
                  <li key={index} className="py-4 text-center">
                    <a href={item.href}>{item.label}</a>
                  </li>
                );
              })}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="rounded-md border px-3 py-2">
                Sing In
              </a>
              <a
                href="#"
                className=" rounded-md border bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2"
              >
                Create account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
