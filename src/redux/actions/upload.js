import { uploadActionTypes } from '../actionTypes';

export const uploadImage = (payload) => {
    return {
        type: uploadActionTypes.UPLOAD_IMAGE,
        payload
    }
}

export const uploadImageSuccess = (payload) => {
    return {
        type: uploadActionTypes.UPLOAD_IMAGE_SUCCESS,
        payload
    }
}

export const uploadImageFail = (payload) => {
    return {
        type: uploadActionTypes.UPLOAD_IMAGE_FAIL,
        payload
    }
}
