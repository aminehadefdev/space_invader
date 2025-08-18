const Gameover = {
    initialState: {
        gameover: false,
    },

    reducers: {
        setGameOver: (state) => {
            state.Gameover.gameover = true
        },
    }
};

export default Gameover;