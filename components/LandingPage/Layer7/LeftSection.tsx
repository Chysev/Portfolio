import Link from "next/link";

// Component
import Line from "../../Icons/Line";

const LeftSection = () => {

    return (
        <>
            <div className="-mx-3 mb-6 flex flex-col gap-7 992max:mx-auto 992max:mb-auto">
                <div
                    className="flex flex-col gap-3">

                    <h1 className="flex items-center gap-2 text-xl">
                        <Line /> Contact
                    </h1>

                    <h2 className="text-3xl text-lightcolor dark:text-white">Contact me</h2>

                </div>

                <p className="flex max-w-[400px] gap-2 text-lightcolor dark:text-paragraphdarkcolor 640max:text-base  380max:text-sm">
                    <i className="fa-solid fa-angle-right text-2xl text-lightcolor dark:text-darkcolor" />
                    Ready for your next project? Get in touch with me to start a discussion.
                </p>

                <div className="flex flex-col gap-2">
                    <a className="flex flex-row items-center gap-4 text-lightcolor dark:text-paragraphdarkcolor 640max:text-base 380max:text-sm">
                        <i className="fa-solid fa-location-dot text-2xl text-lightcolor dark:text-darkcolor" />
                        International City, Dubai - UAE
                    </a>

                    <a className="flex cursor-pointer flex-row items-center gap-3 text-lightcolor dark:text-paragraphdarkcolor 640max:text-base 380max:text-sm">
                        <i className="fa-solid fa-envelope text-2xl text-lightcolor dark:text-darkcolor" />
                        Johnlayda92@gmail.com
                    </a>

                    <a className="flex flex-row items-center gap-2 text-lightcolor dark:text-paragraphdarkcolor 640max:text-base 380max:text-sm">
                        <i className="fa-solid fa-phone text-2xl text-lightcolor dark:text-darkcolor" />
                        +971 56 578 3459
                    </a>
                </div>

                <p className="flex max-w-[400px] gap-2 text-lightcolor dark:text-paragraphdarkcolor 640max:text-base  380max:text-sm">
                    <i className="fa-solid fa-angle-right text-2xl text-lightcolor dark:text-darkcolor" />
                    Send me an Email via this Portfolio or Message me on Facebook Messenger, Instagram or Discord.
                </p>



            </div>
        </>
    );
};

export default LeftSection;