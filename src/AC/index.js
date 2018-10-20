import {LOAD_PERSONAL_DETAILS, START, SUCCESS, FAIL, CHANGING_CURRENT_BUTTON, CHANGING_NUMBER_PROFILES_ON_PAGE, SORTING_PERSONAL_DETAILS} from '../constants';
import axios from 'axios';

export function fetchPersonalDetails() {
    return (dispatch) => {
        dispatch({
            type: LOAD_PERSONAL_DETAILS + START,
        });
        setTimeout(() => {
            return axios.get("/api/personal_details")
                .then(({ data }) => {
                    dispatch({
                        type: LOAD_PERSONAL_DETAILS + SUCCESS,
                        payload: {
                            data
                        }
                    });
                })
                .catch(error => dispatch({
                    type: LOAD_PERSONAL_DETAILS + FAIL,
                    payload: {
                        error
                    }
                }));
        }, 2000)

    }
}

export function changeCurrentButton(newButtonNumber) {
    return {
        type: CHANGING_CURRENT_BUTTON,
        payload: {
            newButtonNumber
        }
    }
}

export function changeNumberProfilesOnPage(newProfilesOnPage, newNumberOfPage) {
    return {
        type: CHANGING_NUMBER_PROFILES_ON_PAGE,
        payload: {
            newProfilesOnPage,
            newNumberOfPage
        }
    }
}

export function sortProfilesOnPage(sortedPersonalDetails, sortedByField) {
    return {
        type: SORTING_PERSONAL_DETAILS,
        payload: {
            sortedPersonalDetails,
            sortedByField
        }
    }
}





