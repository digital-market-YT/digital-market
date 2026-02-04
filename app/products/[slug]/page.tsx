
// import React, { useRef } from 'react';
// import { Check, X, Zap, ArrowRight } from 'lucide-react';
// import { Product, products } from '@/lib/features';
// import SlugPage from '@/components/slugpage';

import SlugPage from "@/components/slugpage";

// const ReelsLandingPage = async ({params}:{params:Promise<{slug:string}>}) => 
  
 
// //   const carouselRef = useRef<HTMLDivElement>(null);

// //   const scrollLeft = () => {
// //     if (carouselRef.current) {
// //       carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth / 3, behavior: 'smooth' });
// //     }
// //   };

// //   const scrollRight = () => {
// //     if (carouselRef.current) {
// //       carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth / 3, behavior: 'smooth' });
// //     }
// //   }
  
  
  
  
  
// //   const {slug} = await params;

// //   console.log(`slug: ${slug}`);
  
// //   const getdata = (): Product | undefined => {
// //   const product = products.find((product) => product.slug === slug);

// //   return product
// //   }

// //   const product = getdata();
// //   const title = product?.name;
// //   const image = product?.image;
// //   const videoUrls = product?.videoUrls || [];
// //   const price = product?.price || 149
// //   const testimonials = product?.testimonials;

  
  
  



// //   if (!slug) {
// //     return (
// //       <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
// //         <div className="text-center">
// //           <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
// //           <p className="text-gray-400">The product you are looking for does not exist.</p>
// //         </div>
// //       </div>
// //     );
// //   }
  
// //   return (
// //     <div className="min-h-screen bg-zinc-950 text-white">
// //       {/* Hero Section */}
// //       <section className="py-20 px-4">
// //         <div className="max-w-6xl mx-auto text-center">
// //           {/* Social Proof */}
// //           <div className="flex items-center justify-center gap-3 mb-8">
// //             <div className="flex -space-x-2">
// //               {[1, 2, 3, 4, 5].map((i) => (
// //                 <div key={i} className="w-10 h-10 rounded-full bg-gray-700 border-2 border-zinc-950" />
// //               ))}
// //             </div>
// //             <p className="text-gray-300">19,000+ creators using our viral reels</p>
// //           </div>

// //           {/* Main Headline */}
// //           <h1 className="text-5xl md:text-7xl font-bold mb-6">
// //             1000+ READY-TO-POST
// //           </h1>
          
// //           {/* Yellow Banner */}
// //           <div className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 px-8 py-6 rounded-full mb-8">
// //             <h2 className="text-3xl md:text-4xl font-bold text-black">
// //               1000+ {title}
// //             </h2>
// //           </div>

// //           {/* Subheadline */}
// //           <div className="flex items-center justify-center gap-2 mb-6">
// //             <Zap className="text-primary" size={24} fill="currentColor" />
// //             <h3 className="text-2xl md:text-3xl font-bold">
// //               Grow Your Reels Page WITHOUT Showing Your Face
// //             </h3>
// //           </div>

// //           {/* Description */}
// //           <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
// //             Skip hours of editing. Get 1000+ high-engagement {title}
// //             , ready to post on Instagram, YouTube Shorts, and TikTok.
// //             Just download, post, and grow.
// //           </p>

// //           {/* Feature Pills */}
// //           <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
// //             {['No Copyright Issues', '100+ Viral Reels', 'Beginner Friendly', 'Instant Download'].map((feature) => (
// //               <div key={feature} className="px-6 py-3 border-2 border-yellow-500 rounded-full text-yellow-500 font-semibold">
// //                 {feature}
// //               </div>
// //             ))}
// //           </div>

// //           {/* CTA Button */}
// //           <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold px-12 py-5 rounded-full hover:scale-105 transition-transform mb-4">
// //             Download Viral Reels Bundle
// //           </button>
          
// //           <p className="text-gray-400">Instant access • Lifetime use</p>
// //         </div>
// //       </section>

// //       <section className="py-10">
// //         <div>
// //           <img src={image} alt={title} className="mx-auto rounded-xl w-full max-w-2xl" />
// //         </div>
       


