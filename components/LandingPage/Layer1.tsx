import { motion } from 'framer-motion'

// Components
import LeftSection from "./Layer1/LeftSection"
import RightSection from "./Layer1/RightSection"


const Layer1 = () => {
    return (
        <div className="flex">
            <motion.div
                animate={{ y: [-200, 0, 0] }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="m-auto mt-[11rem] flex w-[1280px] max-w-[1300px] items-center justify-between py-[auto] px-[20px] 992max:mt-[10rem] 992max:flex 992max:flex-col">
                <LeftSection />
                <RightSection />
            </motion.div>
        </div>
    )
}

export default Layer1