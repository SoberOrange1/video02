import React from 'react';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
    return (
        <div className="app">
            <VideoPlayer 
                src="https://surgvision.s3.ap-northeast-3.amazonaws.com/cropped_3.mp4"
            />
        </div>
    );
};

export default App;