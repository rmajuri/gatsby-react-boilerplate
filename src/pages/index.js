import React from 'react';
import FormSection from '../components/form-section';
import RequestStats from '../components/request-stats';
import Layout from '../components/layout';

const IndexPage = () => (
    <Layout>
        <main>
            <FormSection />
            <RequestStats />
        </main>
    </Layout>
);

export default IndexPage;
