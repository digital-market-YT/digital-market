"use client"
import React from 'react';



export interface FakeComment {
  id: number;
  name: string;          // English/Telugu style name
  comment: string;       // Full Telugu script
  village: string;       // AP/Telangana village
  imageUrl: string;      // Real image URL from search
}

export const testimonials: FakeComment[] = [
  {
    id: 1,
    name: "Srinivas",
    comment: "బిగ్‌స్టాక్ ధన్యవాదాలు! నీ AI బేబీ బై ఫ్రూట్స్ ఈటింగ్ ఫ్రూట్స్ వైరల్ రీల్స్ తీసుకొని నా యూట్యూబ్ షార్ట్స్ మానిటైజ్ చేసుకొని ఇప్పుడు నెలకి లక్షలు సంపాదిస్తున్నా... కేవలం 23 రోజుల్లోనే! 🔥💰",
    village: "విజయవాడ",
    imageUrl: "https://thumbs.dreamstime.com/z/happy-middle-aged-village-farmer-showing-indian-money-looking-camera-green-farmland-concept-successful-profit-farming-274779219.jpg"
  },
  {
    id: 2,
    name: "Lakshmi",
    comment: "నేను ఇంటి దగ్గర కాలిగా ఉండే దాన్ని... మా భర్త తెచ్చిన డబ్బులు సరిపోయేవి కావు. 100 రూపాయలు పెట్టి బిగ్‌స్టాక్ నుండి AI 3D నాలెడ్జ్ ఫాక్ట్స్ బండిల్ తీసుకుని ఇన్‌స్టాగ్రామ్ ప్రమోషన్స్ ద్వారా ఈ రోజు నెలకి 50,000+ సంపాదిస్తున్నా. సూపర్ అనుభవం! 🙏✨",
    village: "గుంటూరు",
    imageUrl: "https://assets.isu.pub/document-structure/241102111025-b5c7560d8841620ccfa61b660dfda91c/v1/884cf1339b02f36fa75a693e9d44f0ed.jpeg"
  },
  {
    id: 3,
    name: "Ravi Teja",
    comment: "BTech 1st ఇయర్ స్టూడెంట్ నేను... పార్ట్ టైం ఇన్‌కమ్ కోసం బిగ్‌స్టాక్ లో 100 పెట్టి మోటివేషనల్ మోషన్ గ్రాఫిక్స్ రీల్స్ ప్యాక్ తీసుకున్నా. ఇప్పుడు ఫేస్‌బుక్ పేజ్ ద్వారా నెలకి 90,000 సంపాదిస్తున్నా. థాంక్స్ బిగ్‌స్టాక్! 🚀💸",
    village: "రాజమండ్రి",
    imageUrl: "https://c8.alamy.com/comp/WATPG9/college-student-working-on-a-laptop-and-giving-thumb-up-WATPG9.jpg"
  },
  {
    id: 4,
    name: "Anjali",
    comment: "బిగ్‌స్టాక్ అదిరిపోయింది! 1000+ AI స్టోరీ రీల్స్ బండిల్ తీసుకొని టిక్‌టాక్ అకౌంట్ వైరల్ చేసి 30 రోజుల్లోనే నెలకి 1 లక్ష ఆర్జన చేస్తున్నా. చాలా సంతోషం! ❤️📈",
    village: "కాకినాడ",
    imageUrl: "https://www.shutterstock.com/shutterstock/photos/2554785253/display_1500/stock-photo-happy-young-influencer-gesturing-heart-shape-and-vlogging-through-smart-phone-at-home-2554785253.jpg"
  },
  {
    id: 5,
    name: "Mahesh Babu",
    comment: "అరేరే! బిగ్‌స్టాక్ లో యానిమే ఎడిట్ రీల్స్ బండిల్ 100కే తీసుకుని ఇన్‌స్టా రీల్స్ పోస్ట్ చేసి 15 రోజుల్లో 1.5 లక్షలు సంపాదించాను. ఇది నిజంగా గేమ్ చేంజర్! 🔥🎥",
    village: "తిరుపతి",
    imageUrl: "https://thumbs.dreamstime.com/b/success-freedom-carefree-runner-woman-running-fun-happiness-joy-energetic-athlete-girl-happy-weight-loss-goal-achievement-151881346.jpg"
  },
  {
    id: 6,
    name: "Sravani",
    comment: "నేను గృహిణి, టైం పాస్ కోసం బిగ్‌స్టాక్ నుండి జిమ్ యానిమేటెడ్ రీల్స్ బండిల్ తీసుకున్నా. ఇప్పుడు యూట్యూబ్ షార్ట్స్ ద్వారా నెలకి 70,000 రూపాయలు వస్తున్నాయి. అద్భుతం! 💪📱",
    village: "నెల్లూరు",
    imageUrl: "https://thumbs.dreamstime.com/b/dancing-cartoon-girl-vibrant-disco-scene-colorful-lights-sparkling-dance-floor-concept-joyful-celebration-lively-425346912.jpg"
  },
  {
    id: 7,
    name: "Venkatesh",
    comment: "బిగ్‌స్టాక్ థాంక్స్ బ్రో! నీ AI గ్లాస్ కట్టింగ్ రీల్స్ బండిల్ వల్ల నా ఇన్‌స్టాగ్రామ్ పేజ్ 20 రోజుల్లో మానిటైజ్ అయ్యింది, నెలకి 1.2 లక్షలు ఆర్జన. సూపర్! 🌟",
    village: "కర్నూలు",
    imageUrl: "https://4429452.fs1.hubspotusercontent-na1.net/hubfs/4429452/happy-asian-woman-with-headphones-working-on-lapto-2025-03-11-13-26-21-utc.jpg"
  },
  {
    id: 8,
    name: "Pooja",
    comment: "నేను ఇంట్లో ఉండే అమ్మాయిని, 100 రూపాయలు పెట్టి బిగ్‌స్టాక్ నుండి వైరల్ మ్యాడ్ సైంటిస్ట్ రీల్స్ తీసుకున్నా. ఇప్పుడు టిక్‌టాక్ ద్వారా నెలకి 80,000 సంపాదిస్తున్నా. ధన్యవాదాలు! 🧪💸",
    village: "అనంతపురం",
    imageUrl: "https://i0.wp.com/vikalpsangam.org/wp-content/uploads/2022/03/farming-is-a-way-of-living-that-is-more-sustainable-kishore.jpg?resize=640%2C480&ssl=1"
  },
  {
    id: 9,
    name: "Sai Kumar",
    comment: "బిగ్‌స్టాక్ అద్భుతం! 200+ రెసిన్ ఫ్లోరింగ్ టైమ్‌లాప్స్ రీల్స్ తీసుకొని నా యూట్యూబ్ చానల్ వైరల్ చేసి 45 రోజుల్లో నెలకి లక్షలు వస్తున్నాయి. రికమెండ్! 🏠🎬",
    village: "విశాఖపట్నం",
    imageUrl: "https://thumbs.dreamstime.com/b/back-view-indian-woman-orange-saree-adorned-flowers-walking-temple-vibrant-festival-surrounded-331073007.jpg"
  },
  {
    id: 10,
    name: "Divya",
    comment: "నేను బి.కామ్ చదివే సమయంలో 100 పెట్టి బిగ్‌స్టాక్ నుండి AI హల్క్ రీల్స్ తీసుకున్నా. ఈ రోజు ఫేస్‌బుక్ పేజీ ద్వారా నెలకి 1 లక్ష సంపాదిస్తున్నా. సూపర్ డీల్! 🦸‍♂️📈",
    village: "కడప",
    imageUrl: "https://www.amraandelma.com/wp-content/uploads/2025/07/influencers_viral_challenges.jpg"
  },
  {
    id: 11,
    name: "Harika",
    comment: "బిగ్‌స్టాక్ ధన్యవాదాలు, నీ AI యానిమల్ రీల్స్ ప్యాక్ తీసుకొని నా ఇన్‌స్టాగ్రామ్ గ్రో చేసి 25 రోజుల్లోనే నెలకి 60,000 ఆర్జన చేస్తున్నా. అమెజింగ్! 🐶✨",
    village: "శ్రీకాకుళం",
    imageUrl: "https://static.toiimg.com/thumb/msid-101193914,width-1070,height-580,imgsize-18422,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
  },
  {
    id: 12,
    name: "Chaitanya",
    comment: "నేను జాబ్ లేకుండా ఉన్న సమయంలో బిగ్‌స్టాక్ నుండి 200+ వైరల్ AI డాన్సింగ్ రీల్స్ తీసుకున్నా. ఇప్పుడు యూట్యూబ్ ద్వారా నెలకి 1.5 లక్షలు వస్తున్నాయి. థాంక్స్! 💃🎉",
    village: "విజయనగరం",
    imageUrl: "https://thumbs.dreamstime.com/z/happy-middle-aged-village-farmer-showing-indian-money-looking-camera-green-farmland-concept-successful-profit-farming-274779219.jpg"
  },
  {
    id: 13,
    name: "Swapna",
    comment: "ఇంటి పనుల మధ్య 100 రూపాయలు పెట్టి బిగ్‌స్టాక్ నుండి 1000+ 3D నాలెడ్జ్ ఫాక్ట్స్ బండిల్ తీసుకున్నా. ఇప్పుడు టిక్‌టాక్ ద్వారా నెలకి 75,000 సంపాదిస్తున్నా. గ్రేట్! 📚💰",
    village: "ప్రకాశం",
    imageUrl: "https://c8.alamy.com/comp/WATPG9/college-student-working-on-a-laptop-and-giving-thumb-up-WATPG9.jpg"
  },
  {
    id: 14,
    name: "Kiran",
    comment: "బిగ్‌స్టాక్ సూపర్ డీల్! నీ 200K+ వైరల్ మెగా రీల్స్ బండిల్ తీసుకొని నా ఫేస్‌బుక్ పేజ్ వైరల్ చేసి 18 రోజుల్లో 1 లక్ష ఆర్జన. అదిరింది! 🌟📱",
    village: "కృష్ణా",
    imageUrl: "https://www.shutterstock.com/shutterstock/photos/2554785253/display_1500/stock-photo-happy-young-influencer-gesturing-heart-shape-and-vlogging-through-smart-phone-at-home-2554785253.jpg"
  },
  {
    id: 15,
    name: "Geetha",
    comment: "నేను గ్రామంలో ఉంటాను, ఇంటర్నెట్ స్లో అయినా బిగ్‌స్టాక్ నుండి 25,000+ HD వీడియో క్లిప్స్ తీసుకుని రీల్స్ చేసి నెలకి 90,000 సంపాదిస్తున్నా. ఇన్‌క్రెడిబుల్! 🏡🎥",
    village: "చిత్తూరు",
    imageUrl: "https://thumbs.dreamstime.com/b/success-freedom-carefree-runner-woman-running-fun-happiness-joy-energetic-athlete-girl-happy-weight-loss-goal-achievement-151881346.jpg"
  }
];

