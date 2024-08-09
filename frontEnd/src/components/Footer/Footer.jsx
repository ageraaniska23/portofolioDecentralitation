import React from 'react';
import './Footer.css';

const Footer = () => {
    // Generate random stars
    const stars = Array.from({ length: 200 }, (_, i) => ({
        id: i,
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        duration: Math.random() * 5 + 5 + 's', // Random duration between 5 and 10 seconds
        delay: Math.random() * 5 + 's' // Random delay up to 5 seconds
    }));

    return (
        <div className="footer bg-gray-950 text-neutral-content  p-12 relative overflow-hidden">
            {stars.map(star => (
                <div
                    key={star.id}
                    className="star absolute w-0.2 h-0.2 bg-[#00eaff] rounded-full"
                    style={{
                        left: star.left,
                        top: star.top,
                        animationDuration: star.duration,
                        animationDelay: star.delay
                    }}
                ></div>
            ))}
            <div className="text-center">
                <p className="text-gray-50 mb-4 font-extralight">
                {/* アゲラ・アニスカ */}
                Agera Aniska - 2024
                </p>
                
            </div>
        </div>
    );
}

export default Footer;
