import React from 'react';
import { Calendar, Users, Star } from 'lucide-react';

interface TourPackage {
  id: number;
  name: string;
  duration: string;
  price: string;
  originalPrice: string;
  image: string;
  rating: number;
  groupSize: string;
  highlights: string[];
  inclusions: string[];
  category: 'domestic' | 'international';
}

const TourPackages: React.FC = () => {
  const packages: TourPackage[] = [
    {
      id: 1,
      name: "South India Temple Tour",
      duration: "7 days",
      price: "₹45,999",
      originalPrice: "₹55,999",
      image: "https://images.unsplash.com/photo-1596445836565-3a0a73d5349a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.9,
      groupSize: "2-6 people",
      highlights: ["Tamil Nadu Temples", "Kerala Backwaters", "Mysore Palace"],
      inclusions: ["Hotels", "Transport", "Guide", "Meals"],
      category: 'domestic'
    },
    {
      id: 2,
      name: "Karnataka Coastal Tour",
      duration: "5 days",
      price: "₹32,999",
      originalPrice: "₹39,999",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.8,
      groupSize: "2-8 people",
      highlights: ["Murudeshwara", "Gokarna", "Udupi", "Mangalore"],
      inclusions: ["Hotels", "Transport", "Guide", "Breakfast"],
      category: 'domestic'
    },
    {
      id: 3,
      name: "Golden Triangle Tour",
      duration: "6 days",
      price: "₹38,999",
      originalPrice: "₹45,999",
      image: "https://images.unsplash.com/photo-1567956993156-543b4abdf4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.7,
      groupSize: "2-10 people",
      highlights: ["Delhi", "Agra Taj Mahal", "Jaipur Pink City"],
      inclusions: ["Hotels", "Transport", "Guide", "Monument Entry"],
      category: 'domestic'
    },
    {
      id: 4,
      name: "Dubai Getaway",
      duration: "5 days",
      price: "₹65,999",
      originalPrice: "₹79,999",
      image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.9,
      groupSize: "2-6 people",
      highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "City Tour"],
      inclusions: ["Flights", "Hotels", "Visa", "Transfers", "Tours"],
      category: 'international'
    },
    {
      id: 5,
      name: "Thailand Adventure",
      duration: "6 days",
      price: "₹42,999",
      originalPrice: "₹52,999",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.8,
      groupSize: "2-8 people",
      highlights: ["Bangkok", "Phuket Beaches", "Temple Tours", "Island Hopping"],
      inclusions: ["Flights", "Hotels", "Transfers", "Island Tours"],
      category: 'international'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exclusive Tour Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handcrafted itineraries for unforgettable experiences across India and beyond
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 flex gap-2">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium transition-colors">
              All Packages
            </button>
            <button className="px-6 py-2 text-gray-700 hover:bg-gray-200 rounded-lg font-medium transition-colors">
              Domestic
            </button>
            <button className="px-6 py-2 text-gray-700 hover:bg-gray-200 rounded-lg font-medium transition-colors">
              International
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    pkg.category === 'international' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-green-600 text-white'
                  }`}>
                    {pkg.category === 'international' ? 'International' : 'Domestic'}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{pkg.rating}</span>
                </div>

                {/* Discount Badge */}
                <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-lg font-bold">
                  Save {Math.round(((parseInt(pkg.originalPrice.replace(/[₹,]/g, '')) - parseInt(pkg.price.replace(/[₹,]/g, ''))) / parseInt(pkg.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pkg.name}</h3>
                
                {/* Duration and Group Size */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Inclusions */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Includes:</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.inclusions.map((inclusion, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-gray-500 flex items-center gap-1"
                      >
                        ✓ {inclusion}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                    </div>
                    <span className="text-xs text-gray-500">per person</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
