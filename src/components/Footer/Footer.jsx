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
                            <input type="text" placeholder='' />
                            <input type="text" placeholder='' />
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
                            <span>Powered by</span>
                            <span className='color'>Webflow</span>
                        </div>

                        <div className="end__l">
                            <span className='span'>Licenses</span>
                            <span className='span'>Style Guide</span>
                            <span className='span'>Instruction</span>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Footer;


// import React from 'react';
// import SliderComponents from './components/sliderComponents/SliderComponents';
// import "./SecondSlider.css";
// import arrow_left from "./imgSecondSlider/arrow_left.png";
// import arrow_right from "./imgSecondSlider/arrow_right.png";
// import star from "./components/sliderComponents/star.svg"

// function SecondSlider() {
//     const items = [
//         {
//             img: { star },
//             title: "Healthy & Carefully Packed My order of six “Sedum Album Coral Carpet” plants arrived healthy and very carefully packed. They allowed me to choose my shipping dat and the box ...",
//             subtitle: 'W.L.12/04/22'
//         },
//         {
//             img2: { star },
//             title2: 'Happy customer!We bought 16 Green Giant Arborvitae and loved the price compared to all the local places. Unfortunately they are not standing very tall so I emailed the company ...',
//             subtitle2: 'S.I.27/03/22'
//         }
//     ]

//     return (
//         <div className="content">
//             <div className="container">
//                 <div className='block_title'>
//                     <h1>REVIEWS</h1>
//                 </div>
//                 <div className="content_block">
//                     <img src={arrow_left} className="arrow_left" alt='arrow_left' />
//                     <SliderComponents />
//                     <SliderComponents img={star} title={items.title} subtitle={items.subtitle} />
//                     <SliderComponents img2={star} title={items.title2} subtitle={items.subtitle2} />
//                     <img src={arrow_right} className="arrow_right" alt="arrow_right" />
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default SecondSlider;
