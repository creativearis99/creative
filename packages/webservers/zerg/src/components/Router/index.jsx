import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
/*  eslint-disable */

const Router = ({ routes }) => (
    <>
        {routes.map((route) => <Route key={route.key} {...route} />)}
    </>
);

Router.propTypes = {
    children: PropTypes.element.isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired
    })).isRequired
};

export default Router;
