
import { useSelector } from "react-redux"
import "./Ship.css"

function Ship({x, y}) {
    const ship = useSelector(state=>state.App.Ship)
    const style = {
        width: ship.width,
        height: ship.height,
        left: y,
        top: x,
    }
    return (
        <div className="Ship" style={style}>

        </div>
    )
}

export default Ship