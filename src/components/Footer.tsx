import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Incredible India Tours</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for exploring the diverse beauty and rich culture of India.
            </p>
            <div className="flex gap-3">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Tour Packages</button></li>
              <li><button onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Destinations</button></li>
              <li><button onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li><button onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Goa</button></li>
              <li><button onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Kerala</button></li>
              <li><button onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Rajasthan</button></li>
              <li><button onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors">Himachal</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">info@incredibleindiatours.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Incredible India Tours. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
