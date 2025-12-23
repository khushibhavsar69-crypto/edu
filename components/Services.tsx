
import React from 'react';
// Import missing ArrowRight icon from lucide-react
import { Compass, FileCheck, BookOpen, GraduationCap, Map, Home, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Discovery & Fit',
      description: 'Beyond just grades. We find the university that fits your personality and your future goals.',
      icon: <Compass className="w-6 h-6" />
    },
    {
      title: 'The Paperwork Pro',
      description: 'Zero stress applications. We handle the heavy lifting, documentation, and university back-and-forth.',
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: 'Score Booster',
      description: 'Master your exams. Personalized coaching for IELTS, TOEFL, and GRE to unlock the best schools.',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: 'The Money Guide',
      description: 'Finding the funds. We search for scholarships and aid that help make your dream affordable.',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: 'Visa Concierge',
      description: 'Smooth crossing. Expert interview prep and filing to ensure your passport gets that vital stamp.',
      icon: <Map className="w-6 h-6" />
    },
    {
      title: 'Landing & Beyond',
      description: 'You’re never alone. We help find your first home and get you settled in your new city.',
      icon: <Home className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs">A Full Cycle of Care</h2>
            <h3 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
              Your World, <br />
              <span className="text-gradient">Fully Supported.</span>
            </h3>
          </div>
          <p className="text-slate-500 text-lg max-w-sm font-medium">
            From the first spark of an idea to the first day of class, we are your partners in this transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-50 p-10 rounded-[3rem] hover:bg-slate-900 hover:scale-[1.02] transition-all duration-500 cursor-default"
            >
              <div className="bg-white text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-white transition-colors duration-500 tracking-tight">{service.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 group-hover:text-slate-400 transition-colors duration-500 font-medium">
                {service.description}
              </p>
              <div className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center group-hover:border-blue-600 group-hover:text-blue-400 transition-all duration-500">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
