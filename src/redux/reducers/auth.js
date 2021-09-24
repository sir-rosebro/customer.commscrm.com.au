import { authActionTypes } from '../actionTypes';

const inititalState = {
    loading: false,
    errorMessage: '',
    loggedInUser: null,
}

const auth = (state = inititalState, action) => {
    switch(action.type) {
        case authActionTypes.SIGN_IN:
            return {
                ...state,
                loading: true
            }
        case authActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedInUser: action.payload
        }
        case authActionTypes.SIGN_IN_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
        }
        case authActionTypes.SIGN_UP:
            return {
                ...state,
                loading:true
            }
        case authActionTypes.SIGN_UP_SUCCESS: 
            return {
                ...state,
                loading:false,
                loggedInUser:action.payload
            }
        case authActionTypes.SIGN_UP_FAIL:
            return {
                ...state,
                loading:false,
                errorMessage:action.payload
            }
        default: 
            return state;
    }
}

export default auth;