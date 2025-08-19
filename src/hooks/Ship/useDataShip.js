import { pushInDataShip, copyDataSHip } from '../../stors/slice';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

/**
 * Ce hook s'occupe de calculer les positions des vaisseaux
 */
function useDataShip() {
    const dispatch = useDispatch()
    const wraperShips = useSelector(state => state.App.WraperShips)
    useEffect(() => {
        var posX = 0;
        var posY = 0;
        wraperShips.diposition.map((item) => {
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