import React from 'react';
import { Bot, Globe, Workflow, Share2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Customer Service',
      description: 'Intelligent AI-powered customer service solutions that handle inquiries 24/7 across chat and phone, improving response times and customer satisfaction.',
      features: ['AI Chatbots', 'AI Phone Agents', 'Multi-platform Integration', 'Natural Language Processing']
    },
    {
      icon: Globe,
      title: 'Website Development & Maintenance',
      description: 'Modern, responsive websites built for performance with ongoing support, optimization, and search visibility strategies.',
      features: ['Custom Website Design', 'SEO Optimization', 'GEO Optimization', 'Ongoing Maintenance']
    },
    {
      icon: Workflow,
      title: 'Workflow Automation & Outreach',
      description: 'Streamline repetitive tasks, optimize business processes, and automate outreach campaigns to save time and scale efficiently.',
      features: ['Process Automation', 'Email Outreach', 'Lead Nurturing', 'Integration Setup']
    },
    {
      icon: Share2,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies including social media management, content creation, and campaign optimization.',
      features: ['Social Media Management', 'Content Creation', 'Campaign Strategy', 'Analytics & Reporting']
    }
  ];

  return (
    <section id="services" className="pt-0 pb-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intelligent automation solutions designed to save you time and money
            while scaling your business efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;