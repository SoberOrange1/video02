import React, { useRef, useEffect } from 'react';

const TIME_LIMIT = 10 * 60 + 30; // 10分30秒

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            if (video.currentTime >= TIME_LIMIT) {
                video.pause();
                video.currentTime = TIME_LIMIT;
            }
        };

        const handleSeeking = () => {
            if (video.currentTime > TIME_LIMIT) {
                video.currentTime = TIME_LIMIT;
            }
        };

        const handlePlay = (e) => {
            // 只有当前时间超过限制时才阻止播放
            if (video.currentTime >= TIME_LIMIT) {
                e.preventDefault();
                video.pause();
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('seeking', handleSeeking);
        video.addEventListener('play', handlePlay);

        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('seeking', handleSeeking);
            video.removeEventListener('play', handlePlay);
        };
    }, []);

    return (
        <video 
            ref={videoRef}
            controls 
            width="100%" 
            height="400"
            src={src}
        />
    );
};

export default VideoPlayer;