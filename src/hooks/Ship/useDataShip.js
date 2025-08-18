import { pushInDataShip, copyDataSHip } from '../../stors/slice';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

function useDataShip() {
    const dispatch = useDispatch()
    const store = useSelector(state => state.App)
    useEffect(() => {
        var posX = 0;
        var posY = 0;
        store.WraperShips.diposition.map((item) => {
            item.map((it) => {
                if (it === "A") {
                    dispatch(pushInDataShip({
                        data: {
                            x: posX,
                            y: posY,
                        }
                    }))
                }
                posY = posY + 80
            })
            posY = 0
            posX = posX + 80
        })
        dispatch(copyDataSHip())

    }, [])
}

export default useDataShip