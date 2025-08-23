const Missile = {
    initialState: {
        width: 10,
        height: 40,
        speed: 1,
        missiles: [],
    },

    reducers: {
        pushInMissile: (state)=>{
            state.Missile.missiles.push({
                x: state.Canon.x + state.Canon.height,
                y: state.Canon.y + (state.Canon.width / 2) - (state.Missile.width / 2)
            })
        },
        moveUp: (state)=>{
            state.Missile.missiles.map((item, index)=>{
                if(item.x > state.Area.height){
                    state.Missile.missiles.splice(index, 1)
                }
                item.x = item.x + state.Missile.speed
            })
        },
        
    }
};

export default Missile;