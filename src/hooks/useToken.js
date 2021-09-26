import { useState } from 'react';
import { AUTH_TOKEN } from '../constants';

export const useToken = () => {
    const [token, setTokenInternal] = useState(() => {
        return localStorage.getItem(AUTH_TOKEN);
    });
    const setToken = (newToken) => {
        if (newToken) {
            localStorage.setItem(AUTH_TOKEN, newToken);
            setTokenInternal(newToken);
        }
    };

    return [token, setToken];
};
