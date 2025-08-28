const Ship = {
    initialState: {
        width: 50,
        height: 50,
        x: 0,
        y: 0,
        dataShip: [],
    },

    reducers: {
        pushInDataShip: (state, action) => {
            state.Ship.dataShip.push(action.payload.data);
        },
    }
};

export default Ship;