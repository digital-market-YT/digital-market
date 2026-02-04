'use client';

import React, { useState } from 'react';

interface Video {
  id: number;
  thumbnail: string;
  caption?: string;
  videoUrl?: string;
}

interface VideoPreviewGalleryProps {
  videos?: Video[];
  title?: string;
  visibleCards?: number;
}

const VideoPreviewGallery: React.FC<VideoPreviewGalleryProps> = ({
  videos: customVideos,
  title = "Video Preview Gallery",
  visibleCards = 4
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Default videos if none provided
  const defaultVideos: Video[] = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=711&fit=crop",
      caption: "pull them apart",
      videoUrl: ""
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=711&fit=crop",
      caption: "",
      videoUrl: ""
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=711&fit=crop",
      caption: "",
      videoUrl: ""
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=711&fit=crop",
      caption: "",
      videoUrl: ""
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=400&h=711&fit=crop",
      caption: "",
      videoUrl: ""
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1498049860654-af1a5c566876?w=400&h=711&fit=crop",
      caption: "",
      videoUrl: ""
    }
  ];

  const videos = customVideos || defaultVideos;

  const handlePrevious = (): void => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev < videos.length - visibleCards ? prev + 1 : prev));
  };

  const handleVideoClick = (video: Video): void => {
    if (video.videoUrl) {
      // Handle video playback
      console.log('Play video:', video.videoUrl);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
      {/* Title */}
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-12 text-center">
        {title}
      </h1>

      {/* Gallery Container */}
      <div className="relative w-full max-w-7xl">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={currentIndex === 0}
          aria-label="Previous videos"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={currentIndex >= videos.length - visibleCards}
          aria-label="Next videos"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Video Cards Container */}
        <div className="overflow-hidden px-16">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards + 1.5)}%)`
            }}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex-shrink-0 w-[calc(25%-18px)] min-w-[250px]"
              >
                <div 
                  className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-[9/16] bg-gray-800 shadow-2xl hover:shadow-red-600/20 transition-shadow duration-300"
                  onClick={() => handleVideoClick(video)}
                >
                  {/* Video Thumbnail - 9:16 aspect ratio enforced */}
                  <img
                    src={video.thumbnail}
                    alt={video.caption || `Video ${video.id}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors duration-200">
                    <div className="bg-red-600 rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Caption */}
                  {video.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-8">
                      <p className="text-white text-lg font-medium drop-shadow-lg">
                        {video.caption}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.max(0, videos.length - visibleCards + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-red-600' 
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPreviewGallery;