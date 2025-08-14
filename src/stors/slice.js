import { createSlice } from '@reduxjs/toolkit';
import Area from "./Area/Area";
import Canon from './Canon/Canon';
import Ship from './Ship/Ship';

const initialState = {
    Area: Area.initialState,
    Canon: Canon.initialState,
    Ship: Ship.initialState,
};
const reducers = {
    setDirection: Canon.reducers.setDirection,
    moveCanonRight: Canon.reducers.moveCanonRight,
    moveCanonLeft: Canon.reducers.moveCanonLeft,

    moveShipRight: Ship.reducers.moveShipRight,
    moveShipLeft: Ship.reducers.moveShipLeft,
    moveShipBottom: Ship.reducers.moveShipBottom,
    setShipDirection: Ship.reducers.setShipDirection
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

} = Slice.actions;

export default Slice.reducer;