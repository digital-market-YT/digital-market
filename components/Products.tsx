
"use client"


import Link from 'next/link';
import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  originalPrice: number;
  discountPrice: number;
  discount: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "High-quality sound with noise cancellation and 30-hour battery life",
    image: "/3d-facts-reels.png",
    originalPrice: 9999,
    discountPrice: 99,
    discount: 90
    
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    description: "Advanced fitness tracking with heart rate monitor and GPS",
    image: "/aianimalsreels.png",
    originalPrice: 999,
    discountPrice: 99,
    discount: 25
  },
  {
    id: 3,
    name: "Ultra HD Camera",
    description: "Professional 4K camera with image stabilization",
    image: "/aidancingreels.png",    
    originalPrice: 66583,
    discountPrice: 49917,
    discount: 25
  },
  {
    id: 4,
    name: "Laptop Stand",
    description: "Ergonomic aluminum stand for better posture and cooling",
    image: "/Aistoryreels.png",
    originalPrice: 6583,
    discountPrice: 4083,
    discount: 38
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    description: "RGB backlit gaming keyboard with tactile switches",
    image: "/animatedgymreels.png",
    originalPrice: 12416,
    discountPrice: 8249,
    discount: 34
  },
  {
    id: 6,
    name: "Wireless Mouse",
    description: "Precision wireless mouse with customizable buttons",
    image: "/animereels.png",    
    originalPrice: 5749,
    discountPrice: 3249,
    discount: 43
  },
  {
    id: 7,
    name: "USB-C Hub",
    description: "7-in-1 multiport adapter with HDMI and SD card reader",
    image: "/babyfruitsreels.png",    
    originalPrice: 4916,
    discountPrice: 2833,
    discount: 42
  },
  {
    id: 8,
    name: "Portable SSD",
    description: "1TB external storage with blazing fast transfer speeds",
    image: "/babypodcastreels.png",
    originalPrice: 14916,
    discountPrice: 10749,
    discount: 28
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    description: "Waterproof speaker with 360° sound and 12-hour playtime",
    image: "/carsurvivalreels.png",
    originalPrice: 8249,
    discountPrice: 5749,
    discount: 30
  },
  {
    id: 10,
    name: "Phone Stand",
    description: "Adjustable aluminum stand for desk and bedside use",
    image: "/glasscuttingreels.png",
    originalPrice: 2416,
    discountPrice: 1583,
    discount: 34
  },
  {
    id: 11,
    name: "Wireless Charger",
    description: "Fast charging pad compatible with all Qi-enabled devices",
    image: "/Hdvideoclips.png",
    originalPrice: 3749,
    discountPrice: 2499,
    discount: 33
  },
  {
    id: 12,
    name: "Gaming Headset",
    description: "Immersive 7.1 surround sound with noise-canceling microphone",
    image: "/hulkvideos.png",
    originalPrice: 12499,
    discountPrice: 8749,
    discount: 30
  },
  {
    id: 13,
    name: "Smart Light Bulb",
    description: "WiFi-enabled RGB bulb with voice control compatibility",
    image: "/madscientistreels.png",
    originalPrice: 2083,
    discountPrice: 1249,
    discount: 40
  },
  {
    id: 14,
    name: "Fitness Tracker",
    description: "Sleep monitoring and step counting with 7-day battery",
    image:"/megabundlereels.png",
    originalPrice: 4999,
    discountPrice: 3499,
    discount: 30
  },
  {
    id: 15,
    name: "Laptop Backpack",
    description: "Water-resistant backpack with USB charging port",
    image: "/motiongraphicreels.png",
    originalPrice: 4166,
    discountPrice: 2499,
    discount: 40
  },
  {
    id: 16,
    name: "Laptop Backpack",
    description: "Water-resistant backpack with USB charging port",
    image: "/resinflooringreels.png",
    originalPrice: 4166,
    discountPrice: 2499,
    discount: 40
  },
    {
    id: 17,
    name: "Laptop Backpack",
    description: "Water-resistant backpack with USB charging port",
    image: "/videoeditingbundle.png",
    originalPrice: 4166,
    discountPrice: 2499,
    discount: 40
  }
  
];

