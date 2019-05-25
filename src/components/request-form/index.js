import React, { Fragment } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './_request-form.scss';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Label, FormGroup } from 'reactstrap';
import CustomInput from './CustomInput';

const initialState = {
    make: '',
    model: '',
    year: '',
    name: '',
    email: '',
};

const RequestForm = () => (
    <Fragment>
        <Formik initialValues={ initialState }
            onSubmit={ (values) => {
                console.log(values);
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

                            <FormGroup>
                                <Label for="make">Make</Label>
                                <Field name="make" type="text" component={ CustomInput } />
                            </FormGroup>

                            <FormGroup>
                                <Label for="model">Model</Label>
                                <Field name="model" type="text" component={ CustomInput } />
                            </FormGroup>

                            <FormGroup>
                                <Label for="year">Year</Label>
                                <Field name="year" type="text" component={ CustomInput } />
                            </FormGroup>

                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Field name="name" type="text" component={ CustomInput } />
                            </FormGroup>

                            <FormGroup>
                                <Label for="year">Year</Label>
                                <Field name="year" type="text" component={ CustomInput } />
                            </FormGroup>

                            <div className="row top-buffer">
                                <div className="col-md-2 form-container">
                                    <Button color="secondary" type="reset" onClick={ handleReset }>Reset</Button>
                                </div>

                                <div className="col-md-2 form-container">
                                    <Button color="success" type="submit" disabled={ isSubmitting }>Submit</Button>
                                </div>
                            </div>

                        </Form>
                    </Fragment>
                )
            }
        </Formik>
    </Fragment>
);

export default RequestForm;
