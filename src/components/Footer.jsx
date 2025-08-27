import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
               <img  className="h-20 rounded-sm w-auto" alt="Dzikwa Trust Logo Inverted" src="https://i.imgur.com/8shKFyA.jpg" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering communities through education, wellbeing programs, and sustainable development initiatives.
            </p>
<div className="flex space-x-4">
  <a 
    href="https://www.facebook.com/dzikwatrustfund" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
  </a>

    {/* <a 
      href="https://twitter.com/YourPage" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
    </a> */}

  <a 
    href="https://www.instagram.com/dzikwa_trust_fund" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
  </a>

  <a 
    href="https://www.linkedin.com/company/102135222/admin/dashboard" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
  </a>
</div>

          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Quick Links</span>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/programs" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Our Programs
              </Link>
              <Link to="/news" className="block text-gray-300 hover:text-white transition-colors text-sm">
                News
              </Link>
              <Link to="/gallery" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Gallery
              </Link>
              <Link to="/donate" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Donate
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Programs</span>
            <div className="space-y-2">
              <span className="block text-gray-300 text-sm">Education</span>
              <span className="block text-gray-300 text-sm">Wellbeing</span>
              <span className="block text-gray-300 text-sm">Edu4Talent</span>
              <span className="block text-gray-300 text-sm">Reforestation</span>
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-gray-300 text-sm">'Dzikwa Centre', '3147 Rujeko St', 'Dzivarasekwa 1, Harare'</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-gray-300 text-sm">+263 242 217460</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-gray-300 text-sm">dzikwatrust@africaonline.co.zw</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Dzikwa Trust. All rights reserved. | Registered Charity Organization
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;