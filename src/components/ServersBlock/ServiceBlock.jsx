import React from "react";
import './ServiceBlock.css'

const ServiceBlock = ({ contentImg, title, subtitle, p}) => {
    return (
        <div className="serversBlock">
            <img src={contentImg} alt="SERVERS_IMG" />
            <div className="service__title">{title}</div>
            <div className="service__subtitle">{subtitle}</div>
            <p>{p}</p>
        </div>
    );
};

export default ServiceBlock;
