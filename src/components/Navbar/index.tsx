"use client";

import React, { useEffect, useState } from 'react'
import Logo from "../Logo"
import NavItem from "./components/NavItem"
import { Button } from "../ui/button"
import { navItems } from "@/constant"
import ThemeToggle from "../ThemeProvider/ThemeToggle"
import MobileNav from "./components/MobileNav"


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header className={`w-full fixed z-50 ${isActive ? "bg-accent shadow dark:border-b border-gray-500/20" : "bg-background"}`}>
      <nav className="w-full mx-auto px-4 md:px-6 lg:px-10 flex items-center justify-between h-[75px] max-w-[1500px]">
        <Logo />
        <ul className="hidden text-sm font-semibold xl:flex items-center lg:gap-x-8 xl:gap-x-10">
          {
            navItems.map((item, index) => (
              <NavItem label={item.name} href={item.href} key={index} />
            ))
          }
        </ul>
        <div className="flex items-center justify-center gap-x-1 sm:gap-x-4">
          <ThemeToggle />
          <Button className="hidden lg:flex">
            Sign Up
          </Button>
          <div className="flex items-center ml-3 justify-center xl:hidden">
            <MobileNav />
          </div>
        </div>
      </nav >
    </header>
  )
}

export default Navbar
