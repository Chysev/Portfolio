import Slider from 'react-slick'

// Components
import FacebookCard from "../../Cards/FacebookCard"
import DiscordCard from "../../Cards/DiscordCard"
import GitHubCard from "../../Cards/GitHubCard"
import InstagramCard from "../../Cards/InstagramCard"

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
                    <FacebookCard />
                </div>

                <div>
                    <DiscordCard />
                </div>

                <div>
                    <GitHubCard />
                </div>

                <div>
                    <InstagramCard />
                </div>
            </Slider>
        </div>


    )
}

export default RightSection;