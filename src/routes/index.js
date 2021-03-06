import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { 
    Landing, 
    SignIn, 
    SignUp, 
    Dashboard, 
    ForgotPassword, 
    ResetPassword,
    Profile,
    MyAccount 
} from '../pages';

import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';

function Routes() {
    return (
        <Switch>
            <AuthRoute path="/sign-in">
                <SignIn />
            </AuthRoute>

            <AuthRoute path="/sign-up">
                <SignUp />
            </AuthRoute>

            <AuthRoute path="/forgot-password">
                <ForgotPassword/>
            </AuthRoute>

            <AuthRoute path="/reset-password">
                <ResetPassword/>
            </AuthRoute>

            <PrivateRoute path="/dashboard">
                <Dashboard />
            </PrivateRoute>

            <PrivateRoute path="/profile">
                <Profile />
            </PrivateRoute>

            <PrivateRoute path="/my-account">
                <MyAccount />
            </PrivateRoute>

            <Route path="/">
            <Landing/>
            </Route>
        </Switch>
    );
}
export default Routes;
