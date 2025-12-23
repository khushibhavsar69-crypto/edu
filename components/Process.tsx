
import React from 'react';
import { Compass, Target, GraduationCap, CheckCircle } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Map the Dream',
      text: 'Tell us where you want to go. We find the universities that will love having you.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Craft the Pitch',
      text: 'We help you write the perfect SOP and build a profile that stands out from the crowd.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Win the Visa',
      text: 'Our experts guide your interview prep to ensure a smooth transition abroad.'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Hello Future',
      text: 'You land, you settle, and you start the most exciting chapter of your life.'
    }
  ];

  return (
    <div className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-blue-600 font-black uppercase tracking-widest text-xs">The Roadmap</h2>
          <h3 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter">Your Path to <span className="text-gradient">Landing Day</span></h3>
        </div>

        <div className="grid lg:grid-cols-4 gap-12 relative">
          {/* Decorative Connecting Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-slate-200/50 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative group text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-white text-blue-600 rounded-[2rem] shadow-xl shadow-slate-200 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:-translate-y-2">
                {step.icon}
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {step.text}
              </p>
              <div className="absolute top-0 right-0 lg:right-4 opacity-10 text-6xl font-black text-slate-900 group-hover:opacity-20 transition-opacity">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
