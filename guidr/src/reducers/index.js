import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    CREATE_PROFILE_START,
    CREATE_PROFILE_SUCCESS,
    CREATE_PROFILE_FAILURE
} from '../actions';

const initialState = {
    creatingProfile: false,
    loggingIn: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                error: '',
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: '',
                loggingIn: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loggingIn: false
            }
        case CREATE_PROFILE_START:
            return {
                ...state,
                error: '',
                creatingProfile: true
            }
        case CREATE_PROFILE_SUCCESS:
            return {
                ...state,
                error: '',
                creatingProfile: false
            }
        case CREATE_PROFILE_FAILURE:
            return {
                ...state,
                error: action.payload,
                creatingProfile: false
            }
        default:
            return state;
    }
}

export default reducer