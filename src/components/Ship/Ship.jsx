
import { useSelector } from "react-redux"
import "./Ship.css"

function Ship() {
    const ship = useSelector(state=>state.App.Ship)
    const style = {
        width: ship.width,
        height: ship.height
    }
    return (
        <div className="Ship" style={style}>

        </div>
    )
}

export default Ship