import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => (
    <svg
        viewBox={ props.viewBox }
        width={ props.width }
        height={ props.height }
        fill={ props.fill }>
        <use xlinkHref={ `#${props.id}` } />
    </svg>
);

Icon.propTypes = {
    viewBox: PropTypes.string,
    id: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string,
};

export default Icon;
