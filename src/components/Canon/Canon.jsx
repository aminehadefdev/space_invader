import { useSelector } from "react-redux"

import "./Canon.css"
function Canon() {
    const canon = useSelector((state) => state.App.Canon)

    const style = {
        width: canon.width,
        height: canon.height,
        bottom: canon.x,
        left: canon.y
    }
    return (
        <div className="Canon" style={style}>

        </div>
    )
}

export default Canon