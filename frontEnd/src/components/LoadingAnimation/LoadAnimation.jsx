import React, { useEffect, useState } from 'react';
import { FaWallet } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LoadingAnimation = ({ onComplete }) => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const dotAnimation = setInterval(() => {
            setDots(prev => (prev.length < 3 ? prev + '.' : ''));
        }, 500);

        const timer = setTimeout(() => {
            clearInterval(dotAnimation);
            onComplete();
        }, 2500);

        return () => {
            clearInterval(dotAnimation);
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-blue-100 to-blue-300 z-50 flex flex-col items-center justify-center text-center"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
                <FaWallet size={100} className="text-blue-600" />
            </motion.div>
            <motion.p 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-5xl text-gray-800 mb-4 font-bold"
            >
                Please wait{dots}
            </motion.p>
            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-4 text-lg text-gray-700"
            >
                Data is loading from the blockchain
            </motion.p>
            <motion.a
                href="https://polygonscan.com/address/0xeD84e90812a18F10f4bB06eB5DCEa67E5061ABBC"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                View Contract on Polygonscan
            </motion.a>
        </motion.div>
    );
};

export default LoadingAnimation;