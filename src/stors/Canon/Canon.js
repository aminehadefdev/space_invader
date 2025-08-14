const Canon = {
    initialState: {
        width: 50,
        height: 50,
        x: 0,
        y: 0,
        direction: null,
        speed: 10
    },

    reducers: {
        moveCanonRight: (state)=>{
            if(state.Canon.y < state.Area.width - state.Canon.width){
                state.Canon.y = state.Canon.y + state.Canon.speed
            }
        },
        moveCanonLeft: (state)=>{
            if (state.Canon.y > 0) {
                state.Canon.y = state.Canon.y - state.Canon.speed
            }
        },
        setDirection: (state, action) => {
            state.Canon.direction = action.payload.direction        
        }
    }
};

export default Canon;