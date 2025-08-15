import { useSelector, useDispatch } from "react-redux"
import { setWraperShipsWidth, setWraperShipsHeight } from '../../stors/slice';

import Ship from "../Ship/Ship"

import "./WraperShips.css"


function WraperShips() {
    const wraperShips = useSelector(state => state.App.WraperShips)
    const dispatch = useDispatch()
    const ship = useSelector(state => state.App.Ship)

    dispatch(setWraperShipsWidth({width: (wraperShips.diposition[0].length * ship.width + (wraperShips.diposition[0].length - 1) * 30) }))
    dispatch(setWraperShipsHeight({height: (wraperShips.diposition.length * ship.width + (wraperShips.diposition.length - 1) * 30) }))
    const style = {
        width: wraperShips.width,
        height: wraperShips.height,
        left: wraperShips.y,
        top: wraperShips.x
    }
    return (
        <div style={style} className='wraperShips'>
            {
                wraperShips.dataShip.map(item => <Ship x={item.x} y={item.y} />)
            }
        </div>
    )
}

export default WraperShips