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
              Animation
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
            >
              About us
            </a>
            <a
              href="#contact"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
