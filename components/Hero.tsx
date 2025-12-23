
import React from 'react';
import { ArrowRight, MapPin, Sparkles, GraduationCap, PlaneTakeoff, Heart, Bell, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Dynamic Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[5%] right-[10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[130px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[110px] opacity-40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center space-x-2 bg-white border border-slate-100 px-4 py-2 rounded-2xl shadow-sm text-blue-600 font-bold text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>Real Success, Real Stories</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Your Future, <br />
              <span className="text-gradient">In Motion.</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
              We don't just process visas; we build success stories. Join 15,000+ students who have already unlocked their global potential.
            </p>

            <div className="flex flex-wrap gap-5">
              <a href="#contact" className="bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-bold flex items-center space-x-3 shadow-2xl hover:bg-blue-600 hover:scale-105 transition-all">
                <span>Join the Success Stream</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden flex items-center justify-center shadow-sm">
                    <img src={`https://i.pravatar.cc/100?u=${i + 75}`} className="w-full h-full object-cover" alt="Successful Student" />
                  </div>
                ))}
                <div className="pl-6 text-sm font-bold text-slate-400 uppercase tracking-widest">15k+ Success Stories</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-slate-50">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-50 p-2.5 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Visa Secured</div>
                  <p className="text-xs text-slate-500 mt-1">99.4% approval rate across all countries.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-2.5 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Career Lift</div>
                  <p className="text-xs text-slate-500 mt-1">Top-tier university placements globally.</p>
                </div>
              </div>
            </div>
          </div>

          {/* THE SUCCESS DASHBOARD VISUAL */}
          <div className="relative lg:block hidden">
            <div className="relative z-10 w-full max-w-[480px] mx-auto">
              
              {/* PRIMARY VISUAL: Journey Progress Card */}
              <div className="bg-white rounded-[3.5rem] p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-50 relative overflow-hidden group">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-sm tracking-tight">Success Journey</h4>
                      <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest">Active Application</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black border border-emerald-100">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                    ON TRACK
                  </div>
                </div>

                {/* Progress Timeline */}
                <div className="space-y-6 relative mb-10">
                  <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-100"></div>
                  
                  <div className="relative flex items-center space-x-4 pl-0">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10 text-white shadow-lg shadow-blue-200">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-black text-slate-900">Profile Optimized</div>
                      <div className="text-[10px] text-slate-400 font-medium">Ivy-League Standard Benchmarking</div>
                    </div>
                  </div>

                  <div className="relative flex items-center space-x-4 pl-0">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10 text-white shadow-lg shadow-blue-200">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-black text-slate-900">University Offer Received</div>
                      <div className="text-[10px] text-blue-600 font-bold">University of Melbourne - MSc Data Science</div>
                    </div>
                  </div>

                  <div className="relative flex items-center space-x-4 pl-0 opacity-50 grayscale">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center z-10 text-slate-400">
                      <PlaneTakeoff className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-black text-slate-900">Final Visa Filing</div>
                      <div className="text-[10px] text-slate-400 font-medium italic">Estimated completion in 3 days</div>
                    </div>
                  </div>
                </div>

                {/* Profile Strength Meter */}
                <div className="bg-slate-50 rounded-[2.5rem] p-6 border border-slate-100">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Admission IQ Score</span>
                    <span className="text-sm font-black text-blue-600">92/100</span>
                  </div>
                  <div className="h-2 w-full bg-white rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 w-[92%] transition-all duration-1000"></div>
                  </div>
                </div>
              </div>

              {/* FLOATING COMPONENT 1: Live Success Notifications */}
              <div className="absolute -top-10 -right-16 w-64 bg-white/80 backdrop-blur-xl p-5 rounded-[2.5rem] shadow-2xl border border-white/50 animate-float">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Bell className="text-blue-600 w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Recent Wins</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <img src="https://i.pravatar.cc/100?u=a" className="w-8 h-8 rounded-full" alt="Winner" />
                    <p className="text-[11px] font-medium text-slate-600 leading-tight">
                      <span className="font-bold text-slate-900">Aryan K.</span> just got his UK Visa!
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <img src="https://i.pravatar.cc/100?u=b" className="w-8 h-8 rounded-full" alt="Winner" />
                    <p className="text-[11px] font-medium text-slate-600 leading-tight">
                      <span className="font-bold text-slate-900">Sofia M.</span> admitted to Stanford.
                    </p>
                  </div>
                </div>
              </div>

              {/* FLOATING COMPONENT 2: Destination Stamp */}
              <div className="absolute -bottom-8 -left-12 bg-slate-900 text-white p-6 rounded-[3rem] shadow-2xl rotate-[-4deg] animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-0.5">Destination Locked</div>
                    <div className="text-lg font-black tracking-tight leading-none">London, UK</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-slate-400 uppercase">Visa Ready</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
