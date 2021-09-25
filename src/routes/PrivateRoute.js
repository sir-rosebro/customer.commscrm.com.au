import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useToken } from '../hooks/useToken';

const PrivateRoute = (props) => {
    const [token] = useToken();
    if (!token) {
        return <Redirect to="/sign-in" />;
    }
    return <Route {...props} />;
};
export default PrivateRoute;
