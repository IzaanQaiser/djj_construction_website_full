import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="hero h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">We Turn Your Dreams Into Reality</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
        Expert construction services dedicated to delivering excellence, innovation, and unmatched quality craftsmanship.
        </p>
        <Link
          to="contact"
          smooth={true}
          className="bg-accent text-primary px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-all cursor-pointer inline-block"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;