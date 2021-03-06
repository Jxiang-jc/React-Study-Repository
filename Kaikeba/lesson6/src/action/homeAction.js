import { getHomeCarouselRequest, getMallNavRequest } from "../services/home";

export const getHomeCarousel = payload => dispatch => {
    getHomeCarouselRequest().then((res = {}) => {
        dispatch({
            type: "homeCarousel",
            state: res.data
        });
    });
};

export const getMallNav = payload => dispatch => {
    getMallNavRequest().then((res = {}) => {
        dispatch({
            type: "mallNav",
            state: res.data
        });
    });
};
