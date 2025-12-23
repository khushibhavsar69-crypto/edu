
import React from 'react';
import { Globe, Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Our Services', href: '#services' },
    { name: 'Where to Study', href: '#destinations' },
    { name: 'How it Works', href: '#process' },
    { name: 'Success Stories', href: '#testimonials' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-sm border-b border-slate-200/50' : 'bg-transparent py-7'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg">
              <Globe className="text-white w-5 h-5" />
            </div>
            <span className={`text-xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              EduGlide<span className="text-blue-600">Global</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Book Free Session
            </a>
          </nav>

          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-slate-200 mt-2 p-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-slate-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Free Session
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