// //        <div className="py-6">
// //       <h2 className="text-2xl text-center md:text-3xl font-bold mb-4">Video Preview Gallery</h2>
// //       <div className="relative">
// //         <div 
// //           ref={carouselRef} 
// //           className="flex flex-row overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4"
// //         >
// //           {videoUrls.map((videoUrl, index) => (
// //             <div key={index} className="flex-shrink-0 aspect-[9/16] w-64 md:w-80 lg:w-96">
// //               <iframe
// //                 src={videoUrl}
// //                 title="YouTube video"
// //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// //                 allowFullScreen
// //                 className="w-full h-full rounded-xl"
// //               />
// //             </div>
// //           ))}
// //         </div>
// //         <button 
// //           onClick={scrollLeft} 
// //           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-black p-2 rounded-full shadow-md"
// //           aria-label="Scroll left"
// //         >
// //           ←
// //         </button>
// //         <button 
// //           onClick={scrollRight} 
// //           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-black p-2 rounded-full shadow-md"
// //           aria-label="Scroll right"
// //         >
// //           →
// //         </button>
// //       </div>
// //     </div>




// //       </section>

// //       {/* What You Get Section */}
// //       <section className="py-20 px-4 bg-black/30">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="text-center mb-12">
// //             <div className="inline-block border border-yellow-600 text-yellow-500 px-6 py-2 rounded-full text-sm font-bold mb-6">
// //               EVERYTHING INCLUDED
// //             </div>
// //             <h2 className="text-4xl md:text-5xl font-bold">What You Get</h2>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
// //             {[
// //               {
// //                 title,
// //                 description: 'MP4 format, perfect for Instagram, YouTube Shorts & TikTok'
// //               },
// //               {
// //                 title: 'High Quality Visuals',
// //                 description: 'Professional AI animations designed to grab attention and boost engagement'
// //               },
// //               {
// //                 title: 'Instant Google Drive Access',
// //                 description: 'Download immediately after purchase. No delays.'
// //               },
// //               {
// //                 title: 'Lifetime Access',
// //                 description: 'No expiration. Re-download anytime, forever.'
// //               }
// //             ].map((item, index) => (
// //               <div key={index} className="border-2 border-yellow-700 rounded-2xl p-6 bg-zinc-900/50">
// //                 <div className="bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
// //                   <Check className="text-green-400" />
// //                 </div>
// //                 <h3 className="text-xl font-bold mb-3">{item.title}</h3>
// //                 <p className="text-gray-400 text-sm">{item.description}</p>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Transform Section */}
// //           <div className="text-center">
// //             <h2 className="text-4xl md:text-5xl font-bold mb-4">
// //               Ready to Transform Your Content?
// //             </h2>
// //             <p className="text-yellow-500 text-xl mb-8">
// //               Join 17,000+ creators who have already upgraded their content game.
// //             </p>
            
// //             <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold px-12 py-5 rounded-full hover:scale-105 transition-transform mb-6">
// //               Get 1000+ viral Reels Bundle
// //             </button>

// //             <div className="flex items-center justify-center gap-8 text-sm">
// //               <div className="flex items-center gap-2">
// //                 <Check className="text-green-500" size={20} />
// //                 <span>Instant Download</span>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <Check className="text-green-500" size={20} />
// //                 <span>Lifetime Access</span>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <Check className="text-green-500" size={20} />
// //                 <span>Ready for Monetization</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Pricing Section */}
// //       <section className="py-20 px-4">
// //         <div className="max-w-5xl mx-auto text-center">
// //           <div className="text-yellow-500 text-sm font-bold mb-4">SIMPLE PRICING</div>
// //           <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Instant Access</h2>
// //           <p className="text-gray-400 text-lg mb-8">
// //             Download all 100+ premium ready to post reels immediately after purchase. No waiting. No subscriptions.
// //           </p>

