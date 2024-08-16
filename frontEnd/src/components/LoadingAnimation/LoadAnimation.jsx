import React, { useEffect } from 'react';
import { FaWallet } from 'react-icons/fa';

const LoadingAnimation = ({ onComplete }) => {
    useEffect(() => {
        const dotAnimation = setInterval(() => {
            onComplete();
        }, 2500);

        return () => clearInterval(dotAnimation);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center text-center">
            <FaWallet size={100} className="text-blue-500 animate-pulse" />
            <p className="text-5xl text-gray-950 mb-4">please wait...</p>
            <p className="mt-4 text-lg text-gray-700">
                This website is a portfolio using blockchain technology to run its data.
            </p>
            <a
                href="https://polygonscan.com/address/0xeD84e90812a18F10f4bB06eB5DCEa67E5061ABBC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
            >
                Click here to view the contract
            </a>
        </div>
    );
};

export default LoadingAnimation;
