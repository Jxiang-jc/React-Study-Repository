import { getLeftGetgoriesRequest, getRightCatgoriesRequest } from "../services/search";

export const getLeftCatgories = payload => dispatch => {
    getLeftGetgoriesRequest().then((res = {}) => {
        dispatch({
            type: "leftCatgories",
            state: res.data
        });
    });
};

export const getRightCatgories = payload => dispatch => {
    getRightCatgoriesRequest().then((res = {}) => {
        dispatch({
            type: "rightCatgories",
            state: res.data && (Math.random() > 0.5 ? res.data : res.data.reverse())
        });
    });
};
