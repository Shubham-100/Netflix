"use client";

import React, { useState, useEffect } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'

function Header() {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        }

        addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

  return (
    <header className={`${isScrolling && `bg-[#141414] transition-all ease-out duration-2000s`}`}>
        <div className="flex flex-row items-center space-x-2 md:space-x-10">
            <a href="#">
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />
            </a>
            <ul className="hidden space-x-4 md:flex">
                <li className='headerLink'>Home</li>
                <li className='headerLink'>TV Shows</li>
                <li className='headerLink'>Movies</li>
                <li className='headerLink'>New & Trending</li>
                <li className='headerLink'>My List</li>
            </ul>
        </div>

        <div className='flex items-center space-x-4 text-sm font-light'>
            <SearchIcon className="hidden h-6 w-6 sm:inline"/>
            <p className="hidden lg:inline">Kids</p>
            <BellIcon className="h-6 w-6"/>
            <Link href="/account">
                <img
                    src="https://rb.gy/g1pwyx"
                    alt=""
                    className="cursor-pointer rounded"
                />
            </Link>
        </div>
    </header>
  )
}

export default Header