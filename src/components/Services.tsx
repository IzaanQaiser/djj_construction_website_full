import React from 'react';
import { Building2, Home, Factory, Warehouse, Ruler, PaintBucket, Wrench, Hammer, HardHat } from 'lucide-react';

const services = [
  { icon: Building2, title: 'Kitchen Remodeling', description: 'Full-service kitchen remodeling solutions' },
  { icon: Home, title: 'Residential Construction', description: 'Custom home building and renovations' },
  { icon: Factory, title: 'Property Management', description: 'Specialized and personalized property management' },
  { icon: Warehouse, title: 'Home Renovation', description: 'Complete property renovation services' },
  { icon: Ruler, title: 'Project Planning', description: 'Comprehensive construction planning' },
  { icon: PaintBucket, title: 'Interior Remodeling', description: 'Expert interior remodeling services' },
  { icon: Wrench, title: 'Maintenance', description: 'Ongoing maintenance and repairs' },
  { icon: Hammer, title: 'Custom Projects', description: 'Tailored construction solutions' },
  { icon: HardHat, title: 'Project Management', description: 'Professional project oversight' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl"
            >
              <service.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;