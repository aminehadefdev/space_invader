import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { moveUp } from "../../stors/slice";


function useMoveMissile() {
    const missile = useSelector((state) => state.App.Missile)
    const dispatch = useDispatch()


    useEffect(() => {
        let animationFrame;
        const move = () => {
            dispatch(moveUp())
            animationFrame = requestAnimationFrame(move);
        }
        animationFrame = requestAnimationFrame(move);
        return () => cancelAnimationFrame(animationFrame);
    }, [dispatch])
}

export default useMoveMissile