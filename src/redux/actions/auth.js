import { authActionTypes } from '../actionTypes';

export const signIn = (payload) => {
    return {
        type: authActionTypes.SIGN_IN,
        payload
    }
}

export const signInSuccess = (payload) => {
    return {
        type: authActionTypes.SIGN_IN_SUCCESS,
        payload
    }
}

export const signInFail = (payload) => {
    return {
        type: authActionTypes.SIGN_IN_FAIL,
        payload
    }
}

export const signup = (payload) => {
    console.log('action got hit');
    return {
        type:authActionTypes.SIGN_UP,
        payload
    }
}

export const signupFail = (payload) => {
    return {
        type:authActionTypes.SIGN_UP_FAIL,
        payload
    }
}

export const signupSuccess = (payload) => {
    return {
        type:authActionTypes.SIGN_UP_SUCCESS,
        payload
    }
}