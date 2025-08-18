const WraperShips = {
    initialState: {
        width: 400,
        height: 200,
        x: 0,
        y: 0,
        direction: "right",
        speed: 1,
        diposition: [
            ["A", "A", "", "A", "A", "A",],
            ["A", "A", "A", "A", "A", "A",],
            ["A", "A", "A", "", "A", "A",],
        ],
        dataShip: [],
        counter: 0,
        gameover: false,
        vertualData: {
            vertualDataShip: []
        }
    },

    reducers: {
        copyDataSHip: (state) => {
            state.WraperShips.vertualData.vertualDataShip = [...state.WraperShips.dataShip]
        },
        setWraperShipsWidth: (state, action) => {
            state.WraperShips.width = action.payload.width
        },
        setWraperShipsHeight: (state, action) => {
            state.WraperShips.height = action.payload.height
        },
        pushInDataShip: (state, action) => {
            state.WraperShips.dataShip.push(action.payload.data);
        },
        moveWrapperShipRight: (state) => {
            if (state.WraperShips.y < state.Area.width - state.WraperShips.width) {
                state.WraperShips.y = state.WraperShips.y + state.WraperShips.speed
            } else {
                state.WraperShips.counter = state.WraperShips.counter + 30
                state.WraperShips.direction = "bottom"
            }
            state.WraperShips.vertualData.vertualDataShip.map((item) => {
                item.y = item.y + state.WraperShips.speed
            })
        },
        moveWrapperShipLeft: (state) => {
            if (state.WraperShips.y >= 0) {
                state.WraperShips.y = state.WraperShips.y - state.WraperShips.speed
            } else {
                state.WraperShips.counter = state.WraperShips.counter + 30
                state.WraperShips.direction = "bottom"
            }
            state.WraperShips.vertualData.vertualDataShip.map((item) => {
                item.y = item.y - state.WraperShips.speed
            })
        },
        moveWrapperShipBottom: (state) => {
            if (state.WraperShips.x <= state.WraperShips.counter) {
                state.WraperShips.x = state.WraperShips.x + state.WraperShips.speed
            } else {
                if (state.WraperShips.y <= 0) {
                    state.WraperShips.direction = 'right'
                } else {
                    state.WraperShips.direction = 'left'
                }
            }
            state.WraperShips.vertualData.vertualDataShip.map((item) => {
                item.x = item.x + state.WraperShips.speed
            })
        },
        setWrapperShipDirection: (state, action) => {
            state.WraperShips.direction = action.payload.direction
        },

    }
};

export default WraperShips;