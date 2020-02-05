const initialState = {
    leftCatgories: [],
    rightCatgories: []
};

const searchReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case "leftCatgories":
            return {
                ...state,
                leftCatgories: action.state
            };
        case "rightCatgories":
            return {
                ...state,
                rightCatgories: action.state
            };
        default:
            return state;
    }
};

export default searchReducer;
