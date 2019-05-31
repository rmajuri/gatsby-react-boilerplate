import React from 'react';
import './_footer.scss';
import DigiLogo from './digitails_logo.svg';
import { StaticQuery, graphql } from 'gatsby';
import Instagram from './instagram.svg';
import Facebook from './facebook.svg';
import Youtube from './youtube.svg';

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
                            <h4 className="footer-title">Contact</h4>
                            <a href="https://www.google.com/maps/place/Spaghetti+Engineering/@39.817116,-74.92689,17z/data=!3m1!4b1!4m5!3m4!1s0x89c13287d85db31b:0x1e525e800f1ed07f!8m2!3d39.817116!4d-74.924696" className="contact-link" target="blank">
                                <div className="address-container">
                                    {data.allDataJson.edges[0].node.footer.address.map((address) => <p className="address" key={ address }>{address}</p>)}
                                </div>
                            </a>
                            <a href="mailto: info@digitails.com" className="contact-link">
                                <p>{data.allDataJson.edges[0].node.footer.email}</p>
                            </a>
                            <a href="tel: 856-719-9989" className="contact-link">
                                <p>{data.allDataJson.edges[0].node.footer.phone}</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-4 d-flex footer-right-container">
                        <div className="footer-right">
                            <h4 className="footer-title">Company</h4>
                            <div className="footer-right-icon">
                                <svg className="footer-svg-icon">
                                    <a href="https://www.instagram.com/digi.tails/" target="blank" rel="external">
                                        <use xlinkHref={ `${Instagram}#insta` } className="footer-icon" />
                                    </a>
                                </svg>
                                <svg className="footer-svg-icon">
                                    <a href="https://www.facebook.com/digitaltaillights" target="blank" rel="external" >
                                        <use xlinkHref={ `${Facebook}#fb` } className="footer-icon" />
                                    </a>
                                </svg>
                                <svg className="footer-svg-icon" >
                                    <a href="https://www.youtube.com/user/spaghettiengineering" target="blank" rel="external">
                                        <use xlinkHref={ `${Youtube}#yt` } className="footer-icon" />
                                    </a>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>) } />
);

export default Footer;
