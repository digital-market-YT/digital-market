"use client"
import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  feedback: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Wedding Cinematographer",
    location: "Mumbai, Maharashtra",
    image: "https://i.pravatar.cc/150?img=12",
    feedback: "స్టూడెంట్‌గా బిగ్‌స్టాక్ నుండి స్కిప్ హవర్స్ ఆఫ్ ఎడిటింగ్ బండిల్ తీసుకున్నా. ఫేస్‌బుక్‌తో 24 రోజుల్లో లక్షలు ఎర్న్ చేస్తున్నా.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Content Creator",
    location: "Bangalore, Karnataka",
    image: "https://i.pravatar.cc/150?img=47",
    feedback: "The reels bundle is absolutely fantastic! My engagement has increased by 300%. Worth every rupee!",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Video Editor",
    location: "Ahmedabad, Gujarat",
    image: "https://i.pravatar.cc/150?img=13",
    feedback: "Production-ready assets that actually work. No more spending hours creating effects from scratch. Highly recommended!",
    rating: 5
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Social Media Manager",
    location: "Hyderabad, Telangana",
    image: "https://i.pravatar.cc/150?img=38",
    feedback: "The quality is outstanding! Our client satisfaction has gone through the roof since we started using these templates.",
    rating: 5
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Film Director",
    location: "Jaipur, Rajasthan",
    image: "https://i.pravatar.cc/150?img=14",
    feedback: "As a professional director, I need tools I can trust. These products deliver consistently excellent results.",
    rating: 5
  },
  {
    id: 6,
    name: "Ananya Desai",
    role: "Digital Marketing Agency",
    location: "Pune, Maharashtra",
    image: "https://i.pravatar.cc/150?img=45",
    feedback: "We've purchased multiple bundles for our team. The ROI has been incredible. Our clients love the polished look!",
    rating: 5
  },
  {
    id: 7,
    name: "Karthik Menon",
    role: "YouTube Creator",
    location: "Chennai, Tamil Nadu",
    image: "https://i.pravatar.cc/150?img=15",
    feedback: "My channel grew from 10k to 100k subscribers using these video templates. The quality speaks for itself!",
    rating: 5
  },
  {
    id: 8,
    name: "Neha Kapoor",
    role: "Freelance Editor",
    location: "Delhi, NCR",
    image: "https://i.pravatar.cc/150?img=44",
    feedback: "Best investment for my freelance business. Clients keep coming back because of the professional quality!",
    rating: 5
  },
  {
    id: 9,
    name: "Arjun Malhotra",
    role: "Brand Consultant",
    location: "Chandigarh, Punjab",
    image: "https://i.pravatar.cc/150?img=33",
    feedback: "These assets have become an essential part of our branding toolkit. Absolutely worth it!",
    rating: 5
  },
  {
    id: 10,
    name: "Divya Iyer",
    role: "Event Photographer",
    location: "Kochi, Kerala",
    image: "https://i.pravatar.cc/150?img=43",
    feedback: "The wedding bundle is a game-changer! My clients are blown away by the cinematic quality.",
    rating: 5
  },
  {
    id: 11,
    name: "Rohan Chatterjee",
    role: "Video Production House",
    location: "Kolkata, West Bengal",
    image: "https://i.pravatar.cc/150?img=68",
    feedback: "We've been using these for over a year. Consistent quality, regular updates, and amazing support!",
    rating: 5
  },
  {
    id: 12,
    name: "Kavya Nair",
    role: "Instagram Influencer",
    location: "Thiruvananthapuram, Kerala",
    image: "https://i.pravatar.cc/150?img=42",
    feedback: "My feed looks so much more professional now! These templates are a must-have for serious creators.",
    rating: 5
  }
];

export default function TestimonialsPage() {

  return (
    <div className="min-h-screen font-sans transition-colors bg-white">
     

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
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Feedback */}
                    <p className={`text-base mb-6 leading-relaxed ${
                      'text-[--card-foreground]'
                    }`}>
                      &quot;{testimonial.feedback}&quot;
                    </p>

                    {/* Profile */}
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
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
                          {testimonial.role}
                        </p>
                        <p className={`text-xs flex items-center gap-1 mt-1 ${
                          'text-[--muted-foreground]'
                        }`}>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {testimonial.location}
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
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Feedback */}
                    <p className={`text-base mb-6 leading-relaxed ${
                      'text-[--card-foreground]'
                    }`}>
                      &quot;{testimonial.feedback}&quot;
                    </p>

                    {/* Profile */}
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonial.image} 
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
                          {testimonial.role}
                        </p>
                        <p className={`text-xs flex items-center gap-1 mt-1 ${
                          'text-[--muted-foreground]'
                        }`}>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {testimonial.location}
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