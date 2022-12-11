import React from "react";
import './Section.css'

const Section = ({ title, subtitle}) => {
    return (
        <div className="section">
            <div className="container">
            <div className="section__subtitle">{title}</div>
            <div className="section__title">{subtitle}</div>
            </div>
        </div>
    );
};

export default Section;
