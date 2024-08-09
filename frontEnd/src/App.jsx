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

      {showAlert && (
        <div
          role="alert"
          className={`fixed bottom-4 right-4 p-4 flex items-center text-sm transition-opacity duration-1000 ${showAlert ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="card text-primary-content shadow-md bg-[#00eaff]">
            <div className="card-body">
              <h2 className="card-title">Information</h2>
              <p>This website is powered by Web3 technology.</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default App;
