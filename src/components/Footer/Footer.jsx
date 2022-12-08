import React from 'react';
import './Footer.css'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__item">
                        <div className="footer__title">Subscribe to Atelier <br /> Newsletter</div>
                        <div className="footer__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                        <div className="footer__inputs">
                            <input type="text" placeholder='Hello' />
                            <input type="text" placeholder='Hello' />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit.</p>
                        <div className="footer__icons">
                            <div className="icons"><img src={icon1} alt="icon1" /></div>
                            <div className="icons"><img src={icon2} alt="icon1" /></div>
                            <div className="icons"><img src={icon3} alt="icon1" /></div>
                            <div className="icons"><img src={icon4} alt="icon1" /></div>
                        </div>
                    </div>

                </div>
                <div className="footer__end">
                        <div className="end__r">
                            <span className='color'>Powered by</span>
                            <span>Webflow</span>
                        </div>

                        <div className="end__l">
                            <span>Licenses</span>
                            <span>Style Guide</span>
                            <span>Instruction</span>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Footer;
