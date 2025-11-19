import React from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Target, label: 'Projects Completed', value: '150+' },
    { icon: Users, label: 'Happy Clients', value: '80+' },
    { icon: Zap, label: 'Automations Built', value: '200+' },
    { icon: Award, label: 'Years Experience', value: '5+' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Growing Businesses Through
              <span className="text-green-600 block">Smart Technology</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              AI won’t leave you behind unless you stand still. At SeededMedia, we stay at the cutting edge of technology so our clients and partners don’t get left out of the race.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              If you are willing to let go of your tedious 'but someone's got to do it' tasks, we can help.  
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-white rounded-xl shadow-md">
                  <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700">
                 To remove the mind-numbing tasks from businesses so they can focus on the work only humans can do.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">AI-First Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Data-Driven Results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Scalable Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;