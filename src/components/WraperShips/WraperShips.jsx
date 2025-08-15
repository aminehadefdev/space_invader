import { useSelector, useDispatch } from "react-redux"
import "./WraperShips.css"
import { useEffect } from "react"
import { moveWrapperShipRight, moveWrapperShipLeft } from '../../stors/slice';

//import Ship from "../Ship/Ship"


function WraperShips() {
    const store = useSelector(state => state.App)    
    const dispatch = useDispatch()
    useEffect(() => {
        let animationFrame;
        const move = () => {
            if (store.WraperShips.direction === "right") {
                dispatch(moveWrapperShipRight());
            }
            if (store.WraperShips.direction === "left") {
                dispatch(moveWrapperShipLeft());
            }
            if (store.WraperShips.direction) {
                animationFrame = requestAnimationFrame(move);
            }
        }
        if (store.WraperShips.direction) {
            animationFrame = requestAnimationFrame(move);
        }

        return () => cancelAnimationFrame(animationFrame);
    }, [store.WraperShips.direction, dispatch])
    
    const style = {
        width: store.WraperShips.width,
        height: store.WraperShips.height,
        left: store.WraperShips.y
    }

    return (
        <div style={style} className='wraperShips'>

        </div>
    )
}

export default WraperShips