export default function TestimonialsPage() {

  return (
    <div className="min-h-screen font-sans transition-colors text-black  dark:bg-black bg-white dark:text-white">
     

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-6">
            <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-[--primary]">
              50,000+ Happy Creators
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[--card-foreground]">
            Trusted by Professionals
          </h2>
          <p className="text-lg md:text-xl text-[--muted-foreground]">
            Real feedback from creators and agencies
          </p>
        </div>

        {/* Infinite Scrolling Testimonials */}
        <div className="overflow-hidden pb-8">
          <style>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll-left {
              animation: scroll-left 40s linear infinite;
            }
            .animate-scroll-left:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* First Row - Scrolling Left */}
          <div className="flex gap-6 animate-scroll-left mb-6">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 flex-shrink-0">
                {testimonials.slice(0, 6).map((testimonial) => (
                  <div
                    key={`${setIndex}-${testimonial.id}`}
                    className={`w-96 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex-shrink-0 ${
                      'bg-[--card]'
                    }`}
                  >
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Feedback */}
                    <p className={`text-base mb-6 leading-relaxed ${
                      'text-[--card-foreground]'
                    }`}>
                      &quot;{testimonial.comment}&quot;
                    </p>

                    {/* Profile */}
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.imageUrl} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className={`font-semibold ${
                          'text-[--card-foreground]'
                        }`}>
                          {testimonial.name}
                        </h4>
                        <p className={`text-sm ${
                          'text-[--muted-foreground]'
                        }`}>
                          {''}
                        </p>
                        <p className={`text-xs flex items-center gap-1 mt-1 ${
                          'text-[--muted-foreground]'
                        }`}>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {testimonial.village}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Second Row - Scrolling Right */}
          <style>{`
            @keyframes scroll-right {
              0% {
                transform: translateX(-50%);
              }
              100% {
                transform: translateX(0);
              }
            }
            .animate-scroll-right {
              animation: scroll-right 40s linear infinite;
            }
            .animate-scroll-right:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex gap-6 animate-scroll-right">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 flex-shrink-0">
                {testimonials.slice(6, 12).map((testimonial) => (
                  <div
                    key={`${setIndex}-${testimonial.id}`}
                    className={`w-96 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex-shrink-0 ${
                      'bg-[--card]'
                    }`}
                  >
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array( 5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Feedback */}
                    <p className={`text-base mb-6 leading-relaxed ${
                      'text-[--card-foreground]'
                    }`}>
                      &quot;{testimonial.comment}&quot;
                    </p>

                    {/* Profile */}
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.imageUrl} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className={`font-semibold ${
                          'text-[--card-foreground]'
                        }`}>
                          {testimonial.name}
                        </h4>
                        <p className={`text-sm ${
                          'text-[--muted-foreground]'
                        }`}>
                          {""}
                        </p>
                        <p className={`text-xs flex items-center gap-1 mt-1 ${
                          'text-[--muted-foreground]'
                        }`}>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {testimonial.village}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 rounded-2xl p-8 md:p-12 ${
          'bg-gradient-to-r from-[--primary] to-[--secondary]'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[--primary-foreground] mb-2">4.9/5</div>
              <div className="text-sm text-[--primary-foreground]/80">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[--primary-foreground] mb-2">50,000+</div>
              <div className="text-sm text-[--primary-foreground]/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[--primary-foreground] mb-2">15,000+</div>
              <div className="text-sm text-[--primary-foreground]/80">5-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[--primary-foreground] mb-2">98%</div>
              <div className="text-sm text-[--primary-foreground]/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}