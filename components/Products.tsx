
"use client"


import Link from 'next/link';


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
    image: "https://pbs.twimg.com/media/HCUBlGIagAAtO_6.jpg",
    price: 99,
    
  },
  {  id:2,
    name: "3d Knowledge Fact Reels Bundle (No copyright issues | Instant Download)",
    slug: "3d-knowledge-fact-reels-bundle",
    image: "https://pbs.twimg.com/media/HCUBlF0bEAQC-fW.jpg",
    
    price: 199
  
  },
  { id: 3,
    name: "Ai Baby Podcast Reels Bundle (No copyright issues | Instant Download)",
    
    slug: "ai-baby-podcast-reels-bundle",
    image: "https://pbs.twimg.com/media/HCUBlF3bsAAhO8f.jpg",
    price: 99,
   
  },
  {
    id: 4,
    name: "Ai Story Reels Bundle (No copyright issues | Instant Download)",
    slug: "ai-story-reels-bundle",
    image:"https://pbs.twimg.com/media/HCUBlGHaEAAyYOn.jpg",
    price: 99,
  
  },
  { id: 5,
    name: "Ai Talking Objects Reels Bundle (No copyright issues | Instant Download)",
    slug: "ai-talking-objects-reels-bundle",
    image: "https://pbs.twimg.com/media/HCUBbovbEAEEKIj.jpg",
    price: 99,
  
  },
  { id: 6,
    name: "Anime Reels Edit Bundle (No copyright issues | Instant Download)",
    slug: "anime-reels-edit-bundle",
    image: "https://pbs.twimg.com/media/HCUBbotbEAQQelB.jpg",
    price: 99,
   
  },
  { id: 7,
    name: "3D-Animated Gym Reels Bundle (No copyright issues | Instant Download)",
    slug: "3d-animated-gym-reels-bundle",
     image: "https://pbs.twimg.com/media/HCUBvnLbAAAdrp0.jpg",
    price: 99,
   
  },
  
  { id: 8,
    name: "Resin Flooring Timelapse Reels Bundle (No copyright issues | Instant Download)",
    slug: "resin-flooring-timelapse-reels-bundle",
    image: "https://pbs.twimg.com/media/HCUBbq7bEAAp-JX.jpg",
    price: 99,
  
  },
  { id: 9,
    name: "Viral Ai Dancing Reels Bundle (No copyright issues | Instant Download)",
    slug: "viral-ai-dancing-reels-bundle",
    image: "https://pbs.twimg.com/media/HCUBbo1aIAA5j7z.jpg",
    price: 99,
   
  },
  { id: 10,
    name: "4K Car Crash Reels Bundle (No copyright issues | Instant Download)",
    slug: "4k-car-crash-reels-bundle",
    image: "https://pbs.twimg.com/media/HCUBRrzb0AARZlb.jpg",
    price: 99,
   
  },
  {
    id: 11,
    name: "Canva Editing Pack (No copyright issues | Instant Download)",
    slug: "canva-editing-pack",
    image:"https://pbs.twimg.com/media/HCUBKxAakAAt5yB.jpg",
    price: 99,
   
   

  },
  {
    id: 12,
    name: "Hindu God Reels Bundle Pack (No copyright issues | Instant Download)",
    slug: "hindu-god-reels-bundle-pack",
    image:"https://pbs.twimg.com/media/HCUBKxUbEAAvIxt.jpg",
    price: 99,
   
  },
   {
    id: 13,
    name: "Ai Tech Videos Reels Bundle Pack (No copyright issues | Instant Download)",
    image:"https://pbs.twimg.com/media/HCUBFRSa4AAbj55.jpg",
    price: 99,
   
    slug: "ai-tech-videos-reels-bundle-pack"
    
  },

  {
    id: 14,
    name: "2d Animation Reels Bundle Pack (No copyright issues | Instant Download)",
    slug: "2d-animation-reels-bundle-pack",
    image:"https://pbs.twimg.com/media/HCUBFTIbEAMUPxQ.jpg",
    price: 99,
   
  },
  {
    id: 15,
    
    name: "Shark Tank Bundle Reels Pack (No copyright issues | Instant Download)",
    image:"https://pbs.twimg.com/media/HCUBFRMbEAYtZkR.jpg",
    price: 99,
   
    slug: "shark-tank-bundle-reels-pack",
   
  },
  {
    id: 16,
    name: "1000+ Nature HD reels Bundle Pack (No copyright issues | Instant Download)",
    slug: "nature-hd-reels-bundle-pack",
    image:"https://pbs.twimg.com/media/HCUBFS2bUAAb26_.jpg",
    price: 99,
   
  },
  {
    id: 17,
    name: "Ai health Reels Bundle Pack (No copyright issues | Instant Download)",
    slug: "ai-health-reels-bundle-pack",
    image:"https://pbs.twimg.com/media/HCUA-rcbcAAu8R3.jpg",
    price: 99,
   
  },


    {
      id:18,
    name: "Universe Space Content Reels (No copyright issues | Instant Download)",
    image:"https://pbs.twimg.com/media/HCUA-oZbEAIOoz1.jpg",
   
    price: 99,
   
    slug: "universe-space-content-reels",

  
  
  },
 



  {
    id: 19,
    name: "Cricket Reels Bundle pack (No copyright issues | Instant Download)",
    slug: "cricket-reels-bundle-pack",
    image:"https://pbs.twimg.com/media/HCUA-oYbEAAo7jl.jpg",
    price: 99,
   
  },
  {
    id: 20,
    name: "Ai Tools craft reels (No copyright issues | Instant Download)",
    slug: "ai-tools-craft-reels",
    image: "https://pbs.twimg.com/media/HCUA-oZbQAA3owB.jpg",
    price: 99,
   
  },
 
   { id: 21,
    name: "Mega All In One Reels Bundle Pack (No copyright issues | Instant Download)",
    slug: "mega-all-in-one-reels-bundle-pack",
    image: "https://pbs.twimg.com/media/HCUBRrhbEAIxjKS.jpg",
    price: 99,
   
  },
]


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
                      ₹9999
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







