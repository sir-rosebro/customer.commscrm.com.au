import fetch from "../shared/interceptors/fetch";

export const uploadImage = async(payload) =>{
    
    return fetch({
        url: '/upload',
        method: 'POST',
        data: payload,
    });
}