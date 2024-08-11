import React from 'react';
import './Hero.css';
import { SkeletonAccount } from '../ui/SkeletonAccount';
import { useFetchContractData } from '../../../Data/Data';

const Hero = () => {
    // Generate random stars
    const stars = Array.from({ length: 200 }, (_, i) => ({
        id: i,
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        duration: Math.random() * 5 + 5 + 's', // Random duration between 5 and 10 seconds
        delay: Math.random() * 5 + 's', // Random delay up to 5 seconds
        randomX: Math.random() * 100 - 50, // Random movement in the X direction
        randomY: Math.random() * 100 - 50  // Random movement in the Y direction
    }));

    // Generate falling stars
    const fallingStars = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100 + '%',
        top: Math.random() * -100 + '%', // Start above the viewport
        fallDuration: Math.random() * 5 + 5 + 's', // Random fall duration between 5 and 10 seconds
        delay: Math.random() * 5 + 's' // Random delay up to 5 seconds
    }));

    // Correctly call the hook and destructure the returned values
    const { name, Cv, Jobdesk, isLoading } = useFetchContractData();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="h-screen w-screen overflow-hidden flex flex-col items-center justify-center bg-gray-950 relative" id='home'>
            {stars.map(star => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        left: star.left,
                        top: star.top,
                        '--duration': star.duration,
                        '--delay': star.delay,
                        '--random-x': `${star.randomX}px`,
                        '--random-y': `${star.randomY}px`
                    }}
                ></div>
            ))}
            {fallingStars.map(fallingStar => (
                <div
                    key={fallingStar.id}
                    className="falling-star"
                    style={{
                        left: fallingStar.left,
                        top: fallingStar.top,
                        '--fall-duration': fallingStar.fallDuration,
                        '--delay': fallingStar.delay
                    }}
                ></div>
            ))}
            <div>
                <h1
                    className="mt-8 text-4xl md:text-5xl text-gray-50 text-center justify-center font-bold"
                    style={{ textShadow: '1px 1px 1px #00eaff' }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000">
                    I&apos;m {name}

                </h1>
                <h2
                    className="mt-4 text-3xl md:text-5xl text-gray-200 text-center justify-center font-medium"
                    style={{ textShadow: '1px 1px 1px #00eaff' }}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1200">
                    {Jobdesk}
                </h2>
                <SkeletonAccount />
                <div className="flex justify-center my-4 mt-3 ml-auto transition duration-700 ease-in-out transform hover:-translate-y-1 animate-bounce" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000">
                    <a
                        className="relative inline-flex mt-4 md:mt-1 items-center px-10 py-4 overflow-hidden text-lg font-bold text-gray-50 border-2 border-[#00eaff] rounded-full hover:text-slate-100 group hover:bg-[#00eaff]"
                        download="Agera Aniska"
                        target="_blank"
                        rel="noreferrer"
                        href={Cv} 
                    >
                        <span className="absolute left-0 block w-full h-0 transition-all bg-gray-900 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <svg className="w-5 h-5 fill-current text-gray-900 group-hover:text-[#00eaff] ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        </span>
                        <span className="relative text-[#00eaff]">Download CV</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
