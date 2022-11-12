// Components
import LeftSection from "./Layer3/LeftSection"
import RightSection from "./Layer3/RightSection"

const Layer3 = () => {
    return (
        <div className="flex">
            <div
                id="About"
                className="m-auto mt-[6rem] flex w-[1280px] max-w-[1300px] 992max:gap-[60px] items-center justify-between py-[auto] px-[10px] 992max:px-[20px] 992max:flex 992max:flex-col">
                <LeftSection />
                <RightSection />
            </div>
        </div>
    )
}

export default Layer3