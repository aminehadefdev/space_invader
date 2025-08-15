const WraperShips = {
    initialState: {
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        direction: "right",
        speed: 1,
        diposition: [
            ["A", "A", "A", "A", "A", "A",],
            ["A", "A", "A", "A", "A", "A",],
            ["A", "A", "A", "A", "A", "A",],
        ]
    },

    reducers: {
        moveWrapperShipRight: (state) => {  
            if(state.WraperShips.y < state.Area.width - state.WraperShips.width){
                state.WraperShips.y = state.WraperShips.y + state.WraperShips.speed
            }        
        },
        moveWrapperShipLeft: (state) => {
            state.WraperShips.y = state.WraperShips.y - state.WraperShips.speed
        },
        moveWrapperShipBottom: (state) => {
            state.WraperShips.x = state.WraperShips.x - state.WraperShips.speed
        },
        setWrapperShipDirection: (state, action) => {
            state.WraperShips.direction = action.payload.direction
        },
    }
};

export default WraperShips;