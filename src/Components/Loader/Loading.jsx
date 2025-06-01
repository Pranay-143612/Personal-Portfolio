import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loading-text">
                <h1>Welcome to <span>Pranay's Portfolio</span></h1>
                <p>Please wait while loading...</p>
                <div className="spinner"></div>
            </div>
        </div>
    );
};

export default Loading;
