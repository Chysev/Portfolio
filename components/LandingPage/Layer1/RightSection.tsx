import Layda from '../../../public/Layda3.jpg'

const RightSection = () => {
    return (
        <picture>
            <source
                srcSet={Layda.src}
                type="image/webp"
            />
            <img src={Layda.src}
                className="h-[400px] rounded-[_50px_5px_5px] max-h-[400px] w-[400px] max-w-[400px] 992max:mt-[3rem] 560max:h-[340px] 560max:w-[340px] 480max:max-h-[290px] 480max:max-w-[290px] 380max:max-h-[220px] 380max:max-w-[220px] 1300max:h-[350px] 1300max:w-[350px]"
                alt="" />
        </picture>
    )
}

export default RightSection;