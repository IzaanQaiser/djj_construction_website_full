import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Brantford Customer',
    role: 'Home Owner',
    content: 'DJJ Construction provided me with an amazing home renovation service that exceeded all of my expectations. The staff was very professional, the quality of the work was outstanding, and the end result was stunning. I would highly recommend DJJ Construction to anyone looking for a top-notch renovation.',
  },
  {
    name: 'Burlington Customer',
    role: 'Home Owner',
    content: 'DJJ Renovations provided me with an amazing home renovation service that exceeded all of my expectations. The staff was very professional, the quality of the work was outstanding, and the end result was stunning. I would highly recommend DJJ Renovations to anyone looking for a top-notch renovation in Burlington, ON.',
  },
  {
    name: 'Milton Customer',
    role: 'Home Owner',
    content: 'DJJ Renovations transformed my Milton home with exceptional renovation services that far exceeded my expectations. The team was professional, the craftsmanship was outstanding, and the final result was absolutely stunning. I highly recommend DJJ Renovations to anyone seeking high-quality home renovations.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-gray-50 p-6 rounded-lg"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-primary text-lg">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent" fill="#e6c409" />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;