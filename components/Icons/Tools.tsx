// Datas
import datas from '../../data/checkdata3.json'

const Tools = () => {
    return (
        <div className="grid grid-cols-5 992max:grid-cols-4 560max:grid-cols-3 380max:grid-cols-2 gap-2">
            {
                datas.map((datas) => (

                    <div key={datas.id} className="flex items-center gap-2">
                        <i className="fa-regular fa-circle-check"></i>
                        <p className="text-lightcolor dark:text-[white]">{datas.check}</p>
                    </div>

                ))
            }
        </div>
    )
}

export default Tools