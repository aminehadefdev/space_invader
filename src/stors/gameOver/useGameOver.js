import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setGameOver } from "../slice"

function useGameOver(){
    const store = useSelector(state => state.App)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(store.WraperShips.x + store.WraperShips.height >= (store.Area.height - store.Ship.height)){
            dispatch(setGameOver())
        }
    }, [store.WraperShips.x])
    
}

export default useGameOver