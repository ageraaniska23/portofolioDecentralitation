import React, { useState, useEffect } from 'react';
import LaynardHero from './components/About/LaynardHero';
import CardPortofolio from './components/Card/CardPortofolio';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { InfiniteMovingCardsDemo } from './components/AwardCertificate/Award';
import Footer from './components/Footer/Footer';
import Index from './components/Contact/Index';
import Timeline from './components/Skill/Index';
import { FaWallet } from 'react-icons/fa';

const App = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2500); // 1500 ms = 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='min-h-screen flex flex-col items-center justify-between overflow-hidden'>
      {showAnimation ? (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center text-center">
          <FaWallet size={100} className="text-blue-500 animate-pulse" />
          <p className="mt-4 text-lg text-gray-700">
            This website is a portfolio using blockchain technology to run its data.
          </p>
          <p>
            <a
              href="https://polygonscan.com/address/0xeD84e90812a18F10f4bB06eB5DCEa67E5061ABBC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Click here to view the contract
            </a>
          </p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
};

export default App;
