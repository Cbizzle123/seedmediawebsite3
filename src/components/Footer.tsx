import React from 'react';
import { Linkedin, Instagram, Dribbble, Palette } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/portfolio image (2).png"
                alt="Seeded Media Logo"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl font-bold text-white">Seeded Media</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses with intelligent automation and strategic digital marketing
              solutions that drive sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/seeded_media/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://dribbble.com/charlie_bennett"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors group"
              >
                <Dribbble className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.behance.net/charliebennett18"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors group"
              >
                <Palette className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/charlie-bennett-13b311210/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">AI Chatbots</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Workflow Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Content Systems</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Social Media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Email Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">SEO</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-green-400 transition-colors">Portfolio</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-green-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Seeded Media. All rights reserved. Built with passion for growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;