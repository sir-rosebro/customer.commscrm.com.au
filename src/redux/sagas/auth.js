import { all, takeLatest, put, fork, call } from 'redux-saga/effects';
import { message } from 'antd';

import { authActionTypes } from '../actionTypes';
import { AuthService } from '../../services';
import {
    signInSuccess,
    signInFail,
    signupSuccess,
    signupFail,
    forgotPasswordSuccess,
    forgotPasswordFail,
    resetPasswordSuccess,
    resetPasswordFail
} from '../actions';

function* signIn() {
    yield takeLatest(authActionTypes.SIGN_IN, function* ({ payload }) {
        try {
            const { status, user, message } = yield call(AuthService.signIn, payload);
            if (status === 'ERROR') {
                throw Error(message);
            }
            yield put(signInSuccess(user));
        } catch (e) {
            const errorMessage = e.message || 'Failed to Sign In';
            message.error(errorMessage);
            yield put(signInFail(errorMessage));
        }
    });
}

function* signup() {
    yield takeLatest(authActionTypes.SIGN_UP, function* ({ payload }) {
        try {
            const { status, user, message } = yield call(AuthService.signup, payload);
            if (status === 'ERROR') {
                throw Error(message);
            }
            yield put(signupSuccess(user));
        } catch(e) {
            const errorMessage = e.message || 'Failed to Sign Up';
            message.error(errorMessage);
            yield put(signupFail(errorMessage));
        }
    });
}

function* forgotPassword() {
    yield takeLatest(authActionTypes.FORGOT_PASSWORD, function* ({ payload }) {
        try {
            const { status, message } = yield call(AuthService.forgotPassword, payload);
            if (status === 'ERROR') {
                throw Error();
            }
            yield put(forgotPasswordSuccess(message));
        } catch {
            const errorMessage = message;
            message.error(errorMessage);
            yield put(forgotPasswordFail(message));
        }
    });
}

function* resetPassword() {
    yield takeLatest(authActionTypes.RESET_PASSWORD, function* ({ payload }) {
        try {
            const { status, message } = yield call(AuthService.resetPassword, payload);
            if (status === 'ERROR') {
                yield put(resetPasswordFail(message));
               // throw Error();
            }
            yield put(resetPasswordSuccess(message));
        } catch {
            const errorMessage = message;
            message.error(errorMessage);
            yield put(resetPasswordFail(message));
        }
    });
}

export default function* authSaga() {
    yield all([fork(signIn), fork(signup), fork(forgotPassword), fork(resetPassword)]);
}
