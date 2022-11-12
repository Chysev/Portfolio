import dynamic from "next/dynamic"

// Components
const Header = dynamic(() => import("./App/Header"), { ssr: false })
const Footer = dynamic(() => import("./App/Footer"), { ssr: false })


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout