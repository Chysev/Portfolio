import { useState } from "react"

// Components
import FirstSection from "./Layer5/FirstSection"
import SecondSection from "./Layer5/SecondSection"
import Line from "../Icons/Line"

const Layer5 = () => {

    const [activeTab, setActiveTab] = useState("tab1");

    const handleFirst = () => {
        setActiveTab("tab1");
    };
    const handleSecond = () => {
        setActiveTab("tab2");
    };

    return (
        <section className="flex">

            <div
                id="Projects"
                className="m-auto mt-[7rem] flex w-[1300px] max-w-[1300px] flex-col  items-center  gap-6 py-[auto] px-[20px] 992max:flex 992max:flex-col">


                <div className="flex items-center gap-2">
                    <Line />
                    <h1 className="flex text-4xl">Projects</h1>
                    <Line />
                </div>

                <div className="flex gap-3">

                    <p onClick={handleFirst}
                        className={`shadow-[_0_0_2px_whitesmoke] inline-block rounded-[50px] px-[1rem] py-[0.5rem] cursor-pointer hover:opacity-[0.8] ${activeTab === "tab1" ? "active" : ""}`}>
                        1
                    </p>

                    <p onClick={handleSecond}
                        className={`shadow-[_0_0_2px_whitesmoke] inline-block rounded-[50px] px-[1rem] py-[0.5rem] cursor-pointer hover:opacity-[0.8] ${activeTab === "tab2" ? "active" : ""}`}>
                        2
                    </p>

                </div>


                <div>
                    {activeTab === "tab1" ? <FirstSection /> : <SecondSection />}
                </div>

            </div>
        </section>
    )
}

export default Layer5