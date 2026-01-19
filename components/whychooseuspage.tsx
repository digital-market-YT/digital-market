"use client"
import React from 'react';

interface Feature {
  id: number;
  icon: React.JSX.Element;
  title: string;
  description: string;
}

export default function WhyChooseUsPage() {

  const features: Feature[] = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Curated by professionals",
      description: "Handpicked by industry experts"
    },
    {
      id: 2,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Ready for client work",
      description: "Production-ready from day one"
    },
    {
      id: 3,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Lifetime access",
      description: "Yours to keep forever"
    },
    {
      id: 4,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Regular updates",
      description: "Continuously improved content"
    }
  ];

  return (
    <div className="min-h-screen font-sans transition-colors bg-[--background]">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-[--card]/95 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg" 
              alt="Logo"
              className="h-8"
            />
            <h1 className="text-xl font-bold text-[--card-foreground]">
              Why Choose Us
            </h1>
          </div>
          
          <div className="size-10 flex items-center justify-center border rounded-md hover:bg-[--muted] border-[--border] text-[--foreground]">
            <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 10.39a2.889 2.889 0 1 0 0-5.779 2.889 2.889 0 0 0 0 5.778M7.5 1v.722m0 11.556V14M1 7.5h.722m11.556 0h.723m-1.904-4.596-.511.51m-8.172 8.171-.51.511m-.001-9.192.51.51m8.173 8.171.51.511" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[--card-foreground]">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[--muted-foreground]">
            We deliver exceptional digital products designed to elevate your creative work and exceed client expectations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-[--card] border border-[--border] shadow-xl"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl transition-all duration-300 group-hover:scale-110 bg-[--primary]/20 text-[--primary]">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[--card-foreground]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-lg md:text-xl text-[--muted-foreground]">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-[--primary]"></div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[--primary] via-[--secondary] to-[--accent]">
          <div className="px-8 md:px-16 py-12 md:py-16 text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[--primary-foreground] mb-6">
              Ready to transform your creative workflow?
            </h3>
            <p className="text-lg md:text-xl text-[--primary-foreground]/80 mb-10 max-w-2xl mx-auto">
              Join thousands of professionals who trust our products for their most important projects
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[--primary-foreground] text-[--primary] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[--muted] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                Browse Collections
              </button>
              <button className="bg-transparent border-2 border-[--primary-foreground] text-[--primary-foreground] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[--primary-foreground]/10 transition-all duration-300">
                View Best Sellers
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 md:gap-12 mt-12 pt-12 border-t border-[--primary-foreground]/20">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[--primary-foreground] mb-2">50,000+</div>
                <div className="text-sm md:text-base text-[--primary-foreground]/80">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[--primary-foreground] mb-2">4.9/5</div>
                <div className="text-sm md:text-base text-[--primary-foreground]/80">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[--primary-foreground] mb-2">100%</div>
                <div className="text-sm md:text-base text-[--primary-foreground]/80">Money-back Guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-6 rounded-xl bg-[--card]/50">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-xl font-bold mb-2 text-[--card-foreground]">
              Expert Support
            </h4>
            <p className="text-[--muted-foreground]">
              Get help from our experienced team whenever you need it
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-[--card]/50">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="text-xl font-bold mb-2 text-[--card-foreground]">
              Instant Delivery
            </h4>
            <p className="text-[--muted-foreground]">
              Download your products immediately after purchase
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-[--card]/50">
            <div className="text-4xl mb-4">🔒</div>
            <h4 className="text-xl font-bold mb-2 text-[--card-foreground]">
              Secure Payments
            </h4>
            <p className="text-[--muted-foreground]">
              Safe and encrypted payment processing
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}