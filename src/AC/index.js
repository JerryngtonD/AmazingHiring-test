import {LOAD_PERSONAL_DETAILS, START, SUCCESS, FAIL, CHANGING_CURRENT_BUTTON} from '../constants';
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
        }, 1000)

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





