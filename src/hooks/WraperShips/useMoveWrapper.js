import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { moveWrapperShipRight, moveWrapperShipLeft, moveWrapperShipBottom } from '../../stors/slice';


function useMoveWrapper(){
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
        if (store.WraperShips.direction && store.WraperShips.gameover === false) {
            animationFrame = requestAnimationFrame(move);
        }

        return () => cancelAnimationFrame(animationFrame);
    }, [store.WraperShips.direction, dispatch])
}

export default useMoveWrapper