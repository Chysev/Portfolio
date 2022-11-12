import Site from '../../../public/Site.png'

const RightSection = () => {
    return (
        <div className="mr-[10px] 992max:mr-0">
            <picture>
                <source
                    srcSet={Site.src}
                    type="image/webp"
                />
                <img
                    src={Site.src}
                    className="h-[200px] rounded-[_5px_50px_5px] max-h-[400px] w-[384px] max-w-[384px] 992max:mt-[3rem] 560max:h-[200px] 560max:w-[340px] 480max:max-h-[200px] 480max:max-w-[290px] 380max:max-h-[200px] 380max:max-w-[220px] 1300max:h-[200px] 1300max:w-[350px]"
                    alt="" />
            </picture>
        </div>
    )
}

export default RightSection