import Code from '../../../public/code.jpg'

const LeftSection = () => {
    return (
        <picture>
            <source
                srcSet={Code.src}
                type="image/webp"
            />
            <img src={Code.src}
                className="h-[200px] rounded-[_50px_5px_20px] max-h-[400px] w-[384px] max-w-[384px] 992max:mt-[3rem] 560max:h-[200px] 560max:w-[340px] 480max:max-h-[200px] 480max:max-w-[290px] 380max:max-h-[200px] 380max:max-w-[220px] 1300max:h-[200px] 1300max:w-[350px]"
                alt="" />
        </picture>
    )
}

export default LeftSection;

