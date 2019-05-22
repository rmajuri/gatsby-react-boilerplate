import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const RequestForm = () => (
    <div>
        <Formik
            initialValues={ { make: '', model: '', year: '', name: '', email: '' } } />
    </div>
);

export default RequestForm;
