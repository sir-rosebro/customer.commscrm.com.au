
import { all } from 'redux-saga/effects';

import Auth from './auth';
import Upload from './upload';

export default function* rootSaga() {
    yield all([
        Auth(),
        Upload()
    ]);
}