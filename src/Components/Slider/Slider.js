import React from 'react';
import './Slider.css';
import video09 from '../../videos/video09.mp4';
import { Link } from 'react-router-dom';
import Tickets from '../Tickets/Tickets';
import Facilities from '../Facilities/Facilities';

const Slider = () => {
    return (
        <>
            <div className='video_bg'>
                <video className='videoTag' autoPlay loop muted>
                    <source src={video09} type='video/mp4' />
                </video>
                <div className='content'>
                    <p className='title'>Transport+</p>
                    <p className='subtitle'>a well trained team is  always ready on campus</p>
                    <Link to="/getTicket">
                        <button className='button'>Get ticket</button>
                    </Link>
                </div>
            </div>

            <Tickets />
            <Facilities />
        </>

    );
};

export default Slider;