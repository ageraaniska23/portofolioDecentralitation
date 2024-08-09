import React, { useState, useEffect } from 'react';
import LaynardHero from './components/About/LaynardHero';
import CardPortofolio from './components/Card/CardPortofolio';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { InfiniteMovingCardsDemo } from './components/AwardCertificate/Award';
import Footer from './components/Footer/Footer';
import Index from './components/Contact/Index';
import Timeline from './components/Skill/Index';

const App = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowAlert(true);

      const hideTimer = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // 5000 ms = 5 seconds

      return () => clearTimeout(hideTimer);
    }, 3000); // 3000 ms = 3 seconds

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <main className='min-h-screen flex flex-col items-center justify-between overflow-hidden'>
      <Navbar />
      
      {/* HERO */}
      <Hero />

      {/* ABOUT ME */}
      <LaynardHero />

      {/* EDUCATION */}
      <Timeline />

      {/* AWARD */}
      <InfiniteMovingCardsDemo />

      {/* PORTOFOLIO */}
      <CardPortofolio />

      {/* CONTACT */}
      <Index />

      <Footer />
    </main>
  );
};

export default App;
