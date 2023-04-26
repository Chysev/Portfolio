import { Link, animateScroll as scroll } from "react-scroll";

const HiredcvButton = () => {
    return (
        <div className="my-4 mx-0 flex items-center gap-8">

            <Link to="Email" smooth={true} duration={600}>
                <button className="inline-block rounded-md border border-solid border-lightcolor hover:opacity-[0.8] px-6 py-[0.1rem] text-white dark:border-darkcolor dark:bg-darksurface dark:text-darkcolor">
                    Hire Me
                </button>
            </Link>

            <a href="../../public/_RESUME-LAYDA.pdf" className="cursor-pointer text-center hover:opacity-[0.8] text-lightcolor underline dark:text-darkcolor">
                Download Resume
            </a>
        </div>
    );
};

export default HiredcvButton