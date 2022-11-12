// Components
import ChristmasCard from '../../Cards/ChristmasCard'
import EJSCard from '../../Cards/EjsCard'
import MinecraftCard from '../../Cards/MinecraftCard'
import NightflixCard from '../../Cards/NightflixCard'
import PageClipCard from '../../Cards/PageClipCard'
import PortfolioCard from '../../Cards/PortfolioCard'

const FirstSection = () => {
    return (
        <div className="grid  max-w-[1300px] grid-cols-3 items-center gap-10 992max:flex 992max:max-w-[520px] 992max:flex-col 380max:max-w-[370px] 1360max:grid-cols-2">
            <ChristmasCard />
            <MinecraftCard />
            <EJSCard />
            <NightflixCard />
            <PageClipCard />
            <PortfolioCard />
        </div>
    )
}

export default FirstSection