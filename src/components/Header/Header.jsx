import React from "react";
import "./Header.css";
import Menu from "../Menu/Menu";


const Header = () => {
    const menu = [
        {value: 'Overview', href: '#'},
        {value: 'Pages', href: '#'},
        {value: 'Pages', href: '#'},
        {value: 'Portfolio', href: '#'},
        {value: 'Template', href: '#'},
        {value: 'Contact', href: '#'}
      ]
    const [menuActive, setMenuActive] = React.useState(false)

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
                    <div className="menu__btn" onClick={() => setMenuActive(!menuActive)}>
                        <span className="senond"/>
                    </div>
                </div>
            </div>
            <Menu active={menuActive} setActive={setMenuActive} header={'Menu'} items={menu}/>
        </div>
    );
};

export default Header;
