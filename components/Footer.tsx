
import React from 'react';
import { Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient p-2 rounded-lg">
                <Globe className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                EduGlide<span className="text-blue-600">Global</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-6">
              Empowering students to achieve their global academic dreams since 2012. Trusted by thousands of successful graduates worldwide.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Destinations</h5>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Study in USA</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Study in UK</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Study in Canada</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Study in Australia</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Services</h5>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Visa Counseling</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">IELTS Coaching</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Scholarships</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Stay Connected</h5>
            <p className="text-slate-500 mb-4 text-sm">Join our newsletter for the latest intake updates and visa alerts.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm w-full outline-none focus:ring-1 focus:ring-blue-500" />
              <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© 2024 EduGlide Global Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
            <a href="#" className="hover:text-slate-600">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
