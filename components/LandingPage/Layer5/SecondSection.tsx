// Components
import ProjectCard from '../../Cards/ProjectCard'
import ProjectCard2 from '../../Cards/ProjectCard2'

const SecondSection = () => {
    return (
        <div className="grid  max-w-[1300px] grid-cols-3 items-center gap-10 992max:flex 992max:max-w-[520px] 992max:flex-col 380max:max-w-[370px] 1360max:grid-cols-2">
            <ProjectCard
                image="SchoolProject.png"
                githublink="https://github.com/Chysev/21st_MIL_Project"
                title="100 Tula Website"
                builtwith1="NEXTJS"
                builtwith2="DB"
                builtwith3="TypeScript"
                description="100 Tula Para Kay Stella Website, This project is build with Next and Tailwind"
                check1="NEXTJS"
                check2="DB"
                check3="TypeScript"
                check4="Open Source"
            />

            <ProjectCard2
                image="Capybara.jpg"
                githublink="https://github.com/Chysev/CapybaraBOT"
                title="Capybara Bot"
                builtwith1="DISCORDJS"
                builtwith2="ERELAJS"
                builtwith3="LAVALINK"
                builtwith4="TypeScript"
                description="Capybara Bot, This project is build with Discordjs, Erelajs and Lavalink server for music api"
                check1="DISCORDJS"
                check2="ERELAJS/LAVALINK"
                check3="TypeScript"
                check4="Open Source" />
        </div>
    )
}

export default SecondSection