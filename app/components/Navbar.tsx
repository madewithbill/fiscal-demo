"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavMenuButton from "./NavMenuButton";
import NavLogo from "./NavLogo";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  function onClick() {
    setNav(!nav);
  }

  return (
    <div className={`fixed z-50 w-full px-4 ${nav && "bg-white text-black"}`}>
      <div className="m-auto flex h-20 max-w-7xl items-center">
        <nav className="flex w-full items-center justify-between text-sm">
          <Link href={"/"}>
            <NavLogo />
          </Link>

          <div className="flex items-center gap-4 font-medium max-md:gap-0">
            <ul
              className={`flex items-center gap-4 max-md:absolute max-md:inset-0 max-md:mt-20 max-md:min-h-screen max-md:flex-col max-md:items-start max-md:gap-3 max-md:bg-white max-md:p-4 max-md:pt-16 max-md:text-2xl max-md:text-black ${!nav && "max-md:hidden"}`}
            >
              <Link href={""}>
                {" "}
                <li>Product</li>
              </Link>
              <Link href={""}>
                <li>Our Company</li>
              </Link>
            </ul>
            <Link
              href={""}
              className={`rounded-sm ${!nav ? "bg-white text-black" : "bg-black text-white"} px-3 py-2.5 leading-none`}
            >
              Get Started
            </Link>
            <NavMenuButton onClick={onClick} navState={nav} />
          </div>
        </nav>
      </div>
    </div>
  );
}
