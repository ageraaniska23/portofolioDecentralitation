import React from 'react';
import ThreeScene from '../lanyard/ThreeScene';
import { TextGenerateEffectDemo } from '../ui/text-generate-effect';
import Github from '../GithubCalendar/GithubCalendar';
import { Skill } from '../Skill/Skill';

const LaynardHero = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-950">
            <div className="w-full h-full flex flex-col items-center justify-center lg:flex-row lg:items-start mb-12">

                <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center ml-0 text-justify p-12 mt-10" data-aos="fade-up" data-aos-duration="1000">
                    <div className="text-center text-gray-50 mb-0">
                        <h1 className="text-4xl lg:text-3xl font-bold italic">About Me</h1>
                    </div>
                    <TextGenerateEffectDemo />
                    <div className="flex items-center mt-4 mb-0 ml-0">
                        <Github />
                    </div>
                    <Skill />
                </div>
                <div className="w-full lg:w-1/3 h-full hidden lg:block">
                    <ThreeScene />
                </div>
            </div>
        </div>
    );
}

export default LaynardHero;
