import React from 'react';
import './_header.scss';
import DigiLogo from './digitails_logo.svg';

const Header = () => (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="header-content">
                        <svg className="header-svg">
                            <use xlinkHref={ `${DigiLogo}#digi` } className="header-svg-use" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
