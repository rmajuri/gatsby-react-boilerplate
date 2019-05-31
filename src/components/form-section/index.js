import React from 'react';
import './_form-section.scss';
import RequestForm from '../request-form';

import { StaticQuery, graphql } from 'gatsby';

const FormSection = () => (
    <StaticQuery
        query={ graphql`
      query FeaturesQuery {
        allDataJson {
          edges {
            node {
              form {make, model, year, name, email, reset, submit}
            }
          }
        }
      }
    ` }
        render={ (data) => (
            <section className="form-section" id="form-section">
                <div className="container">
                    <div className="row">
                        <div className="offset-1 col-11">
                            <h1 className="form-text-header">Every tail light kit we add to our collection is based upon popular demand. </h1>
                        </div>
                    </div>
                    <div className="row row-buffer">
                        <div className="offset-1 col-9">
                            <h4 className="form-text-subheader">If you can&apos;t find a kit for your car in the <a className="link" href="https://digi-tails.com/" target="blank" rel="external">DIGI-TAILS online store</a>, you can use the request form below to tell us what kind of car you&apos;re working on. </h4>
                        </div>
                    </div>
                    <div className="row row-buffer">
                        <div className="offset-1 col-9">
                            <h6 className="form-text-disclaimer">We&apos;ll never share your email, and we won&apos;t contact you unless we have what you&apos;re looking for.</h6>
                        </div>
                    </div>
                    <div className="row row-buffer-form">
                        <div className="offset-2 col-8">
                            <RequestForm labels={ data.allDataJson.edges[0].node.form } />
                        </div>
                    </div>
                </div>
            </section>
        ) } />
);

export default FormSection;
