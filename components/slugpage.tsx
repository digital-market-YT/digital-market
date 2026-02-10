

"use client"

import { Product, products } from "@/lib/features";
import { useRef, useState } from "react";
import { Check, X, Zap, ArrowRight } from 'lucide-react';
import { useRouter } from "next/navigation";
import React from "react";
import TestimonialsSection2 from "./testinomials2";
import DigitalProductsFooter from "./footer";

// VideoPreviewGallery Component
interface Video {
  id: number;
  videoUrl: string;
}

interface VideoPreviewGalleryProps {
  videoUrls?: string[];
  title?: string;
  visibleCards?: number;
}

const VideoPreviewGallery: React.FC<VideoPreviewGalleryProps> = ({
  videoUrls = [],
  title = "Video Preview Gallery",
  visibleCards = 4
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
   
  // Convert videoUrls array to Video objects
  const videos: Video[] = videoUrls.length > 0 
    ? videoUrls.map((url, index) => ({
        id: index + 1,
        videoUrl: url
      }))
    :[];

  // Determine visible cards based on screen size
  const getVisibleCards = (): number => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      if (window.innerWidth < 1280) return 3; // Small desktop
      return visibleCards; // Large desktop
    }
    return visibleCards;
  };

  const [currentVisibleCards, setCurrentVisibleCards] = useState(getVisibleCards());

  // Update visible cards on resize
  React.useEffect(() => {
    const handleResize = () => {
      setCurrentVisibleCards(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevious = (): void => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => {
      const maxIndex = videos.length - currentVisibleCards;
      return prev < maxIndex ? prev + 1 : prev;
    });
  };

  const handlePlayPauseClick = (videoId: number, e: React.MouseEvent): void => {
    e.stopPropagation();
    
    const video = videoRefs.current[videoId];
    if (!video) return;

    if (playingVideo === videoId) {
      video.pause();
      setPlayingVideo(null);
    } else {
      Object.keys(videoRefs.current).forEach((key) => {
        const id = parseInt(key);
        if (id !== videoId && videoRefs.current[id]) {
          videoRefs.current[id]?.pause();
        }
      });
      
      video.play();
      setPlayingVideo(videoId);
    }
  };

  const handleVideoPlay = (videoId: number): void => {
    setPlayingVideo(videoId);
  };

  const handleVideoPause = (videoId: number): void => {
    setPlayingVideo(null);
  };

  const handleVideoEnded = (videoId: number): void => {
    setPlayingVideo(null);
  };

  const handleSkipForward = (videoId: number, e: React.MouseEvent): void => {
    e.stopPropagation();
    const video = videoRefs.current[videoId];
    if (video) {
      video.currentTime = Math.min(video.currentTime + 10, video.duration);
    }
  };

  const handleSkipBackward = (videoId: number, e: React.MouseEvent): void => {
    e.stopPropagation();
    const video = videoRefs.current[videoId];
    if (video) {
      video.currentTime = Math.max(video.currentTime - 10, 0);
    }
  };

  if (videos.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center">
        {title}
      </h1>

      <div className="relative w-full max-w-7xl">
        <button
          onClick={handlePrevious}
          className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={currentIndex === 0}
          aria-label="Previous videos"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={currentIndex >= videos.length - currentVisibleCards}
          aria-label="Next videos"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="overflow-hidden px-12 sm:px-14 md:px-16">
          <div
            className="flex gap-3 sm:gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / currentVisibleCards + (currentVisibleCards === 1 ? 3 : currentVisibleCards === 2 ? 2 : 1.5))}%)`
            }}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className={`shrink-0 ${
                  currentVisibleCards === 1 
                    ? 'w-[calc(100%-12px)]' 
                    : currentVisibleCards === 2 
                    ? 'w-[calc(50%-8px)]' 
                    : currentVisibleCards === 3 
                    ? 'w-[calc(33.333%-16px)]' 
                    : 'w-[calc(25%-18px)]'
                } min-w-50`}
              >
                <div className="relative group rounded-2xl overflow-hidden aspect-9/16 bg-gray-800 shadow-2xl hover:shadow-red-600/20 transition-shadow duration-300">
                  <video
                    ref={(el: HTMLVideoElement | null) => { videoRefs.current[video.id] = el; }}
                    className="w-full h-full object-cover"
                    onPlay={() => handleVideoPlay(video.id)}
                    onPause={() => handleVideoPause(video.id)}
                    onEnded={() => handleVideoEnded(video.id)}
                    playsInline
                    preload="metadata"
                    controls
                    controlsList="nodownload"
                    muted={false}
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-200 cursor-pointer opacity-0 group-hover:opacity-100"
                    onClick={(e) => handlePlayPauseClick(video.id, e)}
                  >
                    <div className="bg-red-600 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
                      {playingVideo === video.id ? (
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {playingVideo === video.id && (
                    <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 sm:px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <button
                        onClick={(e) => handleSkipBackward(video.id, e)}
                        className="bg-black/70 hover:bg-black/90 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-200 pointer-events-auto"
                        aria-label="Skip backward 10 seconds"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                          <text x="12" y="16" fontSize="8" textAnchor="middle" fill="white" fontWeight="bold">10</text>
                        </svg>
                      </button>
                      <button
                        onClick={(e) => handleSkipForward(video.id, e)}
                        className="bg-black/70 hover:bg-black/90 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-200 pointer-events-auto"
                        aria-label="Skip forward 10 seconds"
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"/>
                          <text x="12" y="16" fontSize="8" textAnchor="middle" fill="white" fontWeight="bold">10</text>
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 md:mt-8 gap-2">
          {Array.from({ length: Math.max(0, videos.length - currentVisibleCards + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-red-600' : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main SlugPage Component
const SlugPage = ({ slug }: { slug: string }) => {
  
  const router = useRouter()
  
  const getdata = (): Product | undefined => {
    const product = products.find((product) => product.slug === slug);
    return product
  }

  const product = getdata();
  const title = product?.name;
  const image = product?.image;
  const videoUrls = product?.videoUrls || [];
 
  const url = product?.url || '';

  if (!slug) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-400">The product you are looking for does not exist.</p>
        </div>
      </div>
    );
  }
  
  return (
    <>
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-700 border-2 border-zinc-950" />
              ))}
            </div>
            <p className="text-gray-300">19,000+ creators using our viral reels</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            1000+ READY-TO-POST
          </h1>
          
          <div className="inline-block bg-linear-to-r from-yellow-500 to-yellow-600 px-8 py-6 rounded-full mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              1000+ {title}
            </h2>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="text-primary" size={24} fill="currentColor" />
            <h3 className="text-2xl md:text-3xl font-bold">
              Grow Your Reels Page WITHOUT Showing Your Face
            </h3>
          </div>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
            Skip hours of editing. Get 1000+ high-engagement {title}, ready to post on Instagram, YouTube Shorts.
            Just download, post, and grow.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {['No Copyright Issues', '100+ Viral Reels', 'Beginner Friendly', 'Instant Download'].map((feature) => (
              <div key={feature} className="px-6 py-3 border-2 border-yellow-500 rounded-full text-yellow-500 font-semibold">
                {feature}
              </div>
            ))}
          </div>

          <button onClick={() => { router.push(url) }} className="cursor-pointer bg-linear-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold px-12 py-5 rounded-full hover:scale-105 transition-transform mb-4">
            Download Viral Reels Bundle
          </button>
          
          <p className="text-gray-400">Instant access • Lifetime use</p>
        </div>
      </section>

      <section className="py-10">
        <div>
          <img src={image} alt={title} className="mx-auto rounded-xl w-full max-w-2xl" />
        </div>
        <div>
          <VideoPreviewGallery videoUrls={videoUrls} />
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block border border-yellow-600 text-yellow-500 px-6 py-2 rounded-full text-sm font-bold mb-6">
              EVERYTHING INCLUDED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">What You Get</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                title,
                description: 'MP4 format, perfect for Instagram, YouTube Shorts & TikTok'
              },
              {
                title: 'High Quality Visuals',
                description: 'Professional AI animations designed to grab attention and boost engagement'
              },
              {
                title: 'Instant Google Drive Access',
                description: 'Download immediately after purchase. No delays.'
              },
              {
                title: 'Lifetime Access',
                description: 'No expiration. Re-download anytime, forever.'
              }
            ].map((item, index) => (
              <div key={index} className="border-2 border-yellow-700 rounded-2xl p-6 bg-zinc-900/50">
                <div className="bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Content?
            </h2>
            <p className="text-yellow-500 text-xl mb-8">
              Join 17,000+ creators who have already upgraded their content game.
            </p>
            
            <button onClick={() => { router.push(url) }} className="bg-linear-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold px-12 py-5 rounded-full hover:scale-105 transition-transform mb-6">
              Get 1000+ viral Reels Bundle
            </button>

            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>Instant Download</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-500" size={20} />
                <span>Ready for Monetization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-yellow-500 text-sm font-bold mb-4">SIMPLE PRICING</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Instant Access</h2>
          <p className="text-gray-400 text-lg mb-8">
            Download all 100+ premium ready to post reels immediately after purchase. No waiting. No subscriptions.
          </p>

          <div className="inline-block bg-linear-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full font-bold mb-12">
            Limited Time Offer
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <div className="text-blue-400 text-sm font-bold mb-4">REGULAR PRICE</div>
              <div className="text-5xl font-bold text-gray-500 line-through mb-6">₹11,299</div>
              <div className="bg-zinc-800 text-gray-400 px-6 py-2 rounded-full inline-block">Normal</div>
            </div>

            <div className="bg-linear-to-br from-green-900/50 to-green-800/50 rounded-2xl p-8 border-2 border-green-500">
              <div className="text-green-400 text-sm font-bold mb-4">SPECIAL PRICE</div>
              <div className="text-6xl font-bold text-green-400 mb-6">
                {slug==="3d-knowledge-fact-reels-bundle" ? "₹199" : "₹149"}
              </div>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl mb-3 transition-colors">
                Save ₹11,230
              </button>
              <div className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold">
                Huge Discount
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-green-500 text-sm font-bold mb-4">WHY CHOOSE THIS REELS BUNDLE</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Before vs After Using 1000+ Ready-to-Post Reels
            </h2>
            <p className="text-gray-400 text-lg">
              Stop wasting time creating content. Scale your Instagram growth with instant, viral-ready Reels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold mb-6">Before Using This Reels Bundle</h3>
              <div className="space-y-4">
                {[
                  'Spending hours searching or editing reels',
                  'Struggling with low views & poor engagement',
                  'Running out of content ideas frequently',
                  'Inconsistent posting due to lack of content'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="text-red-500 shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-linear-to-br from-green-900/30 to-green-800/30 rounded-2xl p-8 border-2 border-green-600 relative">
              <ArrowRight className="absolute -left-12 top-1/2 -translate-y-1/2 text-green-500 hidden lg:block" size={48} />
              <h3 className="text-2xl font-bold mb-6">After Using 1000+ Ready-to-Post Reels</h3>
              <div className="space-y-4">
                {[
                  'No editing needed — just upload & post',
                  title,
                  'Works on Instagram, Facebook & YouTube Shorts',
                  'Daily posting made easy for years'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="text-yellow-500 shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Content?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join thousands of creators growing faster with ready-made viral reels.
            </p>
            
            <button onClick={() => { router.push(url) }} className="bg-linear-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold px-12 py-5 rounded-full hover:scale-105 transition-transform">
              Get Instant Access to 1000+ Reels Now
            </button>
          </div>
        </div>
      </section>

      {/* How the Process Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-yellow-500 text-sm font-bold mb-4">JUST 3 EASY STEPS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How the Process Works for You
            </h2>
            <p className="text-gray-400 text-lg">
              Follow these 3 simple steps and get instant access to 10000+ Reels bundle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                title: 'Select 10000+ Reels Bundle',
                description: 'Choose the 10000+ Anime Edit Reels Bundle , All Created Using Ai'
              },
              {
                number: '2',
                title: 'Pay Securely',
                description: 'Complete your purchase using UPI, Credit/Debit Card, Net Banking, or Wallets 100% secure checkout.'
              },
              {
                number: '3',
                title: 'Get Instant Access',
                description: 'Receive instant access to your reels. Download, upload & start posting immediately.'
              }
            ].map((step) => (
              <div key={step.number} className="bg-zinc-900 rounded-2xl p-8 text-center border border-zinc-800">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900 rounded-3xl p-12 text-center border border-zinc-800">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              It takes less than 2 minutes to unlock unlimited content.
            </p>

            <button onClick={() => { router.push(url) }} className="bg-linear-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-xl font-bold px-12 py-5 rounded-full transition-all mb-8">
              Get 10000+ Ready-to-Post Reels
            </button>

            <div className="flex items-center justify-center gap-8 flex-wrap">
              {['Instant Download', 'Lifetime Access', 'Ready for Monetization'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="text-red-500" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Download Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Download Now?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get <span className="text-white font-bold">instant access</span> to <span className="text-white font-bold">100+ ready-to-post reels</span>. No editing. No copyright issues. Just upload & grow.
          </p>

          <button onClick={() => { router.push(url) }} className="bg-linear-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold px-12 py-5 rounded-full hover:scale-105 transition-transform mb-8">
            Get 1000+ {title} Bundle
          </button>

          <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
            {['Instant Download', 'Lifetime Access', 'Ready for Monetization'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="bg-yellow-500 w-6 h-6 rounded-full flex items-center justify-center">
                  <Check className="text-black" size={16} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <p className="text-gray-400 mb-4">We accept</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {['UPI', 'Credit Card', 'Debit Card', 'Net Banking', 'Wallets'].map((method) => (
                <div key={method} className="bg-zinc-900 px-6 py-3 rounded-lg border border-zinc-800">
                  {method}
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-500 text-sm">
            Secure checkout powered by SuperProfile. Your payment is fully protected.
          </p>
        </div>
      </section>
      <TestimonialsSection2/>
      <DigitalProductsFooter/>
      
    </div>
    </>
  )
}

export default SlugPage;