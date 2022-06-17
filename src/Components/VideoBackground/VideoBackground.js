import React from 'react';
import './VideoBackground.css';
import diu from '../../videos/diu.mp4';
import { Link } from 'react-router-dom'

const VideoBackground = () => {
    return (
        <div className='video_bg'>
            <div className="overlay"></div>
            <video autoPlay loop muted>
                <source src={diu} type='video/mp4' />
            </video>
            <div className='content'>
                <p className='title'>Transport <span>+</span></p>
                <p className='subtitle'>always ready on campus</p>
                <Link to="/getTicket">
                    <button className='get_ticket_button'>Get ticket</button>
                </Link>
            </div>
        </div>
    );
};

export default VideoBackground;