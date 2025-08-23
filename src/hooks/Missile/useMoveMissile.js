import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

function useMoveMissile(){
    const missiles = useSelector((state)=> state.App.Missile.missiles)
    const dispatch = useDispatch()

    useEffect(()=>{
        
    }, [])
}

export default useMoveMissile