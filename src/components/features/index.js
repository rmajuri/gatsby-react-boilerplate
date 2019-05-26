import React from 'react';
import './_features.scss';
import RequestForm from '../request-form';

import { StaticQuery, graphql } from 'gatsby';

const Features = () => (
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
            <section className="features" id="features">
                <div className="container">
                    <div className="row">
                        <div className="offset-2 col-8">
                            <RequestForm labels={ data.allDataJson.edges[0].node.form } />
                        </div>
                    </div>
                </div>
            </section>
        ) } />
);

export default Features;