// //           <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full font-bold mb-12">
// //             Limited Time Offer
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
// //             {/* Regular Price */}
// //             <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
// //               <div className="text-blue-400 text-sm font-bold mb-4">REGULAR PRICE</div>
// //               <div className="text-5xl font-bold text-gray-500 line-through mb-6">₹11,299</div>
// //               <div className="bg-zinc-800 text-gray-400 px-6 py-2 rounded-full inline-block">Normal</div>
// //             </div>

// //             {/* Special Price */}
// //             <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 rounded-2xl p-8 border-2 border-green-500">
// //               <div className="text-green-400 text-sm font-bold mb-4">SPECIAL PRICE</div>
// //               <div className="text-6xl font-bold text-green-400 mb-6">
// //                 {slug==="3d-knowledge-fact-reels-bundle" ? "₹199" : "₹149"}
// //               </div>
// //               <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl mb-3 transition-colors">
// //                 Save ₹11,230
// //               </button>
// //               <div className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold">
// //                 Huge Discount
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Before vs After Section */}
// //       <section className="py-20 px-4 bg-black/30">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="text-center mb-12">
// //             <div className="text-green-500 text-sm font-bold mb-4">WHY CHOOSE THIS REELS BUNDLE</div>
// //             <h2 className="text-4xl md:text-5xl font-bold mb-4">
// //               Before vs After Using 1000+ Ready-to-Post Reels
// //             </h2>
// //             <p className="text-gray-400 text-lg">
// //               Stop wasting time creating content. Scale your Instagram growth with instant, viral-ready Reels.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
// //             {/* Before */}
// //             <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
// //               <h3 className="text-2xl font-bold mb-6">Before Using This Reels Bundle</h3>
// //               <div className="space-y-4">
// //                 {[
// //                   'Spending hours searching or editing reels',
// //                   'Struggling with low views & poor engagement',
// //                   'Running out of content ideas frequently',
// //                   'Inconsistent posting due to lack of content'
// //                 ].map((item, index) => (
// //                   <div key={index} className="flex items-start gap-3">
// //                     <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
// //                     <span className="text-gray-300">{item}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* After */}
// //             <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-2xl p-8 border-2 border-green-600 relative">
// //               <ArrowRight className="absolute -left-12 top-1/2 -translate-y-1/2 text-green-500 hidden lg:block" size={48} />
// //               <h3 className="text-2xl font-bold mb-6">After Using 1000+ Ready-to-Post Reels</h3>
// //               <div className="space-y-4">
// //                 {[
// //                   'No editing needed — just upload & post',
// //                   title,
// //                   'Works on Instagram, Facebook & YouTube Shorts',
// //                   'Daily posting made easy for years'
// //                 ].map((item, index) => (
// //                   <div key={index} className="flex items-start gap-3">
// //                     <Check className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
// //                     <span className="text-gray-300">{item}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Final CTA */}
// //           <div className="text-center">
// //             <h2 className="text-4xl md:text-5xl font-bold mb-4">
// //               Ready to Transform Your Content?
// //             </h2>
// //             <p className="text-gray-400 text-lg mb-8">
// //               Join thousands of creators growing faster with ready-made viral reels.
// //             </p>
            
// //             <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold px-12 py-5 rounded-full hover:scale-105 transition-transform">
// //               Get Instant Access to 100+ Reels Now
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* How the Process Works Section */}
// //       <section className="py-20 px-4">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="text-center mb-16">
// //             <div className="text-yellow-500 text-sm font-bold mb-4">JUST 3 EASY STEPS</div>
// //             <h2 className="text-4xl md:text-5xl font-bold mb-4">
// //               How the Process Works for You
// //             </h2>
// //             <p className="text-gray-400 text-lg">
// //               Follow these 3 simple steps and get instant access to 10000+ Reels bundle.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 number: '1',
// //                 title: 'Select 10000+ Reels Bundle',
// //                 description: 'Choose the 10000+ Anime Edit Reels Bundle , All Created Using Ai'
// //               },
// //               {
// //                 number: '2',
// //                 title: 'Pay Securely',
// //                 description: 'Complete your purchase using UPI, Credit/Debit Card, Net Banking, or Wallets 100% secure checkout.'
// //               },
// //               {
// //                 number: '3',
// //                 title: 'Get Instant Access',
// //                 description: 'Receive instant access to your reels. Download, upload & start posting immediately.'
// //               }
// //             ].map((step) => (
// //               <div key={step.number} className="bg-zinc-900 rounded-2xl p-8 text-center border border-zinc-800">
// //                 <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
// //                   {step.number}
// //                 </div>
// //                 <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
// //                 <p className="text-gray-400">{step.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Ready to Get Started Section */}
// //       <section className="py-20 px-4 bg-black/30">
// //         <div className="max-w-4xl mx-auto">
// //           <div className="bg-zinc-900 rounded-3xl p-12 text-center border border-zinc-800">
// //             <h2 className="text-4xl md:text-5xl font-bold mb-4">
// //               Ready to Get Started?
// //             </h2>
// //             <p className="text-gray-400 text-lg mb-8">
// //               It takes less than 2 minutes to unlock unlimited content.
// //             </p>

