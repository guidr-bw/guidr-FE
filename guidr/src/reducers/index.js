import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    CREATE_PROFILE_START,
    CREATE_PROFILE_SUCCESS,
    CREATE_PROFILE_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_TRIP_START,
    FETCH_TRIP_SUCCESS,
    FETCH_TRIP_FAILURE,
    ADD_TRIP_START,
    ADD_TRIP_SUCCESS,
    ADD_TRIP_FAILURE,
    FETCH_TRIP_DATA_START,
    FETCH_TRIP_DATA_SUCCESS,
    FETCH_TRIP_DATA_FAILURE,
    DELETE_TRIP_START,
    DELETE_TRIP_SUCCESS,
    DELETE_TRIP_FAILURE,
    EDIT_TRIP_START,
    EDIT_TRIP_SUCCESS,
    EDIT_TRIP_FAILURE
} from '../actions';

const initialState = {
    creatingProfile: false,
    loggingIn: false,
    fetchingData: false,
    fetchingTripData: false,
    fetchingTrip: false,
    addingTrip: false,
    editTrip: false,
    deleteTrip: false,
    userData: {},
    tripData: [],
    individualTripData: [],
    newTrip: {},
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
        case FETCH_TRIP_START:
            return {
                ...state,
                error: '',
                fetchingTrip: true
            }
        case FETCH_TRIP_SUCCESS:
            return {
                ...state,
                error: '',
                fetchingTrip: false,
                tripData: action.payload
            }
        case FETCH_TRIP_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingTrip: false
            }
        case ADD_TRIP_START:
            return {
                ...state,
                error: '',
                addingTrip: true
            }
        case ADD_TRIP_SUCCESS:
            return {
                ...state,
                error: '',
                addingTrip: false,
                newTrip: action.payload
            }
        case ADD_TRIP_FAILURE:
            return {
                ...state,
                error: action.payload,
                addingTrip: false
            }
        case FETCH_TRIP_DATA_START:
            return {
                ...state,
                error: '',
                fetchingTripData: true
            }
        case FETCH_TRIP_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                fetchingTripData: false,
                individualTripData: action.payload
            }
        case FETCH_TRIP_DATA_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingTripData: false
            }
        case DELETE_TRIP_START:
            return {
                ...state,
                error: '',
                deleteTrip: true
            }
        case DELETE_TRIP_SUCCESS:
            return {
                ...state,
                error: '',
                deleteTrip: false,
                tripData: action.payload
            }
        case DELETE_TRIP_FAILURE:
            return {
                ...state,
                error: action.payload,
                deleteTrip: false
            }
        case EDIT_TRIP_START:
            return {
                ...state,
                error: '',
                editTrip: true
            }
        case EDIT_TRIP_SUCCESS:
            return {
                ...state,
                error: '',
                editTrip: false,
                individualTripData: action.payload
            }
        case EDIT_TRIP_FAILURE:
            return {
                ...state,
                error: action.payload,
                editTrip: false
            }
        default:
            return state;
    }
}

export default reducer