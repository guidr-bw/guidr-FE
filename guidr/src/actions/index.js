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
        .catch(err => console.log(err.response))
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
        .catch(err => console.log(err.response))
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
        .catch(err => console.log(err.response))
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
