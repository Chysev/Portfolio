import { Link, animateScroll as scroll } from "react-scroll";

// Components
import Line from "../../Icons/Line"
import Button from "../../Buttons/Button"

// datas
import datas from '../../../data/herodata.json'
import datas2 from '../../../data/checkdata.json'

const LeftSection = () => {
    return (
        <div
            className="pl-[10px] 992max:pl-[0]">
            <div className="flex items-center gap-3">
                <Line />
                {
                    datas.map((datas, index) => (

                        <p
                            key={index}
                            className="text-[20px]">{datas.content8}</p>
                    ))
                }

            </div>

            {
                datas.map((datas, index) => (

                    <h1
                        key={index}
                        className="text-[28px] text-lightcolor dark:text-[white] 768max:text-2xl">{datas.content9}</h1>
                ))
            }

            <div>

                {
                    datas.map((datas, index) => (

                        <p
                            key={index}
                            className="my-[18px] 380px:w-[300px] max-w-[637px] text-justify leading-[27px] text-lightcolor dark:text-paragraphdarkcolor 992max:w-[520px] 640max:text-base 560max:w-[auto] 380max:text-sm">
                            {datas.content10}
                        </p>
                    ))
                }


                <div className="grid gap-[0.5rem] grid-cols-2">

                    {
                        datas2.map((datas2) => (

                            <div
                                key={datas2.id}
                                className="flex items-center gap-2">
                                <i className="fa-regular fa-circle-check"></i>
                                <p className="text-lightcolor dark:text-[white]">{datas2.content}</p>
                            </div>
                        ))
                    }

                </div>

                <div className="my-[18px] flex gap-2 380max:flex-col">


                    <Button>
                        <Link to="Lang&Tools" smooth={true} duration={600}>
                            Language and Tools
                        </Link>
                    </Button>



                    <Button>
                        <Link to="Projects" smooth={true} duration={600}>
                            Projects
                        </Link>
                    </Button>


                </div>

            </div>

        </div>
    )
}

export default LeftSection;