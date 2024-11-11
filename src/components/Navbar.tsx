import React from 'react';
import { Link } from 'react-scroll';
import { Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-primary text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="home" smooth={true} className="flex items-center space-x-2 cursor-pointer">
            <Home className="text-accent" size={32} />
            <span className="text-xl font-bold">DJJ Construction</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="home" smooth={true} className="font-bold hover:text-accent cursor-pointer">Home</Link>
            <Link to="services" smooth={true} className="font-bold hover:text-accent cursor-pointer">Services</Link>
            <Link to="testimonials" smooth={true} className="font-bold hover:text-accent cursor-pointer">Testimonials</Link>
            <Link 
              to="contact" 
              smooth={true} 
              className="bg-accent text-primary px-4 py-2 rounded-md hover:bg-opacity-90 transition-all cursor-pointer font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;