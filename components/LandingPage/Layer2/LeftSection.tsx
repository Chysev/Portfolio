// Component
import MiniCard from "../../MiniCards/MiniCard"

const LeftSection = () => {
    return (
        <div className="grid grid-cols-2 992max:grid-cols-1">
            <MiniCard icon="text-[50px] text-darkcolor dark:text-white fa-brands fa-react" brandname="Mern Stack" />
            <MiniCard icon="text-[50px] text-darkcolor dark:text-white fa-brands fa-vuejs" brandname="Mevn Stack" />
            <MiniCard icon="text-[50px] fa-brands fa-discord text-darkcolor dark:text-white" brandname="Discord Bot" />
            <div className="grid">
                <MiniCard icon="text-[50px] text-darkcolor dark:text-white fa-brands fa-angular" brandname="Mean Stack" />
                <MiniCard icon="text-[50px] fab fa-node text-darkcolor dark:text-white" brandname="Ejs Stack" />

            </div>
        </div>
    )
}

export default LeftSection;