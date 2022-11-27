// Components
import LeftSection from "./Layer4/LeftSection"
import RightSection from "./Layer4/RightSection"

const Layer4 = () => {
    return (
        <section className="flex">
            <div
                id="Lang&Tools"
                className="m-auto mt-[6rem] flex w-[1280px] max-w-[1300px] 992max:gap-[60px] items-center justify-between py-[auto] px-[10px] 992max:px-[20px] 992max:flex 992max:flex-col">
                <LeftSection />
                <RightSection />
            </div>
        </section>
    )
}

export default Layer4