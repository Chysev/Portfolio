// Components
import MERN from "../../MiniCards/Mern"
import MEVN from "../../MiniCards/Mevn"
import NEXT from "../../MiniCards/Next"
import EJS from "../../MiniCards/Ejs"

const LeftSection = () => {
    return (
        <div className="grid grid-cols-2 992max:grid-cols-1">
            <MERN />
            <MEVN />
            <NEXT />
            <EJS />
        </div>
    )
}

export default LeftSection;