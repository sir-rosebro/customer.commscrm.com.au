import { all, takeLatest, put, fork, call } from 'redux-saga/effects';
import { message } from 'antd';

import { uploadActionTypes } from '../actionTypes';
import { UploadService } from '../../services';
import {
    uploadImageSuccess,
    uploadImageFail
} from '../actions';

function* uploadImage() {
    yield takeLatest(uploadActionTypes.UPLOAD_IMAGE, function* ({ payload }) {
        try {
            const { status, location, message } = yield call(UploadService.uploadImage, payload);
            if (status === 'ERROR') {
                throw Error(message);
            }
            yield put(uploadImageSuccess(location));
        } catch (e) {
            const errorMessage = e.message || 'Sorry, cant upload image right now!!';
            message.error(errorMessage);
            yield put(uploadImageFail(errorMessage));
        }
    });
}

export default function* authSaga() {
    yield all([
        fork(uploadImage), 
    ]);
}
