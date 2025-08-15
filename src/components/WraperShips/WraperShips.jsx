import { useSelector, useDispatch } from "react-redux"
import "./WraperShips.css"
import { useEffect } from "react"
import { moveWrapperShipRight, moveWrapperShipLeft, moveWrapperShipBottom } from '../../stors/slice';

//import Ship from "../Ship/Ship"


function WraperShips() {
    const store = useSelector(state => state.App)
    const dispatch = useDispatch()
    useEffect(() => {
        let animationFrame;
        const move = () => {
            switch (store.WraperShips.direction) {
                case "right":
                    dispatch(moveWrapperShipRight());
                    break;
                case "left":
                    dispatch(moveWrapperShipLeft());
                    break;
                case 'bottom':
                    dispatch(moveWrapperShipBottom());
                    break;
            }
            animationFrame = requestAnimationFrame(move);
        }
        if (store.WraperShips.direction) {
            animationFrame = requestAnimationFrame(move);
        }

        return () => cancelAnimationFrame(animationFrame);
    }, [store.WraperShips.direction, dispatch])

    const style = {
        width: store.WraperShips.width,
        height: store.WraperShips.height,
        left: store.WraperShips.y,
        top: store.WraperShips.x
    }

    return (
        <div style={style} className='wraperShips'>

        </div>
    )
}

export default WraperShips