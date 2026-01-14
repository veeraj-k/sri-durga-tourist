import React from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524492412931-b7c3db0a9b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="India Tourism"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover the Magic of
          <span className="block text-blue-400">Incredible India</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          From ancient temples to pristine beaches, from majestic mountains to vibrant cities - 
          your unforgettable journey begins here
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105">
            Explore Tours
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
            View Destinations
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 mb-2 text-blue-400" />
            <div className="text-3xl font-bold">50+</div>
            <div className="text-gray-300">Destinations</div>
          </div>
          <div className="flex flex-col items-center">
            <Calendar className="w-8 h-8 mb-2 text-blue-400" />
            <div className="text-3xl font-bold">100+</div>
            <div className="text-gray-300">Tour Packages</div>
          </div>
          <div className="flex flex-col items-center">
            <ArrowRight className="w-8 h-8 mb-2 text-blue-400" />
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
