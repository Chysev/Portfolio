// Component 
import Line from '../../Icons/Line'

// data
import datas from '../../../data/herodata.json'

const RightSection = () => {
    return (
        <div className="flex flex-col gap-1">
            <div>
                <div className='flex mb-[12px] items-center gap-3'>
                    <Line />
                    {
                        datas.map((datas, index) => (
                            <p
                                key={index}
                                className='text-[20px]'>{datas.content5}</p>
                        ))
                    }
                </div>
                <h1 className="text-[28px] text-lightcolor dark:text-[white] 768max:text-2xl">
                    Better{" "}
                    <span className="text-lightcolor dark:text-paragraphdarkcolor text-[28px] font-semibold">
                        UI<span className="text-[black] dark:text-[white] font-light">,</span>
                    </span>
                </h1>

                {
                    datas.map((datas, index) => (
                        <h2
                            key={index}
                            className="text-[28px] text-lightcolor dark:text-[white] 768max:text-2xl">
                            {datas.content6}
                        </h2>
                    ))
                }
            </div>

            {
                datas.map((datas, index) => (
                    <p
                        key={index}
                        className="380px:w-[300px] max-w-[637px] pr-[10px] 992max:pr-[0] text-justify leading-[27px] text-lightcolor dark:text-paragraphdarkcolor 992max:w-[520px] 640max:text-base 560max:w-[auto] 380max:text-sm">
                        {datas.content7}
                    </p>
                ))
            }


        </div>
    )
}

export default RightSection;