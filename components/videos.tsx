// 'use client';

// import React, { useState, useRef } from 'react';

// interface Video {
//   id: number;
//   videoUrl: string;
// }

// interface VideoPreviewGalleryProps {
//   videos?: Video[];
//   title?: string;
//   visibleCards?: number;
// }

// const VideoPreviewGallery: React.FC<VideoPreviewGalleryProps> = ({
//   videos: customVideos,
//   title = "Video Preview Gallery",
//   visibleCards = 4
// }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [playingVideo, setPlayingVideo] = useState<number | null>(null);
//   const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

//   // Default videos with actual URLs
//   const defaultVideos: Video[] = [
//     {
//       id: 1,
//       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
//     },
//     {
//       id: 2,
//       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
//     },
//     {
//       id: 3,
//       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
//     },
//     {
//       id: 4,
//       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
//     },
//     {
//       id: 5,
//       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
//     },
//     {
//       id: 6,
//       videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
//     }
//   ];

//   const videos = customVideos || defaultVideos;

//   // Determine visible cards based on screen size
//   const getVisibleCards = (): number => {
//     if (typeof window !== 'undefined') {
//       if (window.innerWidth < 640) return 1; // Mobile
//       if (window.innerWidth < 1024) return 2; // Tablet
//       if (window.innerWidth < 1280) return 3; // Small desktop
//       return visibleCards; // Large desktop
//     }
//     return visibleCards;
//   };

//   const [currentVisibleCards, setCurrentVisibleCards] = useState(getVisibleCards());

