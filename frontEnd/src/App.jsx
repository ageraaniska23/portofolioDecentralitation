import React, { useState, useEffect } from 'react';
import LaynardHero from './components/About/LaynardHero';
import CardPortofolio from './components/Card/CardPortofolio';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { InfiniteMovingCardsDemo } from './components/AwardCertificate/Award';
import Footer from './components/Footer/Footer';
import Index from './components/Contact/Index';
import Timeline from './components/Skill/Index';
import Experience from './components/Experience/Experience';
import LoadingAnimation from './components/LoadingAnimation/LoadAnimation';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-between overflow-hidden">
      <Analytics />
      {showAnimation ? (
        <LoadingAnimation onComplete={() => setShowAnimation(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <LaynardHero />
          <Experience />
          <Timeline />
          <InfiniteMovingCardsDemo />
          <CardPortofolio />
          <Index />
          <Footer />
        </>
      )}
    </main>
  );
};

export default App;
