import React from 'react';
import './LoadingPage.css';

const LoadingPage = () => {
    return (
        <div className='section'>
            <div class="spinner">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;
