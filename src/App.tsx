import React from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { VideoPlayer } from './components/video/VideoPlayer';
import { useVideoStore } from './store/videoStore';

function App() {
  const { videos, currentVideoIndex } = useVideoStore();

  return (
    <div className="h-screen w-full bg-black">
      <Sidebar />
      <main className="ml-16">
        {videos.map((video, index) => (
          <VideoPlayer
            key={video.id}
            video={video}
            isActive={index === currentVideoIndex}
          />
        ))}
      </main>
    </div>
  );
}

export default App;