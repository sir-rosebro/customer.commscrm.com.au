import fetch from "../shared/interceptors/fetch";

export const signIn = async(payload) =>{
    
    return fetch({
        url: 'customers/auth/signin',
        method: 'POST',
        data: payload,
    });
}
export const signup = async(payload) =>{
    
    return fetch({
        url: 'customers/auth/sign-up',
        method: 'POST',
        data: payload,
    });
}

export const forgotPassword = async(payload) =>{
    
    return fetch({
        url: 'customers/auth/forgot-password',
        method: 'POST',
        data: payload,
    });
}