export default function ProductsPage() {


  return (
    <div className="min-h-screen font-sans transition-colors bg-[#12121A]">
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#C77DFF]">
            Explore Our Products
          </h2>
          <p className="text-base text-3xl font-bold md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ffffff]">
            Discover amazing deals on premium tech products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className=" group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-[#171420]">
              <div className="relative overflow-hidden aspect-video">
                <Link href={`/products/${product.name}`}>
                <img 
                  src={product.image} 

                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                </Link>
              </div>
              
              <div className="p-3 md:p-4">
                <Link href={`/products/${product.name}`} className="text-md tracking-wide font-bold md:text-lg mb-3 line-clamp-2 text-white">
                  {product.description}
                </Link>
                
                <div className="flex items-center flex-col gap-1 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs md:text-sm line-through text-white">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-lg md:text-xl font-bold text-white font-sans">
                      ₹{product.discountPrice.toLocaleString('en-IN')}
                    </span>
                    
                  </div>
                </div>
                
                
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}









// import React from 'react';

// const ProductsPage = () => {
//   const products = [
//     {
//       id: 1,
//       image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80',
//       title: '100+ AI Baby Fruit Eating Reels Bundle (No Copyright | Viral Ready)',
//       originalPrice: 'Rs. 999.00',
//       salePrice: 'Rs. 99.00',
//       badge: '₹99',
//       saleTag: true
//     },
//     {
//       id: 2,
//       image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
//       title: '1000+ 3D Knowledge Fact Reels Bundle (Viral & Ready-to-Post)',
//       originalPrice: 'Rs. 999.00',
//       salePrice: 'Rs. 99.00',
//       badge: '₹99',
//       saleTag: true
//     },
//     {
//       id: 3,
//       image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
//       title: '1000+ AI Baby Podcast Reel Bundle (Ready-to-Post Viral Reels)',
//       originalPrice: 'Rs. 999.00',
//       salePrice: 'Rs. 69.00',
//       badge: '₹69',
//       saleTag: true
//     },
//     {
//       id: 4,
//       image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
//       title: '1000+ AI Story Reels Bundle (No Copyright | Viral & Faceless)',
//       originalPrice: 'Rs. 999.00',
//       salePrice: 'Rs. 99.00',
//       badge: '₹99',
//       saleTag: true
//     },
//     {
//       id: 5,
//       image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80',
//       title: '10000+ Anime Edit Reels Bundle',
//       originalPrice: 'Rs. 999.00',
//       salePrice: 'Rs. 99.00',
//       badge: '₹99',
//       saleTag: true
//     },
//     {
//       id: 6,
//       image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
//       title: '1500+ 3D Animated Gym Reels',
//       originalPrice: 'Rs. 999.00',
//       salePrice: 'Rs. 99.00',
//       badge: '₹99',
//       saleTag: true
//     },
//     {
//       id: 7,
//       image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
//       title: '1500+ Glass cutting AI ASMR Reels',
//       originalPrice: 'Rs. 999.00',
//       salePrice: 'Rs. 99.00',
//       badge: '₹99',
//       saleTag: true
//     },
//     {
//       id: 8,
//       image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
//       title: '900+ MAD SCIENTIST REELS BUNDLE',
//       originalPrice: 'Rs. 999.00',
//       salePrice: 'Rs. 99.00',
//       badge: 'Trendy Bundle',
//       saleTag: false
//     }
//   ];

//   return (

//     <div className="min-h-screen bg-zinc-950 text-white py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Featured products
//           </h1>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-zinc-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
//             >
//               {/* Product Image */}
//               <div className="relative">
//                 <div className="aspect-[3/4] bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 overflow-hidden">
//                   <img 
//                     src={product.image} 
//                     alt={product.title}
//                     className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
//                   />
//                 </div>
                
//                 {/* Badges */}
//                 <div className="absolute top-3 left-3 flex gap-2">
//                   {product.saleTag && (
//                     <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
//                       Sale
//                     </span>
//                   )}
//                 </div>
                
//                 <div className="absolute top-3 right-3">
//                   <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
//                     {product.badge}
//                   </span>
//                 </div>
//               </div>

//               {/* Product Details */}
//               <div className="p-4">
//                 <h3 className="text-base font-semibold mb-3 line-clamp-2 min-h-[3rem]">
//                   {product.title}
//                 </h3>

//                 {/* Price */}
//                 <div className="flex items-center gap-2">
//                   <span className="text-gray-500 line-through text-sm">
//                     {product.originalPrice}
//                   </span>
//                   <span className="text-xl font-bold text-white">
//                     {product.salePrice}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;