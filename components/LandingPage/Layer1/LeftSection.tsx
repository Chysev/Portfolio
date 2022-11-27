// Components
import Line from '../../Icons/Line'
import HiredcvButton from '../../Buttons/HiredcvButton'

// data
import datas from "../../../data/herodata.json"

const LeftSection = () => {

    return (
        <div className="leading-[38px]">

            <div className="flex items-center gap-2">
                <Line />
                {
                    datas.map((datas, index) => (
                        <p
                            key={index}
                            className="flex items-center text-xl 640max:text-lg 380max:text-sm">
                            {datas.content1}
                        </p>
                    ))
                }
            </div>

            {
                datas.map((datas, index) => (
                    <h1
                        key={index}
                        className="my-[17.4px] mx-auto text-4xl text-lightcolor dark:text-[white] 768max:text-3xl 380max:text-2xl">
                        {datas.content2}
                    </h1>
                ))
            }

            {
                datas.map((datas, index) => (
                    <h2
                        key={index}
                        className="my-[0.7rem] mx-auto text-xl text-lightcolor dark:text-darkcolor 768max:text-lg 380max:text-base">
                        {datas.content3}
                    </h2>
                ))
            }


            <h2 className="my-[1rem] leading-[24px] mx-auto max-w-[600px] text-lightcolor dark:text-paragraphdarkcolor 640max:text-base 380max:text-sm 1300max:max-w-[520px]">
                <span className="text-lightcolor dark:text-darkcolor">
                    MERN, MEVN, MEAN | </span>
                Get ready for your next project!
            </h2>

            {
                datas.map((datas, index) => (
                    <h2
                        key={index}
                        className="my-[0.8rem] leading-[27px] mx-auto max-w-[580px] text-lightcolor dark:text-paragraphdarkcolor 640max:text-base 380max:text-sm 1300max:max-w-[520px]">
                        {datas.content4}
                    </h2>

                ))
            }

            <div className='my-[2rem]'>
                <HiredcvButton />
            </div>

        </div>
    )
}

export default LeftSection;