import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setDirection } from '../../stors/slice';


/**
 * Ce hook sert à écouter les événements des flèches directionnelles
 * bug:
 *    Quand je reste apuyer longtemps sur la droite ou la gauche et que je change brusquement de direction, une latence se crée.
 **/
function useEventsKey() {
    const dispatch = useDispatch()
    const handleKeyUp = () => {
        dispatch(setDirection({ direction: null }));
    }
    const handleKeyDown = (e) => {
        switch (e.key) {
            case 'ArrowRight':
                dispatch(setDirection({ direction: "right" }));
                break

            case 'ArrowLeft':
                dispatch(setDirection({ direction: "left" }));
                break
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        }
    }, [])
}

export default useEventsKey