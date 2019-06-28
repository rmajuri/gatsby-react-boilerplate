import React, { Fragment, useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import './_request-form.scss';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Label, FormGroup } from 'reactstrap';
import CustomInput from './CustomInput';
import PropTypes from 'prop-types';

const initialState = {
    make: '',
    model: '',
    year: '',
    name: '',
    email: '',
};

const RequestForm = ({ labels }) => {
    const [vehicleMakes, setVehicleMakes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/vehicle')
        .then((res) => res.json())
        .then((vehicles) => setVehicleMakes(vehicles))
        .catch((err) => console.error(err));
    }, []);

    return vehicleMakes.length ? (
        <Fragment>
            <Formik initialValues={ initialState }
                onSubmit={ (values, actions) => {
                    const requestPost = {
                        ...values,
                        date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
                        year: String(values.year),
                    };

                    fetch('http://localhost:8080/api/request', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(requestPost),
                    })
                    .then((res) => res.json())
                    .then((data) => console.log(data))
                    .catch((err) => console.error(err));

                    actions.setSubmitting(false);
                    actions.resetForm();
                } }
                validationSchema={ Yup.object().shape({
                    make: Yup.string().required('Required'),
                    model: Yup.string().required('Required'),
                    year: Yup.number().integer()
                    .min(1920)
                    .max(new Date().getFullYear() + 1)
                    .required('Required'),
                    name: Yup.string().required('Required'),
                    email: Yup.string().email('Invalid Email')
                    .required('Required'),
                }) }>
                {
                    ({ isSubmitting, handleReset }) => (
                        <Fragment>
                            <Form>

                                {/* <FormGroup>
                                <Label className="input-label" for="make">{labels.make}</Label>
                                <Field name="make" type="text" component={ CustomInput } />
                            </FormGroup> */}
                                <FormGroup>
                                    <Label className="input-label" for="make">{labels.make}</Label><br />
                                    <Field component="select" name="make">
                                        {vehicleMakes.map((vehicleMake) => (
                                            <option key={ vehicleMake } value={ vehicleMake }>{vehicleMake}</option>
                                        ))}
                                    </Field>
                                </FormGroup>

                                <FormGroup>
                                    <Label className="input-label" for="model">{labels.model}</Label>
                                    <Field name="model" type="text" component={ CustomInput } />
                                </FormGroup>

                                <FormGroup>
                                    <Label className="input-label" for="year">{labels.year}</Label>
                                    <Field name="year" type="number" component={ CustomInput } />
                                </FormGroup>

                                <FormGroup>
                                    <Label className="input-label" for="name">{labels.name}</Label>
                                    <Field name="name" type="text" component={ CustomInput } />
                                </FormGroup>

                                <FormGroup>
                                    <Label className="input-label" for="email">{labels.email}</Label>
                                    <Field name="email" type="email" component={ CustomInput } />
                                </FormGroup>

                                <div className="row top-buffer">
                                    <div className="col-md-2 form-container">
                                        <Button color="secondary" type="reset" onClick={ handleReset }>{labels.reset}</Button>
                                    </div>

                                    <div className="col-md-2 form-container">
                                        <Button color="success" type="submit" disabled={ isSubmitting }>{labels.submit}</Button>
                                    </div>
                                </div>

                            </Form>
                        </Fragment>
                    )
                }
            </Formik>
        </Fragment>) : null;
};

export default RequestForm;

RequestForm.propTypes = {
    labels: PropTypes.object,
};

