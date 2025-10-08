import React, { useState, useRef, useEffect } from 'react';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import './VideoPlayer.css';

const VideoPlayer = ({ src }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const videoRef = useRef(null);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleSeek = (time) => {
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener('timeupdate', handleTimeUpdate);
            video.addEventListener('loadedmetadata', handleLoadedMetadata);
            
            return () => {
                video.removeEventListener('timeupdate', handleTimeUpdate);
                video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            };
        }
    }, []);

    return (
        <div className="video-player">
            <video 
                ref={videoRef}
                src={src}
                controls={false}
            />
            <Controls 
                isPlaying={isPlaying}
                onPlayPause={togglePlayPause}
            />
            <ProgressBar 
                currentTime={currentTime}
                duration={duration}
                onSeek={handleSeek}
            />
        </div>
    );
};

export default VideoPlayer;