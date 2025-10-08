import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { Squash as Hamburger } from "hamburger-react";
import logoIcon from "../../assets/logo.png";
import { Github } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
      id: 1,
    },
    {
      name: "Apps",
      path: "/apps",
      id: 2,
    },
    {
      name: "Installation",
      path: "/installation",
      id: 3,
    },
  ];
  const links = navLinks.map((nav) => (
    <NavLink
      key={nav.id}
      to={nav.path}
      className={({ isActive }) =>
        ` mx-10 py-1 font-semibold ${
          isActive
            ? "text-purple-600 border-b-2 border-purple-600"
            : "text-gradient"
        }`
      }
    >
      {nav.name}
    </NavLink>
  ));
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="bg-white py-2 border-b-2 border-[#E9E9E9]">
      <div className="container mx-auto flex justify-between">
        {/* Menue  */}
        <div className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#632EE3" />
          <div
            className={`flex flex-col  rounded-sm border border-purple-500 bg-white opacity-90  font-semibold lg:hidden duration-1000 absolute ${
              isOpen ? "top-16 left-10" : "-top-64 left-10"
            }`}
          >
            <ul className="flex flex-col ">{links}</ul>
          </div>
        </div>
        {/* Nav section  */}
        <div className=" flex flex-1 justify-between items-center ">
          {/* Logo  */}
          <Link to={"/"} className="flex  items-center gap-2">
            <img src={logoIcon} alt="" className="size-10" />
            <h3 className="font-bold">HERO.IO</h3>
          </Link>
          {/* Nav links  */}
          <div className="hidden lg:flex">
            <ul className="flex gap-5">{links}</ul>
          </div>
          {/* nav button  */}
          <Link
            to={"https://github.com/"}
            className={`flex gradient-purple border-0 rounded-sm px-5 py-2 text-white hover:brightness-110 `}
          >
            <span className="size-5 mr-3">
              <Github />
            </span>
            Contribute
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
