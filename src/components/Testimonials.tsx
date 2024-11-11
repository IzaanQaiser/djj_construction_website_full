import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'Business Owner',
    content: 'DJJ Construction exceeded our expectations. Their attention to detail and professional approach made our commercial project a success.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'We couldn\'t be happier with our new home. The team was professional, efficient, and delivered exactly what we envisioned.',
  },
  {
    name: 'Michael Chen',
    role: 'Project Manager',
    content: 'Outstanding service and communication throughout the entire project. DJJ Construction is our go-to partner for all construction needs.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
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