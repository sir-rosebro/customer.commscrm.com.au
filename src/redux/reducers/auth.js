import { authActionTypes } from '../actionTypes';

const inititalState = {
    loading: false,
    errorMessage: '',
    loggedInUser: null,
    redirect: null,
};

const auth = (state = inititalState, action) => {
    switch (action.type) {
        case authActionTypes.SIGN_IN:
            return {
                ...state,
                loading: true,
            };
        case authActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload,
            };
        case authActionTypes.SIGN_IN_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            };
        case authActionTypes.SIGN_UP:
            return {
                ...state,
                loading: true,
            };
        case authActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedInUser: action.payload,
                redirect: '/register/success',
            };
        case authActionTypes.SIGN_UP_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            };
        case authActionTypes.FORGOT_PASSWORD:
        return {
            ...state,
            loading: true,
        };
        case authActionTypes.FORGOT_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            };
        case authActionTypes.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case authActionTypes.RESET_PASSWORD:
            return {
                ...state,
                loading: true,
        };
        case authActionTypes.RESET_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
        };
        case authActionTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                successMessage:action.payload,
        };
        default:
            return state;
    }
};

export default auth;
