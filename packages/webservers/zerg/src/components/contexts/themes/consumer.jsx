import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
import DefaultConsumer from './defaultButton';

function ThemesConsumer({ render }) {
    return (
        <Consumer>
            {(props) => {
                if (typeof render === 'function') {
                    return render(props);
                }
                return ( // eslint-disable-next-line
                    <DefaultConsumer theme={props.theme} toggleTheme={props.toggleTheme} />
                );
            }}
        </Consumer>
    );
}

ThemesConsumer.defaultProps = {
    render: null
};

ThemesConsumer.propTypes = {
    render: PropTypes.func
};

export default ThemesConsumer;
