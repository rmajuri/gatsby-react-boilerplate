import React, { useState, useEffect } from 'react';
import { Input, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

const CustomMakeSelectInput = ({ field, form: { touched, errors }, ...props }) => {
    const [vehicleMakes, setVehicleMakes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/vehicle/makes')
        .then((res) => res.json())
        .then((vehicles) => setVehicleMakes(vehicles))
        .catch((err) => console.error(err));
    }, []);

    return vehicleMakes.length ? (
        <div>
            <Input type="select" invalid={ !!(touched[field.name] && errors[field.name]) }
                { ...field }
                { ...props }>
                { vehicleMakes.map((make) => (
                    <option key={ make.id } value={ make.makeName }>{make.makeName}</option>
                )) }
            </Input>
            {touched[field.name] && errors[field.name] && <FormFeedback>{errors[field.name]}</FormFeedback> }
        </div>
    ) : null;
};

CustomMakeSelectInput.propTypes = {
    field: PropTypes.object,
    form: PropTypes.object,
};

export default CustomMakeSelectInput;
