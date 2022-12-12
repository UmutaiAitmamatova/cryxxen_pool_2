import React from "react";
import "./Header.css";
import Menu from "../Menu/Menu";

const Header = () => {
    const menu = [
        { id: 0, value: "Overview", href: "#" },
        { id: 1, value: "Pages", href: "#" },
        { id: 2, value: "Pages", href: "#" },
        { id: 3, value: "Portfolio", href: "#" },
        { id: 4, value: "Template", href: "#" },
        { id: 5, value: "Contact", href: "#" },
    ];
    const [menuActive, setMenuActive] = React.useState(false);

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
                        <span className="senond" />
                    </div>
                </div>
            </div>
            <Menu
                active={menuActive}
                setActive={setMenuActive}
                header={"Menu"}
                items={menu}
            />
        </div>
    );
};

export default Header;
