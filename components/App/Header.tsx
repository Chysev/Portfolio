import { useEffect, useState } from "react"

// Components
import BrandName from "./components/BrandName"
import NavList from "./components/NavList"
import StandForUkraine from "../Others/StandForUkraine"

const Header = () => {
    const [line, setLine] = useState(false)

    useEffect(() => {

        const navlinehandler = () => {
            if (window.scrollY >= 80) {
                setLine(true)
            } else {
                setLine(false)
            }
        }

        window.addEventListener('scroll', navlinehandler)
    })

    return (
        <>
            <header className={`flex flex-col fixed z-[9999]  min-h-[80px] w-[100%]  text-lightcolor dark:text-darkcolor bg-lightbackground dark:bg-darkbackground ${line ? 'dark:shadow-[_0_0_0.75px_whitesmoke] shadow-[_0_0_0.75px_black]' : ''}`}>
                <StandForUkraine />
                <div className="flex items-center m-auto max-w-[1300px] w-[100%] justify-between py-[25px] px-[30px]">
                    <BrandName />
                    <NavList />
                </div>
            </header>
        </>
    )
}

export default Header