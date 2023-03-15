import Slider from 'react-slick'

// Component
import SlideCard from '../../Cards/SlideCard'

const RightSection = () => {

    const settings = {
        className: "max-w-[400px] 480max:max-w-[320px] 380max:max-w-[240px] mr-[20px] 992max:mr-[0]",
        dots: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    return (
        <div>
            <Slider {...settings} >
                <div>
                    <SlideCard link="https://www.facebook.com/Chysev/" icon="text-[50px] fa-brands fa-facebook text-darkcolor dark:text-white" brandname="Facebook" />
                </div>

                <div>
                    <SlideCard link="" icon="text-[50px] fa-brands fa-discord text-darkcolor dark:text-white" brandname="Discord" />
                </div>

                <div>
                    <SlideCard link="https://github.com/Chysev" icon="text-[50px] fa-brands fa-github text-darkcolor dark:text-white" brandname="GitHub" />
                </div>

                <div>
                    <SlideCard link="https://www.instagram.com/chysevvv_layda/" icon="text-[50px] fa-brands fa-discord text-darkcolor dark:text-white" brandname="Instagram" />
                </div>
            </Slider>
        </div>


    )
}

export default RightSection;