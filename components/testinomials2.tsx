import React from 'react';

interface Testimonial {
  id: number;
  image: string;
 
}

const TestimonialsSection2: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
     
     image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770716159/Screenshot_2026-02-10-13-40-22-67_1c337646f29875672b5a61192b9010f9_xzegwc.jpg"
   
    },
    {
      id: 2,
     
     image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770716061/Screenshot_2026-02-10-11-27-25-59_1c337646f29875672b5a61192b9010f9_dj5lyg.jpg"
   
    },
    {
      id: 3,
     
     image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770716053/Screenshot_2026-02-10-11-27-47-31_1c337646f29875672b5a61192b9010f9_vcb8ze.jpg"
    },
    {
      id: 4,
     
     image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770716046/Screenshot_2026-02-10-11-30-04-07_1c337646f29875672b5a61192b9010f9_qbjkg8.jpg"
    },
    {
      id: 5,
     
     image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770716046/Screenshot_2026-02-10-11-28-21-63_1c337646f29875672b5a61192b9010f9_o4bsag.jpg"
    },
    {
      id: 6,
     
     image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770715827/Screenshot_2026-02-10-13-42-49-61_1c337646f29875672b5a61192b9010f9_ekzmsu.jpg"
    },
    {
      id: 7,
      
      image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770715931/Screenshot_2026-02-10-13-42-32-21_1c337646f29875672b5a61192b9010f9_uqi5cz.jpg"
    },
    {
      id: 8,
    
     image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770715939/Screenshot_2026-02-10-13-40-37-46_1c337646f29875672b5a61192b9010f9_cjyg9v.jpg"
    },
    {
      id: 9,
     
     image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770715965/Screenshot_2026-02-10-13-38-34-53_1c337646f29875672b5a61192b9010f9_jkzvgr.jpg"
    },
    {
      id: 10,
     
     image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770715971/Screenshot_2026-02-10-11-30-53-97_1c337646f29875672b5a61192b9010f9_nuzuz7.jpg"
    },
    {
      id: 11,
     
     image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770715973/Screenshot_2026-02-10-13-38-01-28_1c337646f29875672b5a61192b9010f9_npjvsh.jpg"
    },
    {
      id: 12,
     
     image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770715982/Screenshot_2026-02-10-11-30-39-50_1c337646f29875672b5a61192b9010f9_ad7kbf.jpg"
    },
    {
      id: 13,
     
     image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770716007/Screenshot_2026-02-10-11-29-21-98_1c337646f29875672b5a61192b9010f9_lhxd54.jpg"
    },
    {
      id: 14,
     
     image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770716011/Screenshot_2026-02-10-13-37-49-57_1c337646f29875672b5a61192b9010f9_docxo3.jpg"
    },  
    {
      id: 15,
     
     image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770716037/Screenshot_2026-02-10-11-30-26-94_1c337646f29875672b5a61192b9010f9_zszwy8.jpg"
    },
    {
      id: 16,
     
     image:"https://res.cloudinary.com/dkwabt89v/image/upload/v1770716043/Screenshot_2026-02-10-11-28-49-05_1c337646f29875672b5a61192b9010f9_sj9asp.jpg"
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600">
          Proffs
          </p>
        </div>

        {/* Photo Grid - 2 cols (small), 3 cols (medium), 4 cols (large) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full h-full border-3  overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${testimonial.id.toString()}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection2;