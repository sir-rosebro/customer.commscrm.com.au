import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import {
    Landing,
    SignIn,
    SignUp
} from '../pages';

function Routes() {
    return(
        <Switch>
            
            <Route path="/sign-in">
                <SignIn />
            </Route>

            <Route path="/sign-up">
                <SignUp />
            </Route>

            <Route path="/">
                <Landing />
            </Route>
            
        </Switch>
    );
}
export default Routes;