import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Link from "next/link";
import PortfolioImg from "../../public/Portfolio.jpg"


const PortfolioCard = () => {

    // Flip Card
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="vertical">

            {/* Front of the card */}
            <div
                style={{ borderRadius: "10px 0px 10px 10px" }}
                className="leading-[24px] text-[whitesmoke] items-center flex flex-col justify-center gap-6 bg-lightsurface dark:bg-darksurface portfolios">

                <h1 className="text-center text-2xl text-lightcolor dark:text-white">Portfolio</h1>

                <div className="flex gap-1">
                    <p className="m-auto h-6 rounded-lg bg-paragraphdarkcolor px-2 text-sm">React</p>
                    <p className="m-auto h-6 rounded-lg bg-paragraphdarkcolor px-2 text-sm">TypeScript</p>
                    <p className="m-auto h-6 rounded-lg bg-paragraphdarkcolor px-2 text-sm">Auth</p>
                    <p className="m-auto h-6 rounded-lg bg-paragraphdarkcolor px-2 text-sm">DB</p>
                </div>

                <picture>
                    <img
                        style={{ borderRadius: "10px 0px 10px 10px" }}
                        src={PortfolioImg.src}
                        alt=""
                    />
                </picture>

                <div className="flex gap-2">

                    <Link href="https://github.com/Chysev/Portfolio-Public-Repo">
                        <button
                            className="rounded-md border border-solid border-lightcolor bg-lightcolor px-6 pt-2 pb-2 text-white dark:border-darkcolor dark:bg-darksurface dark:text-darkcolor cardbtn">
                            Source Code
                        </button>
                    </Link>

                    <button
                        onClick={handleClick}
                        className="rounded-md border border-solid border-lightcolor bg-lightcolor px-6 pt-2 pb-2 text-white dark:border-darkcolor dark:bg-darksurface dark:text-darkcolor cardbtn">
                        View
                    </button>

                </div>

            </div>

            {/* Back of the card */}

            <div
                data-aos="fade-down"
                data-aos-delay="500"
                style={{ borderRadius: "10px 0px 10px 10px" }}
                className="leading-[24px] text-[whitesmoke] items-center flex flex-col justify-center gap-6 bg-lightsurface dark:bg-darksurface portfolios">

                <h1 className="text-center text-2xl text-lightcolor dark:text-white">Portfolio</h1>

                <div className="flex gap-1">
                    <p className="m-auto h-6 rounded-lg bg-paragraphdarkcolor px-2 text-sm">React</p>
                    <p className="m-auto h-6 rounded-lg bg-paragraphdarkcolor px-2 text-sm">TypeScript</p>
                    <p className="m-auto h-6 rounded-lg bg-paragraphdarkcolor px-2 text-sm">Auth</p>
                    <p className="m-auto h-6 rounded-lg bg-paragraphdarkcolor px-2 text-sm">DB</p>
                </div>

                <div className="flex flex-col gap-2 text-lightcolor dark:text-white">
                    <p>Personal Portfolio, This project is built with React and Tailwind</p>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col">
                            <a>
                                <i className="fa-solid fa-circle-check" /> React
                            </a>
                            <a>
                                <i className="fa-solid fa-circle-check" /> TypeScript
                            </a>
                            <a>
                                <i className="fa-solid fa-circle-check" /> ES6
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <a>
                                <i className="fa-solid fa-circle-check" /> DB
                            </a>
                            <a>
                                <i className="fa-solid fa-circle-check" /> Open Source
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2">

                    <Link href="https://github.com/Chysev/Portfolio-Public-Repo">
                        <button
                            className="rounded-md border border-solid border-lightcolor bg-lightcolor px-6 pt-2 pb-2 text-white dark:border-darkcolor dark:bg-darksurface dark:text-darkcolor cardbtn">
                            Source Code
                        </button>
                    </Link>

                    <button
                        onClick={handleClick}
                        className="rounded-md border border-solid border-lightcolor bg-lightcolor px-6 pt-2 pb-2 text-white dark:border-darkcolor dark:bg-darksurface dark:text-darkcolor cardbtn">
                        View
                    </button>

                </div>

            </div>
        </ReactCardFlip>
    );
};

export default PortfolioCard;