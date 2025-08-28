import { createSlice } from '@reduxjs/toolkit';
import Area from "./Area/Area";
import Canon from './Canon/Canon';
import Ship from './Ship/Ship';
import WraperShips from "./WraperShips/WraperShips"
import Gameover from "./Gameover/Gameover"
import Missile from './Missile/Missile';

const initialState = {
    Area: Area.initialState,
    Canon: Canon.initialState,
    Ship: Ship.initialState,
    WraperShips: WraperShips.initialState,
    Gameover: Gameover.initialState,
    Missile: Missile.initialState
};
const reducers = {
    setDirection: Canon.reducers.setDirection,
    moveCanonRight: Canon.reducers.moveCanonRight,
    moveCanonLeft: Canon.reducers.moveCanonLeft,

    moveWrapperShipRight: WraperShips.reducers.moveWrapperShipRight,
    moveWrapperShipLeft: WraperShips.reducers.moveWrapperShipLeft,
    moveWrapperShipBottom: WraperShips.reducers.moveWrapperShipBottom,
    setWrapperShipDirection: WraperShips.reducers.setWrapperShipDirection,
    setWraperShipsWidth: WraperShips.reducers.setWraperShipsWidth,
    setWraperShipsHeight: WraperShips.reducers.setWraperShipsHeight,

    pushInDataShip: Ship.reducers.pushInDataShip,

    setGameOver: Gameover.reducers.setGameOver,

    pushInMissile: Missile.reducers.pushInMissile,
    moveUp: Missile.reducers.moveUp,
}

const Slice = createSlice({
    name: 'App',
    initialState,
    reducers
});

export const {
    setDirection,
    moveCanonRight,
    moveCanonLeft,

    moveWrapperShipRight,
    moveWrapperShipLeft,
    moveWrapperShipBottom,
    setWrapperShipDirection,
    setWraperShipsWidth,
    setWraperShipsHeight,
    
    pushInDataShip,

    setGameOver,

    pushInMissile,
    moveUp,
} = Slice.actions;

export default Slice.reducer;