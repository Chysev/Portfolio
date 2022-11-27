import React, { useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll";

// Component
import Switcher from "./Switcher"

const NavList = () => {

    // Mobile Nav Button
    let [open, setOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                name={open ? "close" : "menu"}
                className="z-[9999] hidden transition-all  768max:block">

                <i className={`fa-solid fa-bars-staggered text-lightcolor transition-all dark:text-darkcolor 
                ${open ? "768max:rotate-0" : "768max:rotate-180"}`}></i>

            </button>

            <nav className={`NavRowList bg-lightbackground text-lightcolor dark:bg-darkbackground dark:text-darkcolor 768max:fixed 
            ${open ? "768max:translate-x-0" : "768max:translate-x-full"}`}>

                <ul className="flex items-center gap-[2.8rem] 768max:fixed 768max:my-auto 
                768max:mx-[5rem] 768max:flex-col 768max:items-center 768max:p-[min(20vh,_10rem)_2em]">

                    <Link smooth={true} duration={600} to="Home">
                        <p className="font-[500] text-lightcolo cursor-pointer hover:text-lightcolor dark:text-darkcolor dark:hover:text-darkcolor">
                            Home
                        </p>
                    </Link>

                    <Link smooth={true} duration={600} to="About">
                        <p className="font-[500] text-darkcolor cursor-pointer hover:text-lightcolor dark:text-lightcolor dark:hover:text-darkcolor">
                            About
                        </p>
                    </Link>

                    <Link smooth={true} duration={600} to="Projects">
                        <p className="font-[500] text-darkcolor cursor-pointer hover:text-lightcolor dark:text-lightcolor dark:hover:text-darkcolor">
                            Projects
                        </p>
                    </Link>

                    <Link smooth={true} duration={600} to="Email">
                        <p className="font-[500] text-darkcolor cursor-pointer hover:text-lightcolor dark:text-lightcolor dark:hover:text-darkcolor">
                            Email
                        </p>
                    </Link>

                    {/* Dark Mode Switcher Button */}
                    <li className="text-lightcolor hover:text-lightcolor dark:text-darkcolor dark:hover:text-darkcolor">
                        <Switcher />
                    </li>

                </ul>

            </nav>
        </>
    )
}

export default NavList