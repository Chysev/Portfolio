// Component
import SchoolProjectCard from '../../Cards/SchoolProjectCard'

const SecondSection = () => {
    return (
        <div className="grid  max-w-[1300px] grid-cols-3 items-center gap-10 992max:flex 992max:max-w-[520px] 992max:flex-col 380max:max-w-[370px] 1360max:grid-cols-2">
            <SchoolProjectCard />
        </div>
    )
}

export default SecondSection