import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { useFetchContractData } from '../../../Data/Data'; // Update the path as necessary

const Timeline = () => {
    const { Education, isLoading } = useFetchContractData();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const colors = ['bg-cyan-400', 'bg-blue-400'];

    const timelineData = Education.map((education, index) => ({
        year: education.datesAttended,
        title: education.institute,
        Programs: education.program,
        descriptions: education.description,
        color: colors[index % 2],        // Alternates between cyan-400 and blue-400
        circleColor: colors[index % 2],  // Alternates between cyan-400 and blue-400
    }));

    return (
        <div className='min-h-screen w-screen flex flex-col items-center justify-center bg-gray-950 px-4'>
            <div className="flex flex-col items-center justify-center w-full py-12 mt-24" id='education'>
                <h2 className="text-2xl font-bold mb-8 text-white">Educational Timeline</h2>
                <div className="relative w-full max-w-4xl" >
                    <div className="border-r-2 border-gray-300 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
                    {timelineData.map((item, index) => (
                        <div key={index} className={`mb-8 w-full flex ${index % 2 === 0 ? 'flex-col md:flex-row md:items-start' : 'flex-col md:flex-row-reverse md:items-start'} items-center`}>
                            <div className={`w-full md:w-5/12 p-4 rounded-lg shadow-lg relative flex flex-col mb-6 md:mb-0 ${item.color}`} data-aos="zoom-in-down" data-aos-duration="1500">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-white font-bold text-lg mb-2">{item.year}</h3>
                                    <FaGraduationCap className="text-white text-xl" />
                                </div>
                                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                <p className="text-white">{item.Programs}</p>
                                <p className="text-white opacity-80 mt-1">{item.descriptions}</p>
                            </div>
                            <div className="absolute md:left-1/2 transform md:-translate-x-1/2 bg-white border-2 rounded-full w-6 h-6 flex items-center justify-center" >
                                <div className={`rounded-full w-3 h-3 ${item.circleColor}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
