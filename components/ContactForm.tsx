
import React from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
        <div className="lg:w-1/3 bg-gradient p-12 text-white space-y-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">Ready to Start?</h3>
            <p className="text-blue-100">Book your first strategy session for free today. Our advisors are waiting!</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold uppercase tracking-widest text-xs text-blue-200 mb-1">Call Us</div>
                <div className="text-xl font-medium">+1 (800) EDU-GLIDE</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold uppercase tracking-widest text-xs text-blue-200 mb-1">Email Us</div>
                <div className="text-xl font-medium">hello@eduglide.global</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold uppercase tracking-widest text-xs text-blue-200 mb-1">Visit Us</div>
                <div className="text-xl font-medium">Global HQ, Tech Park, Austin, TX</div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(platform => (
                <div key={platform} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                  <span className="sr-only">{platform}</span>
                  <div className="w-5 h-5 bg-white/30 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 p-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" 
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" 
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Preferred Destination</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none">
                  <option>Select Country</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Germany</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Target Year</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none">
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Your Message (Optional)</label>
              <textarea 
                rows={4}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" 
                placeholder="Tell us about your background..."
              />
            </div>

            <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
              <span>Send My Request</span>
              <Send className="w-5 h-5" />
            </button>
            <p className="text-center text-slate-500 text-sm">We respect your privacy. No spam, ever.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
