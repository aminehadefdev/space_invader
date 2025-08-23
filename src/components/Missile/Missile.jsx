import { useSelector } from "react-redux";
import "./Missile.css"

function Missile({ x, y }) {
    const missile = useSelector((state) => state.App.Missile)

    const style = {
        width: missile.width,
        height: missile.height,

        left: y,
        bottom: x
    }

    return (
        <div style={style} className="missile">

        </div>
    )
}

export default Missile