import React from 'react';
import './Sponsors.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sponsors1 from '../../images/sponsors/sponsors1.png';
import sponsors2 from '../../images/sponsors/sponsors2.png';
import sponsors4 from '../../images/sponsors/sponsors4.png';
import sponsors5 from '../../images/sponsors/sponsors5.png';
import sponsors6 from '../../images/sponsors/sponsors6.png';
import sponsors8 from '../../images/sponsors/sponsors8.png';
import sponsors9 from '../../images/sponsors/sponsors9.png';
import sponsors10 from '../../images/sponsors/sponsors10.png';

const Sponsors = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        arrows: false,
        dots: false,

        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 411,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    };
    return (
        <div className="section_design">
            <div className="container">
                <Slider {...settings} className="mt-5">
                    <div className="sponsors_image_div">
                        <img src={sponsors1} alt="sponsors1" className="sponsors_image"></img>
                    </div>
                    <div className="sponsors_image_div">
                        <img src={sponsors2} alt="sponsors2" className="sponsors_image"></img>
                    </div>
                    <div className="sponsors_image_div">
                        <img src={sponsors4} alt="sponsors4" className="sponsors_image"></img>
                    </div>
                    <div className="sponsors_image_div">
                        <img src={sponsors5} alt="sponsors5" className="sponsors_image"></img>
                    </div>
                    <div className="sponsors_image_div">
                        <img src={sponsors6} alt="sponsors6" className="sponsors_image"></img>
                    </div>
                    <div className="sponsors_image_div">
                        <img src={sponsors8} alt="sponsors8" className="sponsors_image"></img>
                    </div>
                    <div className="sponsors_image_div">
                        <img src={sponsors9} alt="sponsors9" className="sponsors_image"></img>
                    </div>
                    <div className="sponsors_image_div">
                        <img src={sponsors10} alt="sponsors9" className="sponsors_image"></img>
                    </div>
                </Slider>
            </div>

        </div>

    );
};

export default Sponsors;