import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Link from "next/link";
import MinecraftImg from "../../public/Minecraft.jpg"


const MinecraftCard = () => {

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

                <h1 className="text-center text-2xl text-lightcolor dark:text-white">Minecraft</h1>

                <div className="flex gap-1">
                    <p className="m-auto h-6 rounded-lg bg-paragraphdarkcolor px-2 text-sm">Html</p>
                    <p className="m-auto h-6 rounded-lg bg-paragraphdarkcolor px-2 text-sm">Css</p>
                    <p className="m-auto h-6 rounded-lg bg-paragraphdarkcolor px-2 text-sm">JavaScript</p>
                </div>

                <picture>
                    <img
                        style={{ borderRadius: "10px 0px 10px 10px" }}
                        src={MinecraftImg.src}
                        alt=""
                    />
                </picture>

                <div className="flex gap-2">

                    <Link href="https://github.com/Chysev/Minecraft_Website">
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

                <h1 className="text-center text-2xl text-lightcolor dark:text-white">Minecraft</h1>

                <div className="flex gap-1">
                    <p className="m-auto h-6 rounded-lg bg-paragraphdarkcolor px-2 text-sm">Html</p>
                    <p className="m-auto h-6 rounded-lg bg-paragraphdarkcolor px-2 text-sm">Css</p>
                    <p className="m-auto h-6 rounded-lg bg-paragraphdarkcolor px-2 text-sm">JavaScript</p>
                    <p className="m-auto h-6 rounded-lg bg-paragraphdarkcolor px-2 text-sm">DB</p>
                </div>

                <div className="flex flex-col gap-2 text-lightcolor dark:text-white">
                    <p>Minecraft Website, This project is built with HTML, CSS and JavaScript</p>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col">
                            <a>
                                <i className="fa-solid fa-circle-check" /> Html
                            </a>
                            <a>
                                <i className="fa-solid fa-circle-check" /> Css
                            </a>
                            <a>
                                <i className="fa-solid fa-circle-check" /> JavaScript
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <a>
                                <i className="fa-solid fa-circle-check" /> Good For Minecraft Server
                            </a>
                            <a>
                                <i className="fa-solid fa-circle-check" /> Open Source
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2">

                    <Link href="https://github.com/Chysev/Minecraft_Website">
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

export default MinecraftCard;