// //             <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-xl font-bold px-12 py-5 rounded-full transition-all mb-8">
// //               Get 10000+ Ready-to-Post Reels
// //             </button>

// //             <div className="flex items-center justify-center gap-8 flex-wrap">
// //               {['Instant Download', 'Lifetime Access', 'Ready for Monetization'].map((item) => (
// //                 <div key={item} className="flex items-center gap-2">
// //                   <Check className="text-red-500" size={20} />
// //                   <span>{item}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Final Download Section */}
// //       <section className="py-20 px-4">
// //         <div className="max-w-4xl mx-auto text-center">
// //           {/* <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold px-12 py-5 rounded-full hover:scale-105 transition-transform mb-6">
// //             Get Instant Access to 100+ Reels Now
// //           </button>

// //           <div className="flex items-center justify-center gap-8 mb-12 text-sm flex-wrap">
// //             <div className="flex items-center gap-2">
// //               <Check className="text-yellow-500" size={20} />
// //               <span>Instant Download</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <Check className="text-yellow-500" size={20} />
// //               <span>Lifetime Access</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <Check className="text-yellow-500" size={20} />
// //               <span>No Subscription</span>
// //             </div>
// //           </div> */}

// //           <h2 className="text-4xl md:text-5xl font-bold mb-4">
// //             Ready to Download Now?
// //           </h2>
// //           <p className="text-gray-400 text-lg mb-8">
// //             Get <span className="text-white font-bold">instant access</span> to <span className="text-white font-bold">100+ ready-to-post reels</span>.No editing. No copyright issues. Just upload & grow.
// //           </p>

// //           <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold px-12 py-5 rounded-full hover:scale-105 transition-transform mb-8">
// //             Get 1000+ {title} Bundle
// //           </button>

// //           <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
// //             {['Instant Download', 'Lifetime Access', 'Ready for Monetization'].map((item) => (
// //               <div key={item} className="flex items-center gap-2">
// //                 <div className="bg-yellow-500 w-6 h-6 rounded-full flex items-center justify-center">
// //                   <Check className="text-black" size={16} />
// //                 </div>
// //                 <span>{item}</span>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="mb-6">
// //             <p className="text-gray-400 mb-4">We accept</p>
// //             <div className="flex items-center justify-center gap-4 flex-wrap">
// //               {['UPI', 'Credit Card', 'Debit Card', 'Net Banking', 'Wallets'].map((method) => (
// //                 <div key={method} className="bg-zinc-900 px-6 py-3 rounded-lg border border-zinc-800">
// //                   {method}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <p className="text-gray-500 text-sm">
// //             Secure checkout powered by SuperProfile. Your payment is fully protected.
// //           </p>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };
// {
//   const slug = await params();
//   return (
//   <SlugPage slug={slug} key={slug} />
//   );
// }
// export default ReelsLandingPage;





const Page = async ({params}:{params:Promise<{slug:string}>}) => {
  const {slug} = await params;
  console.log(slug);
  return (
    <div><SlugPage slug={slug} key={slug}/></div>
  )
}

export default Page
