
import React from 'react';
import { Quote, Star, ArrowUpRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      university: 'Oxford University, UK',
      course: 'MSc Computer Science',
      image: 'https://i.pravatar.cc/150?u=sarah',
      text: "I didn't just get an admission; I got the confidence to move across the world. EduGlide's team felt like family throughout my journey."
    },
    {
      name: 'Rahul Sharma',
      university: 'University of Toronto, Canada',
      course: 'MBA',
      image: 'https://i.pravatar.cc/150?u=rahul',
      text: "My visa was a complex case, but their meticulous prep made it feel easy. Landed in Toronto and they even helped me find a place to stay!"
    },
    {
      name: 'Elena Rodriguez',
      university: 'Stanford University, USA',
      course: 'PhD Data Science',
      image: 'https://i.pravatar.cc/150?u=elena',
      text: "They saw potential in my profile I didn't even know I had. Securing a full scholarship was a dream I never thought would come true."
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs">Stories of Change</h2>
            <h3 className="text-4xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">Students Who <br />Found Their <span className="text-gradient">Home.</span></h3>
            <p className="text-slate-500 text-lg font-medium max-w-lg">
              Education is personal. Our success is measured by the miles our students travel and the lives they build once they land.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="bg-slate-50 px-6 py-4 rounded-3xl border border-slate-100 flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-xl font-black text-slate-900">4.9/5</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Trust</span>
              </div>
              <button className="flex items-center space-x-2 text-blue-600 font-black text-sm uppercase tracking-widest hover:underline">
                <span>View all stories</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-slate-900 text-lg">{t.name}</h4>
                      <Quote className="w-6 h-6 text-blue-100" />
                    </div>
                    <p className="text-blue-600 text-xs font-black uppercase tracking-widest mt-1">{t.university}</p>
                    <p className="text-slate-600 italic text-sm mt-4 leading-relaxed font-medium">"{t.text}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
