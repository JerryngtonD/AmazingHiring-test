import {LOAD_PERSONAL_DETAILS, SUCCESS, CHANGING_CURRENT_BUTTON} from "../constants";

const defaultState = {
    numberOfPage: 0,
    currentPage: 1,
    profilesPerPage: 15
};

export default (pagination=defaultState, action) => {
    const {type, payload} = action;

    switch (type) {

        case LOAD_PERSONAL_DETAILS + SUCCESS:
            return {
                ...defaultState,
                numberOfPage: Math.ceil(payload.data.profiles.length / defaultState.profilesPerPage)
            };

        case CHANGING_CURRENT_BUTTON:
            return {
                ...pagination,
                currentPage: payload.newButtonNumber
            }
    }

    return pagination;
}
