import { combineReducers } from 'redux';
import Auth from './auth';
import Upload from './upload';

const reducers = combineReducers({
    auth: Auth,
    upload: Upload
});
export default reducers;