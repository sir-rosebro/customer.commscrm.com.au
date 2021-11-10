import { uploadActionTypes } from '../actionTypes';

const inititalState = {
    isFetching: false,
    errorMessage: '',
};

const upload = (state = inititalState, action) => {
    switch (action.type) {
        case uploadActionTypes.UPLOAD_IMAGE:
            return {
                ...state,
                isFetching: true,
            };
        case uploadActionTypes.UPLOAD_IMAGE_SUCCESS:
            return {
                ...state,
                location:action.payload,
                isFetching: false,
            };
        case uploadActionTypes.UPLOAD_IMAGE_FAIL:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
};

export default upload;
