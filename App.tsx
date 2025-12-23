
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <Stats />
        
        <section id="services">
          <Services />
        </section>

        <section id="destinations" className="bg-slate-100/50 py-24">
          <Destinations />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="testimonials" className="bg-slate-900 text-white">
          <Testimonials />
        </section>

        <section id="contact" className="py-24">
          <ContactForm />
        </section>
      </main>

      <Footer />
      
      {/* Floating AI Consultant */}
      <AIConsultant />
    </div>
  );
};

export default App;
