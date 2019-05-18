import React from 'react';
import './_header.scss';

const Header = () => (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="header-content">
                        <svg viewBox="0 0 100 100" fill="white" className="header-svg" width="30%" height="100%" color="white" >
                            <use xlinkHref="/digitails_logo.svg#digi" className="header-svg-use" />
                        </svg>
                        <nav className="header-nav">
                            <ul className="header-nav-list">
                                <li className="header-nav-list-item">
                                    <a href="#features" className="header-nav-list-item-anchor">
                                        Features
                                    </a>
                                </li>
                                <li className="header-nav-list-item">
                                    <a href="#howto" className="header-nav-list-item-anchor">
                                        How To
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
