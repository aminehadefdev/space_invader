const Ship = {
    initialState: {
        width: 50,
        height: 50,
        x: 0,
        y: 0,
        direction: null,
        speed: 10
    },

    reducers: {
        moveShipRight: (state) => {
            state.Ship.y = state.Ship.y + state.Ship.speed
        },
        moveShipLeft: (state) => {
            state.Ship.y = state.Ship.y - state.Ship.speed
        },
        moveShipBottom: (state) => {
            state.Ship.x = state.Ship.x - state.Ship.speed
        },
        setShipDirection: (state, action) => {
            state.Ship.direction = action.payload.direction
        }
    }
};

export default Ship;