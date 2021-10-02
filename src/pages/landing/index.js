import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="landing">
            <h1>This is Landing page.</h1>
            <Link to="/sign-up">Sign Up</Link> |{' '}
            <Link to="/sign-in">Sign In</Link>
        </div>
    );
};

export default Landing;
