import {LOAD_PERSONAL_DETAILS, START, SUCCESS, FAIL, SORTING_PERSONAL_DETAILS} from "../constants";

const defaultState = {
    loading: false,
    loaded: false,
    data: [],
    isFirstLoading: true,
    sortedField: null
};

export default (profiles=defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_PERSONAL_DETAILS + START:
            return {
                ...defaultState,
                loading: true
            };

        case LOAD_PERSONAL_DETAILS + SUCCESS:
            return {
                loading: false,
                loaded: true,
                data: [...payload.data.profiles],
                isFirstLoading: false
            };

        case LOAD_PERSONAL_DETAILS + FAIL:
            return {
                loading: false,
                loaded: false,
                error: payload.error,
                isFirstLoading: true
            };

        case SORTING_PERSONAL_DETAILS:
            return {
                ...profiles,
                sortedField: payload.sortedByField,
                data: [...payload.sortedPersonalDetails]
            }
    }
    return profiles;
}
