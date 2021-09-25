import { all, takeLatest, put, fork, call } from 'redux-saga/effects';
import { message } from 'antd';

import { authActionTypes } from '../actionTypes';
import { AuthService } from '../../services';
import {
    signInSuccess,
    signInFail,
    signupSuccess,
    signupFail,
} from '../actions';

function* signIn() {
    yield takeLatest(authActionTypes.SIGN_IN, function* ({ payload }) {
        try {
            const { status, token } = yield call(AuthService.signIn, payload);
            if (status === 'ERROR') {
                throw Error();
            }
            yield put(signInSuccess(token));
        } catch {
            const errorMessage = 'Failed to Sign In';
            message.error(errorMessage);
            yield put(signInFail(errorMessage));
        }
    });
}

function* signup() {
    yield takeLatest(authActionTypes.SIGN_UP, function* ({ payload }) {
        console.log('redux saga got hit');
        try {
            const { status, user } = yield call(AuthService.signup, payload);
            if (status === 'ERROR') {
                throw Error();
            }
            yield put(signupSuccess(user));
        } catch {
            const errorMessage = 'Failed to Sign Up';
            message.error(errorMessage);
            yield put(signupFail(errorMessage));
        }
    });
}

export default function* authSaga() {
    yield all([fork(signIn), fork(signup)]);
}
