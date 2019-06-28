import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    return axiosWithAuth()
        .post(`https://lambda-guidr.herokuapp.com/api/auth/login`, creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.username })
            return true;
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message })
        })
}

export const register = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    return axiosWithAuth()
        .post(`https://lambda-guidr.herokuapp.com/api/auth/register`, creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.username })
            return true;
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message })
        })
}

export const CREATE_PROFILE_START = "CREATE_PROFILE_START";
export const CREATE_PROFILE_SUCCESS = "CREATE_PROFILE_SUCCESS";
export const CREATE_PROFILE_FAILURE = "CREATE_PROFILE_FAILURE";

export const addProfile = creds => dispatch => {
    dispatch({ type: CREATE_PROFILE_START })
    return axiosWithAuth()
        .put(`https://lambda-guidr.herokuapp.com/api/auth/update`, creds)
        .then(res => { console.log(res)
            localStorage.setItem('token', res.data.token);
            dispatch({ type: CREATE_PROFILE_SUCCESS })
            return true;
        })
        .catch(err => {
            dispatch({ type: CREATE_PROFILE_FAILURE, payload: err.response.data.message })
        })
}

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START })
    return axiosWithAuth()
        .get(`https://lambda-guidr.herokuapp.com/api/user`)
        .then(res => {
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => console.log(err))
}

export const FETCH_TRIP_START = 'FETCH_TRIP_START';
export const FETCH_TRIP_SUCCESS = 'FETCH_TRIP_SUCCESS';
export const FETCH_TRIP_FAILURE = 'FETCH_TRIP_FAILURE';

export const getTrips = () => dispatch => {
    dispatch({ type: FETCH_TRIP_START })
    return axiosWithAuth()
        .get(`https://lambda-guidr.herokuapp.com/api/user/trips`)
        .then(res => {
            dispatch({ type: FETCH_TRIP_SUCCESS, payload: res.data.trips })
        })
        .catch(err => console.log(err))
}

export const ADD_TRIP_START = 'ADD_TRIP_START';
export const ADD_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS';
export const ADD_TRIP_FAILURE = 'ADD_TRIP_FAILURE';

export const addTrip = state => dispatch => {
    dispatch({ type: ADD_TRIP_START })
    return axiosWithAuth()
        .post(`https://lambda-guidr.herokuapp.com/api/trip`, state)
        .then(res => {
            dispatch({ type: ADD_TRIP_SUCCESS, payload: res.data})
            return true;
        })
        .catch(err => console.log(err))
}

export const FETCH_TRIP_DATA_START = 'FETCH_TRIP_DATA_START';
export const FETCH_TRIP_DATA_SUCCESS = 'FETCH_TRIP_DATA_SUCCESS';
export const FETCH_TRIP_DATA_FAILURE = 'FETCH_TRIP_DATA_FAILURE';

export const fetchTrip = (trip) => dispatch => {
    dispatch({ type: FETCH_TRIP_DATA_START })
    return axiosWithAuth()
        .get(`https://lambda-guidr.herokuapp.com/api/trip/${trip}`)
        .then(res => { 
            res.data.date = res.data.date.toString()
            console.log('RES.DATA', res.data)
            dispatch({ type: FETCH_TRIP_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => console.log(err))
}

export const DELETE_TRIP_START = 'DELETE_TRIP_START';
export const DELETE_TRIP_SUCCESS = 'DELETE_TRIP_SUCCESS';
export const DELETE_TRIP_FAILURE = 'DELETE_TRIP_FAILURE';

export const deleteTrip = (id) => dispatch => {
    dispatch({ type: DELETE_TRIP_START})
    return axiosWithAuth()
        .delete(`https://lambda-guidr.herokuapp.com/api/trip/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const EDIT_TRIP_START = 'EDIT_TRIP_START';
export const EDIT_TRIP_SUCCESS = 'EDIT_TRIP_SUCCESS';
export const EDIT_TRIP_FAILURE = 'EDIT_TRIP_FAILURE';

export const editTrip = (id, trip) => dispatch => {
    dispatch({ type: EDIT_TRIP_START})
    console.log('TRIP', trip)
    return axiosWithAuth()
        .put(`https://lambda-guidr.herokuapp.com/api/trip/${id}`, trip)
        .then(res =>
            dispatch({ type: EDIT_TRIP_SUCCESS, payload: res.data })
        )
        .catch(err => console.log(err))
}