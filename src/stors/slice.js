import { createSlice } from '@reduxjs/toolkit';
import Area from "./Area/Area";
import Canon from './Canon/Canon';
import Ship from './Ship/Ship';
import WraperShips from "./WraperShips/WraperShips"
import Gameover from "./Gameover/Gameover"

const initialState = {
    Area: Area.initialState,
    Canon: Canon.initialState,
    Ship: Ship.initialState,
    WraperShips: WraperShips.initialState,
    Gameover: Gameover.initialState
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
    copyDataSHip: Ship.reducers.copyDataSHip,

    setGameOver: Gameover.reducers.setGameOver,
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
    
    copyDataSHip,
    pushInDataShip,

    setGameOver,

} = Slice.actions;

export default Slice.reducer;