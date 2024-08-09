import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const timelineData = [
    { year: '2024', title: 'Universitas Sriwijaya', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugit est numquam harum, accusamus suscipit consequatur laboriosam!', color: 'bg-yellow-500', circleColor: 'bg-yellow-500' },
    { year: '2020', title: 'SMA N 1 Pendopo Barat', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.', color: 'bg-blue-700', circleColor: 'bg-blue-700' },
];

const Timeline = () => {
    return (
        <div className='min-h-screen w-screen flex flex-col items-center justify-center bg-gray-950'>
            <div className="flex flex-col items-center justify-center w-full py-12 mt-24">
                <h2 className="text-2xl font-bold mb-8 text-white">Educational Timeline</h2>
                <div className="relative w-full max-w-4xl">
                    <div className="border-r-2 border-gray-300 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
                    {timelineData.map((item, index) => (
                        <div key={index} className={`mb-8 flex justify-${index % 2 === 0 ? 'start' : 'end'} items-center w-full ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'} ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} md:flex-row flex-col items-center md:items-start`}>
                            <div className={`w-full md:w-5/12 p-4 ${item.color} rounded-lg shadow-lg relative flex flex-col mb-6 md:mb-0`}>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-white font-bold text-lg mb-2">{item.year}</h3>
                                    <FaGraduationCap className="text-white text-xl" />
                                </div>
                                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                <p className="text-white">{item.description}</p>
                            </div>
                            <div className="absolute md:left-1/2 transform md:-translate-x-1/2 bg-white border-2 rounded-full w-6 h-6 flex items-center justify-center">
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
