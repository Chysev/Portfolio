// Components
import ProjectCard from '../../Cards/ProjectCard'
import ProjectCard2 from '../../Cards/ProjectCard2'

const FirstSection = () => {
    return (
        <div className="grid  max-w-[1300px] grid-cols-3 items-center gap-10 992max:flex 992max:max-w-[520px] 992max:flex-col 380max:max-w-[370px] 1360max:grid-cols-2">
            <ProjectCard
                image="Christmas.jpg"
                githublink="https://github.com/Chysev/christmas"
                title="Christmas CountDown"
                builtwith1="HTML"
                builtwith2="CSS"
                builtwith3="JavaScript"
                description="Christmas CountDown, This project is built with HTML, CSS and JavaScript"
                check1="HTML"
                check2="CSS"
                check3="JavaScript"
                check4="Open Source"
            />

            <ProjectCard
                image="Minecraft.jpg"
                githublink="https://github.com/Chysev/Minecraft_Website"
                title="Minecraft"
                builtwith1="HTML"
                builtwith2="CSS"
                builtwith3="JavaScript"
                description="Minecraft Website, This project is built with HTML, CSS and JavaScript"
                check1="HTML"
                check2="CSS"
                check3="JavaScript"
                check4="Open Source"
            />

            <ProjectCard2
                image="EJS.jpg"
                githublink="https://github.com/Chysev/express-ejs-app"
                title="Ejs App"
                builtwith1="EXPRESS"
                builtwith2="EJS"
                builtwith3="AOS"
                builtwith4="JavaScript"
                description="Ejs with built in Animation, This project is built with Express, Ejs, JavaScript and Aos Library. This will helps new developers who are starting with an Ejs App like e-commerce"
                check1="EXPRESS"
                check2="EJS"
                check3="CSS"
                check4="Open Source" />

            <ProjectCard2
                image="Nightflix.jpg"
                githublink="https://github.com/Chysev/NightFlix"
                title="Nightflix"
                builtwith1="NEXTJS"
                builtwith2="NEXT-AUTH"
                builtwith3="DB"
                builtwith4="TypeScript"
                description="Nightflix is a clone of Disney and Netflix, This project is built with Nextjs and Tailwind"
                check1="NEXTJS"
                check2="NEXT-AUTH"
                check3="TypeScript"
                check4="Open Source" />

            <ProjectCard2
                image="PageClip.jpg"
                githublink="https://github.com/Chysev/pageclipstaticweb"
                title="PageClip"
                builtwith1="HTML"
                builtwith2="CSS"
                builtwith3="DB"
                builtwith4="JavaScript"
                description="PageClip Froms, This project is built with HTML, CSS, JAVASCRIPT and PageClip Database Server that will store all of the information of the user's input"
                check1="HTML"
                check2="CSS"
                check3="JavaScript"
                check4="Open Source" />

            <ProjectCard2
                image="Portfolio.jpg"
                githublink="https://github.com/Chysev/Portfolio-Public-Repo"
                title="Portfolio"
                builtwith1="REACTJS"
                builtwith2="CSS/TAILWIND"
                builtwith3="DB"
                builtwith4="JavaScript"
                description="PageClip Froms, This project is built with HTML, CSS/TAILWIND, JAVASCRIPT and PageClip Database Server that will store all of the information of the user's input"
                check1="REACT"
                check2="CSS/TAILWIND"
                check3="JavaScript"
                check4="Open Source" />
        </div>
    )
}

export default FirstSection