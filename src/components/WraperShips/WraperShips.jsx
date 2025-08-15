import { useSelector } from "react-redux"
import "./WraperShips.css"

//import Ship from "../Ship/Ship"


function WraperShips() {
    const wraperShips = useSelector(state => state.App.WraperShips)
    const style = {
        width: wraperShips.width,
        height: wraperShips.height,
        left: wraperShips.y,
        top: wraperShips.x
    }

    return (
        <div style={style} className='wraperShips'>

        </div>
    )
}

export default WraperShips