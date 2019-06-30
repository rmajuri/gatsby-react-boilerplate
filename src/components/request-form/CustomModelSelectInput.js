import React from 'react';
import { Input, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

const CustomModelSelectInput = ({ models, field, form: { touched, errors }, ...props }) => models ? (
    <div>
        <Input type="select" invalid={ !!(touched[field.name] && errors[field.name]) }
            { ...field }
            { ...props }>
            {models.length ?
                models.map((model) => (
                    <option key={ model.modelName + model.id } value={ model.modelName }>{model.modelName }</option>
                )) :
                null}
        </Input>
        {touched[field.name] && errors[field.name] && <FormFeedback>{errors[field.name]}</FormFeedback> }
    </div>
) : null;

CustomModelSelectInput.propTypes = {
    field: PropTypes.object,
    form: PropTypes.object,
    models: PropTypes.array,
};

export default CustomModelSelectInput;
