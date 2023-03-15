import Link from "next/link";

const SlideCard = (props) => {
    return (
        <div className="rounded-[10px_0px_10px_10px] flex leading-[24px] items-center  my-[0.8rem] mx-[0.5rem] gap-[3rem] bg-lightsurface py-[35px] px-[50px] dark:bg-darksurface 768max:py-[30px] 992max:px-[100px] 640max:py-[30px] 640max:px-[80px] 380max:py-[20px] 380max:px-[20px]">
            <i className={props.icon} />
            <Link href={props.link}>
                <h1 className="text-[16px] flex leading-6 text-lightcolor dark:text-white underline">{props.brandname}</h1>
            </Link>
        </div>
    );
};

export default SlideCard;