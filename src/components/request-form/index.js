import React, { Fragment } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './_request-form.scss';
import * as Yup from 'yup';

const initialState = {
    Make: '',
    Model: '',
    Year: '',
    Name: '',
    Email: '',
};

const RequestForm = () => (
    <Fragment>
        <Formik initialValues={ initialState }
            onSubmit={ (values) => {
                console.log(values);
            } }
            validationSchema={ Yup.object().shape({
                Make: Yup.string().required('Required'),
                Model: Yup.string().required('Required'),
                Year: Yup.number().integer()
                .min(1920)
                .max(new Date().getFullYear() + 1)
                .required('Required'),
                Name: Yup.string().required('Required'),
                Email: Yup.string().email('Invalid Email')
                .required('Required'),
            }) }>
            {
                ({ values, isSubmitting, handleChange, handleReset }) => (
                    <Fragment>
                        <Form>

                            <div className="row">
                                <div className="col-md-3 form-control">
                                    <div>
                                        <label>Make</label><br />
                                    </div>
                                    <Field
                                        name="Make"
                                        type="text"
                                        onChange={ handleChange }
                                        value={ values.make } />
                                    <ErrorMessage name="Make">
                                        {(msg) => <div className="field-error">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="col-md-3">
                                    <div>
                                        <label>Model</label>
                                    </div>
                                    <Field
                                        name="Model"
                                        type="text"
                                        onChange={ handleChange }
                                        value={ values.model } />
                                    <ErrorMessage name="Model">
                                        {(msg) => <div className="field-error">{msg}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className="col-md-3">
                                    <div>
                                        <label>Year</label>
                                    </div>
                                    <Field
                                        name="Year"
                                        type="text"
                                        onChange={ handleChange }
                                        value={ values.year } />
                                    <ErrorMessage name="Year">
                                        {(msg) => <div className="field-error">{msg}</div>}
                                    </ErrorMessage>
                                </div>

                            </div>

                            <div className="row top-buffer">
                                <div className="col-md-3">
                                    <div>
                                        <label>Name</label>
                                    </div>
                                    <Field
                                        name="name"
                                        type="text"
                                        onChange={ handleChange }
                                        value={ values.name } />
                                    <ErrorMessage name="name">
                                        {(msg) => <div className="field-error">{msg}</div>}
                                    </ErrorMessage>
                                </div>

                                <div className="col-md-3">
                                    <div>
                                        <label>Email</label>
                                    </div>
                                    <Field
                                        name="email"
                                        type="text"
                                        onChange={ handleChange }
                                        value={ values.email } />
                                    <ErrorMessage name="email">
                                        {(msg) => <div className="field-error">{msg}</div>}
                                    </ErrorMessage>
                                </div>

                            </div>

                            <div className="row top-buffer">
                                <div className="col-md-3">
                                    <button type="reset" onClick={ handleReset }>
                                    Reset
                                    </button>
                                </div>
                                <div className="col-md-3">
                                    <button type="submit" disabled={ isSubmitting }>
                                    Submit
                                    </button>
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
