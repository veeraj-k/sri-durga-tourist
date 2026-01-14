import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  tour: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      tour: "Karnataka Coastal Tour",
      rating: 5,
      comment: "Absolutely amazing experience! The Karnataka Coastal Tour exceeded all our expectations. The guide was knowledgeable, the hotels were excellent, and the itinerary was perfectly planned. Murudeshwara temple and Gokarna beaches were breathtaking!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Rahul Verma",
      location: "Delhi, India",
      tour: "Golden Triangle Tour",
      rating: 5,
      comment: "The Golden Triangle Tour was fantastic! From the majestic Taj Mahal to the vibrant streets of Jaipur, every moment was memorable. The driver was punctual and the guide shared fascinating historical insights. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      location: "London, UK",
      tour: "South India Temple Tour",
      rating: 5,
      comment: "As a foreign tourist, I was worried about cultural differences, but the team made everything seamless. The South India Temple Tour was spiritually enriching and culturally immersive. The Kerala backwaters were simply magical!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "3 weeks ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from real travelers who explored India with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-center">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  <div className="text-xs text-blue-600 mt-1">{testimonial.tour}</div>
                </div>
              </div>

              {/* Date */}
              <div className="text-center mt-4">
                <span className="text-xs text-gray-400">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex justify-center gap-1 mb-4">
              {renderStars(5)}
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9 out of 5</div>
            <div className="text-gray-600 mb-4">Based on 2,847 reviews</div>
            <div className="flex justify-center gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Excellent
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Verified Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
