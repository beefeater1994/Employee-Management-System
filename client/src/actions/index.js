import axios from 'axios';
function requestStart() {
    return {
        type: 'USER_FETCH_START'
    };
}
function requestSuccess(response) {
    return {
        type: 'USER_FETCH_SUCCESS',
        data: response.data
    };
}
function requestFail(error) {
    return {
        type: 'USER_FETCH_FAIL',
        error
    };
}
export const getData = () => {
    return (dispatch, store) => {
        dispatch(requestStart());
        axios
            .get('/employees')
            .then(response => {
                dispatch(requestSuccess(response));
            })
            .catch(err => {
                dispatch(requestFail(err));
            });
    };
};

export const createData = (newUser) => {
    return (dispatch, store) => {
        //dispatch(requestStart());
        axios
            .post('/employees', newUser)
            .then(response => {
                //dispatch(requestSuccess(response));
            })
            .catch(err => {
                //dispatch(requestFail(err));
                console.log(err);
            });
    };
};

export const setAndUseSearch = (text) => {
    return {
        type: "SET_AND_USE_SEARCH",
        text
    }
};

export const resetSearch = () => {
    return {
        type: "RESET_SEARCH"
    }
};