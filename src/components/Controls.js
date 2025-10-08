import React from 'react';
import './Controls.css';

const Controls = ({ isPlaying, onPlayPause }) => {
    return (
        <div className="controls">
            <button onClick={onPlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    );
};

export default Controls;