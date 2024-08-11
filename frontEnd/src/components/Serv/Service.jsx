import React from 'react';

const services = [
    {
        title: 'Smartcontract Auditor',
        description: 'Examine and analyze smart contracts for security vulnerabilities and efficiency.',
        icon: '🔍', // You can replace this with an appropriate icon component
    },
    {
        title: 'Web3 Developer',
        description: 'Build decentralized applications and integrate blockchain technologies.',
        icon: '🌐', // You can replace this with an appropriate icon component
    },
    {
        title: 'Network Engineering',
        description: 'Design, implement, and manage network infrastructure for optimal performance.',
        icon: '🖧', // You can replace this with an appropriate icon component
    },
];

const ServicesSection = () => {
    return (
        <section className="bg-gray-950 text-white py-16" id='service'>
            <div className="container mx-auto px-4" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;