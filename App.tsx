
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Differences from './components/Differences';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AssistantChat from './components/AssistantChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Differences />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <AssistantChat />
    </div>
  );
};

export default App;
