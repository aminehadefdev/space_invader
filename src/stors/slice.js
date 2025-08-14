import { createSlice } from '@reduxjs/toolkit';
import Area from "./Area/Area";
import Canon from './Canon/Canon';

const initialState = {
    Area: Area.initialState,
    Canon: Canon.initialState
};
const reducers = {
    setDirection: Canon.reducers.setDirection,
    moveCanonRight: Canon.reducers.moveCanonRight,
    moveCanonLeft: Canon.reducers.moveCanonLeft,
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
} = Slice.actions;

export default Slice.reducer;