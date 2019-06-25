import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions';

const initialState = {
    loggingIn: false
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: null,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                loggingIn: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loggingIn: false
            }
    }
}

export default reducer