
import React from 'react';
import { Destination } from '../types';
import { ExternalLink, Globe } from 'lucide-react';

const Destinations: React.FC = () => {
  const destinations: Destination[] = [
    {
      country: 'USA',
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&h=1000&auto=format&fit=crop',
      universities: 400,
      visaSuccess: '98%',
      description: 'The world leader in technology and innovation with thousands of program options.'
    },
    {
      country: 'UK',
      image: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=800&h=1000&auto=format&fit=crop',
      universities: 160,
      visaSuccess: '99%',
      description: 'Experience historic excellence with 1-year Master’s programs and work permits.'
    },
    {
      country: 'Canada',
      image: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?q=80&w=800&h=1000&auto=format&fit=crop',
      universities: 100,
      visaSuccess: '97%',
      description: 'Friendly environment with easy pathways to permanent residency after graduation.'
    },
    {
      country: 'Australia',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&h=1000&auto=format&fit=crop',
      universities: 43,
      visaSuccess: '96%',
      description: 'Stunning lifestyle and world-class universities in a thriving global economy.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4">
        <div className="max-w-xl space-y-3">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs">Top Destinations</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Where Will You Study?</h3>
          <p className="text-slate-600 font-medium">
            Explore our most popular countries for international students and find your perfect fit.
          </p>
        </div>
        <button className="flex items-center space-x-2 text-blue-600 font-bold hover:text-blue-700 transition-all">
          <Globe className="w-5 h-5" />
          <span>See all countries</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest, idx) => (
          <div key={idx} className="group relative h-[450px] rounded-3xl overflow-hidden shadow-lg">
            <img 
              src={dest.image} 
              alt={dest.country} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h4 className="text-2xl font-bold text-white mb-2 flex items-center justify-between">
                {dest.country}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-slate-200 text-xs mb-6 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                {dest.description}
              </p>
              
              <div className="flex space-x-6 border-t border-white/20 pt-4">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Unis</div>
                  <div className="text-lg font-bold text-white">{dest.universities}+</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Success</div>
                  <div className="text-lg font-bold text-blue-400">{dest.visaSuccess}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
