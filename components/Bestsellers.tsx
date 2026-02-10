import React from 'react';

interface Product{
  id: number;
  image: string;
  gradient: string;
  title: string;
  description: string;
  price: string;
  
}
const BestSellers = () => {
  const products:Product[] = [
    {
      id: 1,
      image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770126013/IMG_20260201_081118_hkniu0.jpg",
   
      gradient: 'from-indigo-300 via-indigo-500 to-indigo-400',
      title: '100k 3D Facts Reels Bundle Create Viral Content in Minutes – No Editing Needed',
     
      description: 'Transform your content with professional animations',
      price: 'Rs. 199.00',
      
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770126028/IMG_20260201_081732_kxw3hz.png",
   
      gradient: 'from-black-400 via-black-500 to-black-600',
      title: '10k Animated Gym Reels Bundle – No Editing Needed',
      description: 'Instant downloads, unlimited usage rights',
      price: 'Rs. 149.00',
      
    },
    
    {
      id: 3,
      image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770125999/IMG_20260201_081153_xllbzo.jpg",

      gradient: 'from-orange-900 via-orange-700 to-orange-500',
      title: "Ai Baby Podcast Reels Bundle (No copyright issues | Instant Download)",
    
      description: 'Instant downloads, unlimited usage rights',
      price: 'Rs. 149.00',
      
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770125927/IMG_20260201_082612_mjqo5w.png",
         
      gradient: 'from-gray-900 via-#12121A to-#12121A',
      title:"Mega All In One Reels Bundle Pack (No copyright issues | Instant Download)",
    
      description: 'Premium quality assets for serious creators',
      price: 'Rs. 149.00',
      
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