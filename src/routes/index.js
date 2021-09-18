
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
            {/* <Route path="/about">
                <About />
            </Route> */}
            
            <Route path="/sign-in">
                <SignIn />
            </Route>

            <Route path="/sign-up">
                <SignUp />
            </Route>

            {/* <Route path="/contact/:id">
                <Contact />
            </Route>
            
            <Route path="/contact">
                <AllContacts />
            </Route> */}

            <Route path="/">
                <Landing />
            </Route>
            
        </Switch>
    );
}
export default Routes;