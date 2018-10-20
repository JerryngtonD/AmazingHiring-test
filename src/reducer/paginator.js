import {LOAD_PERSONAL_DETAILS, SUCCESS, CHANGING_CURRENT_BUTTON, CHANGING_NUMBER_PROFILES_ON_PAGE} from "../constants";

const defaultState = {
    numberOfPage: 0,
    currentPage: 1,
    profilesPerPage: 15,
    numberOfProfiles: 0,
    chosenProfilesPerPage: 15
};

export default (pagination=defaultState, action) => {
    const {type, payload} = action;

    switch (type) {

        case LOAD_PERSONAL_DETAILS + SUCCESS:
            return {
                ...defaultState,
                numberOfProfiles: payload.data.profiles.length,
                numberOfPage: Math.ceil(payload.data.profiles.length / defaultState.chosenProfilesPerPage)
            };

        case CHANGING_CURRENT_BUTTON:
            return {
                ...pagination,
                currentPage: payload.newButtonNumber
            };

        case CHANGING_NUMBER_PROFILES_ON_PAGE:
            return {
                ...pagination,
                chosenProfilesPerPage: payload.newProfilesOnPage,
                numberOfPage: payload.newNumberOfPage
            };

    }

    return pagination;
}
