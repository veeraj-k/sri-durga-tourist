import React from 'react';
import { Award, MapPin, HeadphonesIcon, DollarSign, Shield, Users } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Expert Guides",
      description: "Professional local guides with deep knowledge of Indian culture, history, and hidden gems"
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Custom Itineraries",
      description: "Personalized tour plans tailored to your preferences, budget, and travel style"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Best Price Guarantee",
      description: "Competitive pricing with no hidden costs and transparent pricing policies"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance during your entire journey"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Safe & Secure",
      description: "Verified partners, insured tours, and adherence to all safety protocols"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "10,000+ Happy Travelers",
      description: "Trusted by thousands of satisfied customers across the globe"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to making your travel dreams come true with exceptional service and unforgettable experiences
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">ISO Certified</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Award Winning</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">Govt. Approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
