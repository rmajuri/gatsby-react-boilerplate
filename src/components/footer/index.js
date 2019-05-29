import React from 'react';
import './_footer.scss';
import DigiLogo from './digitails_logo.svg';
import { StaticQuery, graphql } from 'gatsby';
import Instagram from './instagram.svg';

const Footer = () => (

    <StaticQuery

        query={ graphql`
          query FooterQuery {
            allDataJson {
              edges {
                node {
                  footer { address, email, phone, social }
                }
              }
            }
          }
        ` }

        render={ (data) => (<footer className="footer">
            <div className="container footer-container">
                <div className="row">
                    <div className="col-4">
                        <div className="footer-left-container">
                            <svg className="footer-svg">
                                <use xlinkHref={ `${DigiLogo}#digi` } className="footer-svg-use" />
                            </svg>
                            <p className="footer-text-copyright">DIGI-TAILS &copy; 2019</p>
                        </div>
                    </div>
                    <div className="col-4 d-flex footer-center-container">
                        <div className="footer-center">
                            <div className="address-container">
                                {data.allDataJson.edges[0].node.footer.address.map((address) => <p className="address" key={ address }>{address}</p>)}
                            </div>
                            <p>{data.allDataJson.edges[0].node.footer.email}</p>
                            <p>{data.allDataJson.edges[0].node.footer.phone}</p>
                        </div>
                    </div>
                    <div className="col-4 d-flex footer-right-container">
                        <div className="footer-right">
                            {data.allDataJson.edges[0].node.footer.social.map((destination) => <p className="destination" key={ destination }>{destination}</p>)}
                        </div>
                    </div>
                </div>
            </div>
        </footer>) } />
);

export default Footer;
