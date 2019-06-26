import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    CREATE_PROFILE_START,
    CREATE_PROFILE_SUCCESS,
    CREATE_PROFILE_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions';

const initialState = {
    creatingProfile: false,
    loggingIn: false,
    fetchingData: false,
    userData: {},
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
        case FETCH_DATA_START:
            return {
                ...state,
                error: '',
                fetchingData: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                fetchingData: false,
                userData: action.payload
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingData: false
            }
        default:
            return state;
    }
}

export default reducer