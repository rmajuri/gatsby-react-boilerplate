import React from 'react';
import { Input, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

const CustomInput = ({ field, form: { touched, errors }, ...props }) => (
    <div>
        <Input invalid={ !!(touched[field.name] && errors[field.name]) }
            { ...field }
            { ...props } />
        {touched[field.name] && errors[field.name] && <FormFeedback>{errors[field.name]}</FormFeedback> }
    </div>
);

export default CustomInput;

CustomInput.propTypes = {
    field: PropTypes.object,
    form: PropTypes.object,
};
