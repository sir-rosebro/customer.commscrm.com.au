import React from "react";
import PropTypes from 'prop-types';

import Header from '../../components/header';
import Footer from '../../components/footer';


function Layout({ children }) {
return (
    <>
        <Header/>
          { children }
        <Footer/>
    </>   
);
}

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;



