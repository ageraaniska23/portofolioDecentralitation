import React from 'react';
import { useFetchContractData } from '../../../Data/Data';
import ServicesSection from '../Serv/Service';

const Experience = () => {
    const { experience, isLoading } = useFetchContractData();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const experienceData = experience.map((exp, index) => ({
        ...exp,
        icon: '👨‍💻', // You can replace this with an appropriate icon component
    }));

    return (
        <section className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-950 px-4" id='experience'>
            <div className="container mx-auto px-4" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {experienceData.map((experience, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-md w-full"
                        >
                            <div className="text-4xl mb-4 text-center">{experience.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-center text-white">{experience.companyName}</h3>
                            <p className="text-cyan-400 mb-2 text-center">{experience.location}</p>
                            <p className="text-lg font-medium mb-2 text-center text-white">{experience.position}</p>
                            <p className="text-gray-400 mb-4 text-center">{experience.period}</p>
                            <p className="text-gray-300 text-center">{experience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <ServicesSection/>
        </section>
    );
};

export default Experience;