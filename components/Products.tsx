
"use client"


import Link from 'next/link';
import React from 'react';

interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
}

const products: Product[] = [
  // (No copyright issues | Instant Download)

  { id: 1,
    name: "Ai Baby Fruit Eating reels Bundle (No copyright issues | Instant Download)",
    slug: "ai-baby-fruit-eating-reels-bundle",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770126042/IMG_20260201_081511_wziqfe.png",
  
    price: 149,
    
  },
  {  id:2,
    name: "3d Knowledge Fact Reels Bundle (No copyright issues | Instant Download)",
    slug: "3d-knowledge-fact-reels-bundle",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770126013/IMG_20260201_081118_hkniu0.jpg",
   
    price: 199
  
  },
  { id: 3,
    name: "Ai Baby Podcast Reels Bundle (No copyright issues | Instant Download)",
    slug: "ai-baby-podcast-reels-bundle",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770125999/IMG_20260201_081153_xllbzo.jpg",

    price: 199,
   
  },
  {
    id: 4,
    name: "Ai Story Reels Bundle (No copyright issues | Instant Download)",
    slug: "ai-story-reels-bundle",
    image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770125994/IMG_20260201_081451_kdz9zf.jpg",
    
    price: 149,
  
  },
  { id: 5,
    name: "Ai Talking Objects Reels Bundle (No copyright issues | Instant Download)",
    slug: "ai-talking-objects-reels-bundle",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770125972/IMG_20260201_081543_ijdvju.jpg",
   
    price: 149,
  
  },
  { id: 6,
    name: "Anime Reels Edit Bundle (No copyright issues | Instant Download)",
    slug: "anime-reels-edit-bundle",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770125958/IMG_20260201_081709_dc1cr5.jpg",
   
    price: 149,
   
  },
  { id: 7,
    name: "3D-Animated Gym Reels Bundle (No copyright issues | Instant Download)",
    slug: "3d-animated-gym-reels-bundle",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770126028/IMG_20260201_081732_kxw3hz.png",
   
    price: 149,
   
  },
  { id: 8,
    name: "Glass Cutting AI ASMR Reels Bundle (No copyright issues | Instant Download)",
    slug: "glass-cutting-ai-asmr-reels-bundle",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770125993/IMG_20260201_081920_xq8v8d.png",
    
    price: 149,
   
  },
  { id: 9,
    name: "Resin Flooring Timelapse Reels Bundle (No copyright issues | Instant Download)",
    slug: "resin-flooring-timelapse-reels-bundle",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770125943/IMG_20260201_082008_gwbpyx.png",
   
    price: 149,
  
  },
  { id: 10,
    name: "Viral Ai Dancing Reels Bundle (No copyright issues | Instant Download)",
    slug: "viral-ai-dancing-reels-bundle",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770125931/IMG_20260201_082043_dbxu5y.png",
   
    price: 149,
   
  },
  { id: 11,
    name: "4K Car Crash Reels Bundle (No copyright issues | Instant Download)",
    slug: "4k-car-crash-reels-bundle",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770126049/1769913020272_uyowt9.png",
   
    price: 200,
   
  },
  { id: 12,
    name: "200k-ready-to-post-reels-bundle-52-viral-niches (No copyright issues | Instant Download)",
    slug: "200k-ready-to-post-reels-bundle-52-viral-niches",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770125992/IMG_20260201_082405_ptq3l7.png",
    
    price: 149,
   
  },
  { id: 13,
    name: "Hd Video Clips Pack For Creators (No copyright issues | Instant Download)",
    slug: "hd-video-clips-pack-for-creators",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770126044/1769913023999_ytmgoj.png",
    
    price: 149,
    
  },
  { id: 14,
    name: "Ai Animals Reels Bundle (No copyright issues | Instant Download)",
    slug: "ai-animals-reels-bundle",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770125953/IMG_20260201_082440_pjeexd.png",
   
    price: 149,
    
  },
  { id: 15,
    name: "Telugu Ai Hulk-Videos (No copyright issues | Instant Download)",
    slug: "telugu-ai-hulk-videos",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770125991/IMG_20260201_082525_jk1jsz.png",
    
    price: 149,
   
  },
  { id: 16,
    name: "1500-Motion Graphics Reels Bundle (No copyright issues | Instant Download)",
    slug: "1500-motion-graphics-reels-bundle",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770126050/1769912985519_jjloit.png",
   
    price: 149,
    
  },
  { id: 17,
    name: "1500-Mad-Scientist Reels Bbundle (No copyright issues | Instant Download)",
    slug: "1500-mad-scientist-reels-bbundle",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770125947/IMG_20260201_082650_vfkfvp.png",
    
    price: 149,
    
  },
  { id: 18,
    name: "Mega All In One Reels Bundle Pack (No copyright issues | Instant Download)",
    slug: "mega-all-in-one-reels-bundle-pack",
    image: "https://res.cloudinary.com/dkwabt89v/image/upload/v1770125927/IMG_20260201_082612_mjqo5w.png",
   
    price: 149,
   
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
                <Link href={`/products/${product.slug}`}>
                <img 
                  src={product.image} 

                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                </Link>
              </div>
              
              <div className="p-3 md:p-4">
                <Link href={`/products/${product.slug}`} className="text-md tracking-wide font-bold md:text-lg mb-3 line-clamp-2 text-white">
                  {product.name}
                </Link>
                
                <div className="flex items-center flex-col gap-1 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs md:text-sm line-through text-white">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>

                    
                    <span className="text-lg md:text-xl font-bold text-white font-sans">
                      ₹{product.price.toLocaleString('en-IN')}
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







