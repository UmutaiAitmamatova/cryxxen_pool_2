import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__right">
                        <div className="header__logo">Atelier.</div>

                        <div className="right__nav">
                            <a href="#" className="nav__link">
                                Overview
                            </a>
                            <a href="#" className="nav__link">
                                Pages
                            </a>
                            <a href="#" className="nav__link">
                                Portfolio
                            </a>
                            <a href="#" className="nav__link">
                                Template
                            </a>
                            <a href="#" className="nav__link">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="header__left">
                            <button className="btn">Buy Template</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
