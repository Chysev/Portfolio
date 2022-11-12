import { useEffect, useState } from "react"

// Components
import BrandName from "./components/BrandName"
import NavList from "./components/NavList"

const Header = () => {
    return (
        <header className="flex fixed z-[9999] leading-[80px] min-h-[80px] w-[100%] dark:shadow-[_0_0_0.75px_whitesmoke] shadow-[_0_0_0.75px_black] text-lightcolor dark:text-darkcolor bg-lightbackground dark:bg-darkbackground">
            <div className="flex items-center m-auto max-w-[1300px] w-[100%] justify-between py-auto px-[30px]">
                <BrandName />
                <NavList />
            </div>
        </header>
    )
}

export default Header