import React from 'react';
import { Input, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

const CustomYearSelectInput = ({ field, form: { touched, errors }, ...props }) => {
    const vehicleYears = [];

    for (let i = 1920; i < new Date().getFullYear() + 2; i++) {
        vehicleYears.push(i);
    }

    return (
        <div>
            <Input type="select" invalid={ !!(touched[field.name] && errors[field.name]) }
                { ...field }
                { ...props }>
                {
                    vehicleYears.map((year) => (
                        <option key={ year } value={ year }>{year}</option>
                    )) }
            </Input>
            {touched[field.name] && errors[field.name] && <FormFeedback>{errors[field.name]}</FormFeedback> }
        </div>
    );
};

CustomYearSelectInput.propTypes = {
    field: PropTypes.object,
    form: PropTypes.object,
};

export default CustomYearSelectInput;
