// Components
import MERN from "../../MiniCards/Mern"
import MEVN from "../../MiniCards/Mevn"
import MEAN from "../../MiniCards/Mean"
import EJS from "../../MiniCards/Ejs"

const LeftSection = () => {
    return (
        <div className="grid grid-cols-2 992max:grid-cols-1">
            <MERN />
            <MEVN />
            <MEAN />
            <EJS />
        </div>
    )
}

export default LeftSection;