import { createSlice } from '@reduxjs/toolkit';
import Area from "./Area/Area";
import Canon from './Canon/Canon';
import Ship from './Ship/Ship';
import WraperShips from "./WraperShips/WraperShips"

const initialState = {
    Area: Area.initialState,
    Canon: Canon.initialState,
    Ship: Ship.initialState,
    WraperShips: WraperShips.initialState
};
const reducers = {
    setDirection: Canon.reducers.setDirection,
    moveCanonRight: Canon.reducers.moveCanonRight,
    moveCanonLeft: Canon.reducers.moveCanonLeft,

    moveShipRight: Ship.reducers.moveShipRight,
    moveShipLeft: Ship.reducers.moveShipLeft,
    moveShipBottom: Ship.reducers.moveShipBottom,
    setShipDirection: Ship.reducers.setShipDirection,

    moveWrapperShipRight: WraperShips.reducers.moveWrapperShipRight,
    moveWrapperShipLeft: WraperShips.reducers.moveWrapperShipLeft,
    moveWrapperShipBottom: WraperShips.reducers.moveWrapperShipBottom,
    setWrapperShipDirection: WraperShips.reducers.setWrapperShipDirection


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

    moveShipBottom,
    moveShipLeft,
    moveShipRight,
    setShipDirection,

    moveWrapperShipRight,
    moveWrapperShipLeft,
    moveWrapperShipBottom,
    setWrapperShipDirection

} = Slice.actions;

export default Slice.reducer;