const Ship = {
    initialState: {
        width: 50,
        height: 50,
        x: 0,
        y: 0,
        vertualDataShip: [],
        dataShip: [],
    },

    reducers: {
        copyDataSHip: (state) => {
            state.Ship.vertualDataShip = [...state.Ship.dataShip]
        },
        pushInDataShip: (state, action) => {
            state.Ship.dataShip.push(action.payload.data);
        },
    }
};

export default Ship;