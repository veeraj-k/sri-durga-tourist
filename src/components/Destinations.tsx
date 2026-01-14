import React from 'react';
import { MapPin, Star, Clock } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  duration: string;
  highlights: string[];
}

const Destinations: React.FC = () => {
  const destinations: Destination[] = [
    {
      id: 1,
      name: "Murudeshwara",
      description: "Home to the world's second tallest Shiva statue and pristine beaches",
      image: "https://images.unsplash.com/photo-1596445836565-3a0a73d5349a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.8,
      duration: "2-3 days",
      highlights: ["Shiva Temple", "Beach Activities", "Scenic Views"]
    },
    {
      id: 2,
      name: "Gokarna",
      description: "Sacred town with beautiful beaches and spiritual significance",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.7,
      duration: "3-4 days",
      highlights: ["Om Beach", "Mahabaleshwar Temple", "Beach Trekking"]
    },
    {
      id: 3,
      name: "Goa",
      description: "Perfect blend of Portuguese culture, beaches, and vibrant nightlife",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f888ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.9,
      duration: "4-5 days",
      highlights: ["Beaches", "Nightlife", "Portuguese Heritage"]
    },
    {
      id: 4,
      name: "Manali",
      description: "Hill station with snow-capped mountains and adventure sports",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.8,
      duration: "5-6 days",
      highlights: ["Snow Activities", "Adventure Sports", "Valley of Gods"]
    },
    {
      id: 5,
      name: "Jaipur",
      description: "Pink City with magnificent palaces, forts, and rich Rajasthani culture",
      image: "https://images.unsplash.com/photo-1567956993156-543b4abdf4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.7,
      duration: "3-4 days",
      highlights: ["City Palace", "Amber Fort", "Local Markets"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore India's most breathtaking locations, from ancient temples to pristine beaches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">{destination.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{destination.duration}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Explore {destination.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
