import React from 'react'
import './Follow.css'
import {img1, img2, img3, img4, icon } from '../../assets/follow';

const Follow = () => {
    return (
        <div className='follow'>
            <div className="container">
                <hr className="hr" />
                <div className="follow__inner">

                    <div className="follow__block">
                    <img src={icon} alt="" className="follow__logo" />
                        <img src={img1} alt="" className="follow__img" />
                    </div>

                    <div className="follow__block">
                    <img src={icon} alt="" className="follow__logo" />
                        <img src={img2} alt="" className="follow__img" />
                    </div>

                    <div className="follow__block">
                    <img src={icon} alt="" className="follow__logo" />
                        <img src={img3} alt="" className="follow__img" />
                    </div>

                    <div className="follow__block">
                    <img src={icon} alt="" className="follow__logo" />
                        <img src={img4} alt="" className="follow__img" />
                    </div>

                    <div className="follow__block">
                    <img src={icon} alt="" className="follow__logo" />
                        <img src={img1} alt="" className="follow__img" />
                    </div>


                </div>
                <hr className="hr" />
            </div>
        </div>
    )
}

export default Follow