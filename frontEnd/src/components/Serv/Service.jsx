import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSearch, FaGlobe, FaNetworkWired } from 'react-icons/fa';

const services = [
    {
        title: 'Smartcontract Auditor',
        description: 'Examine and analyze smart contracts for security vulnerabilities and efficiency.',
        icon: <FaSearch className="text-blue-400" />,
    },
    {
        title: 'Web3 Developer',
        description: 'Build decentralized applications and integrate blockchain technologies.',
        icon: <FaGlobe className="text-green-400" />,
    },
    {
        title: 'Network Engineering',
        description: 'Design, implement, and manage network infrastructure for optimal performance.',
        icon: <FaNetworkWired className="text-purple-400" />,
    },
];

const ServicesSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section className="bg-gray-950 text-white py-20" id='service'>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <div className="text-6xl mb-6 flex justify-center">{service.icon}</div>
                            <h3 className="text-2xl font-semibold mb-4 text-center">{service.title}</h3>
                            <p className="text-gray-400 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;