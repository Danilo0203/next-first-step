import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import ActiveLink from "../active-link/ActiveLink";

const navItems = [
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/pricing",
    label: "Pricing",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 roundend">
      <Link href={"/"} className="flex items-center gap-2">
        <HomeIcon />
        <span>Home</span>
      </Link>
      <div className="ms-auto flex gap-4">
        {navItems.map((navItem, index) => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
