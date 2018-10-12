const initState = "table";

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "TABLE_MODE":
            return "table";
        case "SCROLL_MODE":
            return "scroll";
        default:
            return state;
    }
};

export default reducer;