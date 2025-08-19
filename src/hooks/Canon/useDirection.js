import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { moveCanonRight, moveCanonLeft } from "../../stors/slice";

/**
 * ce hook sert à l'animation du canon
 */
function useDirection() {
    const store = useSelector(state => state.App)
    const dispatch = useDispatch()
    useEffect(() => {
        let animationFrame;
        const move = () => {
            if (store.Canon.direction === "right") {
                dispatch(moveCanonRight());
            }
            if (store.Canon.direction === "left") {
                dispatch(moveCanonLeft());
            }
            if (store.Canon.direction) {
                animationFrame = requestAnimationFrame(move);
            }
        }
        if (store.Canon.direction) {
            animationFrame = requestAnimationFrame(move);
        }

        return () => cancelAnimationFrame(animationFrame);
    }, [store.Canon.direction, dispatch])
}

export default useDirection