//   // Update visible cards on resize
//   React.useEffect(() => {
//     const handleResize = () => {
//       setCurrentVisibleCards(getVisibleCards());
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handlePrevious = (): void => {
//     setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
//   };

//   const handleNext = (): void => {
//     setCurrentIndex((prev) => {
//       const maxIndex = videos.length - currentVisibleCards;
//       return prev < maxIndex ? prev + 1 : prev;
//     });
//   };

//   const handlePlayPauseClick = (videoId: number, e: React.MouseEvent): void => {
//     e.stopPropagation();
    
//     const video = videoRefs.current[videoId];
//     if (!video) return;

//     if (playingVideo === videoId) {
//       // Pause if currently playing
//       video.pause();
//       setPlayingVideo(null);
//     } else {
//       // Pause all other videos
//       Object.keys(videoRefs.current).forEach((key) => {
//         const id = parseInt(key);
//         if (id !== videoId && videoRefs.current[id]) {
//           videoRefs.current[id]?.pause();
//         }
//       });
      
//       // Play clicked video
//       video.play();
//       setPlayingVideo(videoId);
//     }
//   };

//   const handleVideoPlay = (videoId: number): void => {
//     setPlayingVideo(videoId);
//   };

//   const handleVideoPause = (videoId: number): void => {
//     setPlayingVideo(null);
//   };

//   const handleVideoEnded = (videoId: number): void => {
//     setPlayingVideo(null);
//   };

//   const handleSkipForward = (videoId: number, e: React.MouseEvent): void => {
//     e.stopPropagation();
//     const video = videoRefs.current[videoId];
//     if (video) {
//       video.currentTime = Math.min(video.currentTime + 10, video.duration);
//     }
//   };

//   const handleSkipBackward = (videoId: number, e: React.MouseEvent): void => {
//     e.stopPropagation();
//     const video = videoRefs.current[videoId];
//     if (video) {
//       video.currentTime = Math.max(video.currentTime - 10, 0);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
//       {/* Title */}
//       <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center">
//         {title}
//       </h1>

//       {/* Gallery Container */}
//       <div className="relative w-full max-w-7xl">
//         {/* Previous Button */}
//         <button
//           onClick={handlePrevious}
//           className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
//           disabled={currentIndex === 0}
//           aria-label="Previous videos"
//         >
//           <svg
//             className="w-5 h-5 sm:w-6 sm:h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>

//         {/* Next Button */}
//         <button
//           onClick={handleNext}
//           className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
//           disabled={currentIndex >= videos.length - currentVisibleCards}
//           aria-label="Next videos"
//         >
//           <svg
//             className="w-5 h-5 sm:w-6 sm:h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>

//         {/* Video Cards Container */}
//         <div className="overflow-hidden px-12 sm:px-14 md:px-16">
//           <div
//             className="flex gap-3 sm:gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * (100 / currentVisibleCards + (currentVisibleCards === 1 ? 3 : currentVisibleCards === 2 ? 2 : 1.5))}%)`
//             }}
//           >
//             {videos.map((video) => (
//               <div
//                 key={video.id}
//                 className={`flex-shrink-0 ${
//                   currentVisibleCards === 1 
//                     ? 'w-[calc(100%-12px)]' 
//                     : currentVisibleCards === 2 
//                     ? 'w-[calc(50%-8px)]' 
//                     : currentVisibleCards === 3 
//                     ? 'w-[calc(33.333%-16px)]' 
//                     : 'w-[calc(25%-18px)]'
//                 } min-w-[200px]`}
//               >
//                 <div 
//                   className="relative group rounded-2xl overflow-hidden aspect-[9/16] bg-gray-800 shadow-2xl hover:shadow-red-600/20 transition-shadow duration-300"
//                 >
//                   {/* Video Element with Controls */}
//                   <video
//                     ref={(el: HTMLVideoElement | null) => { videoRefs.current[video.id] = el; }}
//                     className="w-full h-full object-cover"
//                     onPlay={() => handleVideoPlay(video.id)}
//                     onPause={() => handleVideoPause(video.id)}
//                     onEnded={() => handleVideoEnded(video.id)}
//                     playsInline
//                     preload="metadata"
//                     controls
//                     controlsList="nodownload"
//                     muted
//                   >
//                     <source src={video.videoUrl} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>

//                   {/* Play/Pause Button Overlay - Always visible, changes icon based on state */}
//                   <div 
//                     className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-200 cursor-pointer opacity-0 group-hover:opacity-100"
//                     onClick={(e) => handlePlayPauseClick(video.id, e)}
//                   >
//                     <div className="bg-red-600 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
//                       {playingVideo === video.id ? (
//                         // Pause Icon
//                         <svg
//                           className="w-6 h-6 sm:w-8 sm:h-8 text-white"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
//                         </svg>
//                       ) : (
//                         // Play Icon
//                         <svg
//                           className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="M8 5v14l11-7z" />
//                         </svg>
//                       )}
//                     </div>
//                   </div>

//                   {/* Skip Controls - Show on hover when playing */}
//                   {playingVideo === video.id && (
//                     <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 sm:px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
//                       <button
//                         onClick={(e) => handleSkipBackward(video.id, e)}
//                         className="bg-black/70 hover:bg-black/90 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-200 pointer-events-auto"
//                         aria-label="Skip backward 10 seconds"
//                       >
//                         <svg
//                           className="w-5 h-5 sm:w-6 sm:h-6"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
//                           <text x="12" y="16" fontSize="8" textAnchor="middle" fill="white" fontWeight="bold">10</text>
//                         </svg>
//                       </button>
//                       <button
//                         onClick={(e) => handleSkipForward(video.id, e)}
//                         className="bg-black/70 hover:bg-black/90 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-200 pointer-events-auto"
//                         aria-label="Skip forward 10 seconds"
//                       >
//                         <svg
//                           className="w-5 h-5 sm:w-6 sm:h-6"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"/>
//                           <text x="12" y="16" fontSize="8" textAnchor="middle" fill="white" fontWeight="bold">10</text>
//                         </svg>
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Progress Indicator */}
//         <div className="flex justify-center mt-6 md:mt-8 gap-2">
//           {Array.from({ length: Math.max(0, videos.length - currentVisibleCards + 1) }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 index === currentIndex 
//                   ? 'w-8 bg-red-600' 
//                   : 'w-2 bg-gray-600 hover:bg-gray-500'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPreviewGallery;