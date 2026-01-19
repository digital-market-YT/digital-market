import React from 'react';
import { Film, Video, Heart, Wrench } from 'lucide-react';

const CollectionsPage = () => {
  const collections = [
    {
      icon: Film,
      title: 'Reels Bundles',
      description: 'Short-form video packs designed for engagement and growth'
    },
    {
      icon: Video,
      title: 'Video Editing Assets',
      description: 'Professional presets, effects, and editing resources'
    },
    {
      icon: Heart,
      title: 'Wedding Products',
      description: 'Premium templates and assets for wedding creators'
    },
    {
      icon: Wrench,
      title: 'Creator Tools',
      description: 'All-in-one digital tools for content creators and editors'
    }
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '1000+', label: 'Digital Assets' },
    { value: '10,000+', label: 'Customers' },
    { value: '25+', label: 'Niches' }
  ];

  return (
    <div className="min-h-screen bg-[#12121A] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Explore Our Collections
          </h1>
          <p className="text-gray-400 text-lg">
            Professional digital products for creators
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {collections.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={64} strokeWidth={1.5} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;