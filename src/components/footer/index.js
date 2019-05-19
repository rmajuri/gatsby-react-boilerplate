import React from 'react';
import './_footer.scss';
import DigiLogo from './digitails_logo.svg';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="footer-content-left">
                        <svg className="footer-svg">
                            <use xlinkHref={ `${DigiLogo}#digi` } className="footer-svg-use" />
                        </svg>
                        <p style={ { color: 'white' } }>Cats cats cats</p>

                    </div>
                </div>
                <div className="col-4">
                    <div className="footer-content-center">
                        <p style={ { color: 'white' } }>Cats cats cats</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="footer-content-right">
                        <p style={ { color: 'white' } }>Cats cats cats</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
