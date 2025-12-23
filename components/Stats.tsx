
import React from 'react';
import { Users, GraduationCap, Building2, Trophy } from 'lucide-react';
import { Stat } from '../types';

const Stats: React.FC = () => {
  const stats: Stat[] = [
    { label: 'Students Assisted', value: '15,000+', icon: <Users className="w-5 h-5" /> },
    { label: 'Visa Success', value: '99.4%', icon: <Trophy className="w-5 h-5" /> },
    { label: 'Partner Unis', value: '850+', icon: <Building2 className="w-5 h-5" /> },
    { label: 'Scholarships', value: '$45M+', icon: <GraduationCap className="w-5 h-5" /> },
  ];

  return (
    <div className="py-10 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center space-x-6">
              <div className="bg-slate-50 p-4 rounded-2xl text-blue-600 shadow-inner">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900 tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
