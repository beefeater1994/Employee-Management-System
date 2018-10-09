const initState = { isFetching: false, data: [], err: null};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ALL_EMPLOYEES_START':
            return {
                ...state,
                isFetching: true
            };
        case 'GET_ALL_EMPLOYEES_FAIL':
            return {
                ...state,
                error: action.error,
                isFetching: false
            };
        case 'GET_ALL_EMPLOYEES_SUCCESS':
            return {
                ...state,
                isFetching: false,
                err: null,
                data: action.data
            };
        case "ADD_EMPLOYEE_START":
            return {
                ...state,
                isFetching: true
            };
        case "ADD_EMPLOYEE_FAIL":
            return {
                ...state,
                error: action.error,
                isFetching: false
            };
        case "ADD_EMPLOYEE_SUCCESS":
            return {
                ...state,
                isFetching: false,
                response: action.response
            };
        case "SET_EMPLOYEE_TO_EDIT":
            return {
                ...state,
                employee: action.employee
            };
        case "RESET_EMPLOYEE_TO_EDIT":
            return {
                ...state,
                employee: ""
            };
        case "EDIT_EMPLOYEE_START":
            return {
                ...state,
                isFetching: true
            };
        case "EDIT_EMPLOYEE_FAIL":
            return {
                ...state,
                error: action.error,
                isFetching: false
            };
        case "EDIT_EMPLOYEE_SUCCESS":
            return {
                ...state,
                isFetching: false,
                response: action.response
            };
        case "DELETE_EMPLOYEE_FAIL":
            return {
                ...state,
                error: action.error
            };
        case "DELETE_EMPLOYEE_SUCCESS":
            return {
                ...state,
                response: action.response
            };
        default:
            return state;
    }
};

export default reducer;