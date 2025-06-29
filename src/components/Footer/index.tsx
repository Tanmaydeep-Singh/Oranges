// components/Footer.tsx
import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400">Oranged</h2>
          <p className="mt-3 text-sm">
            Helping kids grow smarter, one game at a time.  
            Gamified + AI powered learning platform 🚀
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-orange-400">About</a></li>
            <li><a href="#features" className="hover:text-orange-400">Features</a></li>
            <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
            <li><a href="#faq" className="hover:text-orange-400">FAQ</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect with us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://twitter.com" target="_blank" className="hover:text-orange-400"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-orange-400"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-orange-400"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Oranged. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
