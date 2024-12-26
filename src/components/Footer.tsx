import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DJJ Construction</h3>
            <p className="text-gray-300">
              Building excellence through quality craftsmanship and dedication to our clients' vision.
            </p>
          </div>
          
          <div className='pl-0 lg:pl-20 md:pl-0 '>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-accent" />
                <span>(647) 632-3557</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-accent" />
                <a 
                  href="mailto:djjcanconstruction@gmail.com" 
                  className="hover:text-accent transition-colors"
                >
                  djjcanconstruction@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-accent" />
                <span>Ontario, Canada</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: CLOSED</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} DJJ Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;