const initState = {count: 0, hasMore: true};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SHOW_MORE":
            return {
                count: state.count + 2,
                hasMore: true
            };
        case "TILL_THE_END":
            return {
                ...state,
                hasMore: false
            };
        case "RESET_SCROLL_COUNT":
            return initState;
        default:
            return state;
    }
};

export default reducer;