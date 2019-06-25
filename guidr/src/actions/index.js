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