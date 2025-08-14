import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setDirection } from '../../stors/slice';



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