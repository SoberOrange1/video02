import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentTime, duration, onSeek }) => {
    const handleChange = (event) => {
        const newTime = event.target.value;
        onSeek(newTime);
    };

    return (
        <div className="progress-bar">
            <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleChange}
                className="progress-bar-slider"
            />
            <div className="time-display">
                {formatTime(currentTime)} / {formatTime(duration)}
            </div>
        </div>
    );
};

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export default ProgressBar;