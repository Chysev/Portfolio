// Components
import MERN from "../../MiniCards/Mern"
import MEVN from "../../MiniCards/Mevn"
import MEAN from "../../MiniCards/Mean"
import EJS from "../../MiniCards/Ejs"
import Discord from "../../MiniCards/Discord"

const LeftSection = () => {
    return (
        <div className="grid grid-cols-2 992max:grid-cols-1">
            <MERN />
            <MEVN />
            <Discord />
            <div className="grid">
                <MEAN />
                <EJS />
            </div>
        </div>
    )
}

export default LeftSection;