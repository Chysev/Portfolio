// Components
import LeftSection from "./Layer7/LeftSection";
import RightSection from "./Layer7/RightSection";

const Layer7 = () => {

    return (
        <section className="flex">
            <div
                id="Email"
                className="m-auto mt-[5rem] flex w-[1280px] max-w-[1300px] justify-between py-[auto] px-[20px] 992max:flex-col 992max:items-center 992max:gap-10">
                <LeftSection />
                <RightSection />
            </div>
        </section>
    );
};

export default Layer7;