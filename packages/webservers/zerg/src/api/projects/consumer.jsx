import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';

const ProjectsConsumer = ({ render }) => (
    <Consumer>
        {(props) => render(props)}
    </Consumer>
);

ProjectsConsumer.propTypes = {
    render: PropTypes.func.isRequired
};

export default ProjectsConsumer;
