import React from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-2 md:pt-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Spline 3D Animation */}
        <spline-viewer
          url="https://prod.spline.design/PBx-mrQP6suIxaZD/scene.splinecode"
          className="absolute inset-0 w-full h-full opacity-60"
        ></spline-viewer>

        {/* White overlay for text readability */}
        <div className="absolute inset-0 bg-white/50 to bg-white/70"></div>

        {/* Cover Spline watermark */}
        <div className="absolute bottom-0 right-0 w-48 h-16 bg-white z-20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight text-shadow-lg px-2">
            <span className="block">Stay Competitive</span>
            <span className="block">
              <span className="text-gray-900">with </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-700 to-green-800 relative inline-block">
                Smart Automation
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-600 to-green-800 rounded-full"></span>
              </span>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-medium text-shadow px-2">
            'Stop AI! It will take our jobs!' You mean filling in our spreadsheets? Updating our CRM? Dealing with our most common customer queries instantly? Sounds good to me! 
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
            <a href="#contact" className="group relative bg-green-600 hover:bg-green-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center overflow-hidden backdrop-blur-sm w-full sm:w-auto justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Started Today</span>
              <ArrowRight className="relative z-10 ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a href="/portfolio" className="group flex items-center text-gray-700 hover:text-green-600 font-semibold text-base sm:text-lg transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm shadow-xl rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 ml-0.5" />
              </div>
              <span className="border-b-2 border-transparent group-hover:border-green-600 transition-all duration-300">
                View Our Work
              </span>
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto px-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 text-shadow">150+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Projects</div>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 text-shadow">80+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 text-shadow">5+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;