"use client";

import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red w-full relative z-10 border border-blacks">
      <div className="mx-auto max-w-screen-2xl  px-5 ">
        <div className="flex h-20 items-center justify-between gap-2">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/playground.svg"
              alt="Playground logo"
              width={60}
              height={60}
              className="w-9 h-9"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-cetner md:gap-10">
            <Link
              href="/animation"
              className="text-white hover:text-black px-3 py-2 text-md font-bold"
            >
              Animations
            </Link>
            <Link
              href="/blog-post"
              className="text-white hover:text-black px-3 py-2 text-md font-bold"
            >
              Blog post
            </Link>
            <Link
              href="/test-3"
              className="text-white hover:text-black px-3 py-2 text-md font-bold"
            >
              Test3
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/animation"
              className="text-white hover:text-black block px-2 py-3 text-base font-medium"
            >
              Animations
            </Link>
            <Link
              href="/blog-post"
              className="text-white hover:text-black block px-2 py-3 text-base font-medium"
            >
              Blog post
            </Link>
            <Link
              href="/test-3"
              className="text-white hover:text-black block px-2 py-3 text-base font-medium"
            >
              Test3
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
