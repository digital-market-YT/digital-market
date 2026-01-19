import React from 'react';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      image:"/3d-facts-reels.png",
      gradient: 'from-indigo-300 via-indigo-500 to-indigo-400',
      title: '1500+ Motion Graphics Reels Bundle Create Viral Content in Minutes – No Editing Needed',
      description: 'Transform your content with professional animations',
      price: 'Rs. 99.00',
      badge: null
    },
    {
      id: 2,
      image: "/animatedgymreels.png",
      gradient: 'from-black-400 via-black-500 to-black-600',
      title: 'UltraVault 30M: The Ultimate Digital Empire Bundle',
      description: 'Instant downloads, unlimited usage rights',
      price: 'Rs. 99.00',
      badge: 'ALL IN ONE BUNDLE'
    },
    
    {
      id: 3,
      image: "/motiongraphicreels.png",
      gradient: 'from-gray-600 via-gray-500 to-gray-400',
      title: 'UltraVault 30M: The Ultimate Digital Empire Bundle',
      description: 'Instant downloads, unlimited usage rights',
      price: 'Rs. 99.00',
      badge: 'ALL IN ONE BUNDLE'
    },
    {
      id: 4,
      image: "/videoeditingbundle.png",      
      gradient: 'from-orange-900 via-orange-700 to-orange-500',
      title: 'All-In-One Video Editing Master Pack – 1250GB of Premium Assets ₹99',
      description: 'Premium quality assets for serious creators',
      price: 'Rs. 99.00',
      badge: 'All-In-One Video Editing Master Pack - 1250GB'
    }
  ];

  return (
    <div className="min-h-screen bg-[#12121A] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Best Sellers
          </h1>
          <p className="text-gray-400 text-lg">
            Proven products trusted by thousands of creators
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col"
            >
              {/* Product Image with Gradient */}
              <div className={`relative h-64 bg-gradient-to-br ${product.gradient} p-4 flex items-center justify-center`}>
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </div>
                )}
                <div className="w-full h-full bg-black/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover rounded-xl opacity-90"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 line-clamp-3">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-1">
                  {product.description}
                </p>

                {/* Price */}
                <div className="text-3xl font-bold text-pink-500 mb-4">
                  {product.price}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Get Instant Access
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;