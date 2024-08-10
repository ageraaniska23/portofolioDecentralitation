/* eslint-disable react/prop-types */
"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "../ui/CardGradient";
import img1 from "../../../public/1.jpg";
import img2 from "../../../public/2.png";
import SwitchToggle from "../ToogleButton/Button";

const BlockchainData = [
    {
        imgSrc: img1,
        title: "Air Jordan 4 Retro Reimagined",
        description: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
        repository: "https://github.com/user/repository1",
        demo: "https://example.com/demo1"
    },
    {
        imgSrc: img2,
        title: "Air Jordan 4 Retro Reimagined",
        description: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
        repository: "https://github.com/user/repository2",
        demo: "https://example.com/demo2"
    },
    {
        imgSrc: "",
        title: "Air Jordan 4 Retro Reimagined",
        description: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
        repository: "https://github.com/user/repository2",
        demo: "https://example.com/demo2"
    },
];

const NetworkData = [
    {
        imgSrc: img1,
        title: "Air Jordan 4 Retro Reimagined",
        description: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
        repository: "https://github.com/user/repository1",
    },
    {
        imgSrc: "",
        title: "Air Jordan 4 Retro Reimagined",
        description: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
        repository: "https://github.com/user/repository2",
    },
];

const Tooltip = ({ text }) => (
    <div className="absolute bg-white dark:bg-zinc-900 text-black dark:text-neutral-200 p-4 rounded shadow-lg text-sm max-w-xs z-50">
        {text}
    </div>
);

export function CardPortofolio() {
    const [activeTab, setActiveTab] = useState('Blockchain');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const dataToDisplay = activeTab === 'Blockchain' ? BlockchainData : NetworkData;

    return (
        <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-950">
            <h1 className="text-3xl font-bold text-white mb-6 italic">Portofolio</h1>
            <SwitchToggle onTabChange={handleTabChange} />
            <div className="flex flex-wrap justify-center gap-10 p-6 max-w-12xl items-stretch" data-aos="fade-up" data-aos-duration="1500">
                {dataToDisplay.map((card, index) => (
                    <BackgroundGradient key={index} className="relative rounded-[22px] max-w-sm p-4 sm:p-7 bg-white dark:bg-zinc-900 flex flex-col text-justify">
                        <div className="relative w-full h-64 mb-4">
                            <img
                                src={card.imgSrc}
                                alt={card.title}
                                className="object-cover w-full h-full rounded-t-2xl"
                            />
                        </div>
                        <div className="flex flex-col flex-grow">
                            <p className="text-base sm:text-xl text-black mb-2 dark:text-neutral-200">
                                {card.title}
                            </p>
                            <div className="relative">
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 text-justify overflow-hidden h-24 mb-4">
                                    {card.description?.substring(0, 400)}...
                                </p>
                                <div className="absolute inset-0 flex items-center justify-center p-2 opacity-0 hover:opacity-100 hover:duration-1000 transition-opacity mb-2">
                                    <Tooltip text={card.description} />
                                </div>
                            </div>
                            <div className="flex space-x-2 justify-end mt-12">
                                {activeTab === 'Blockchain' && card.demo && (
                                    <a href={card.demo} target="_blank" rel="noopener noreferrer" className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black text-xs hover:text-gray-950 font-bold hover:bg-[#00eaff] dark:bg-zinc-800">
                                        <span>Demo</span>
                                    </a>
                                )}
                                <a href={card.repository} target="_blank" rel="noopener noreferrer" className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold hover:bg-yellow-400 hover:text-gray-950 dark:bg-zinc-800">
                                    <span>Repository</span>
                                </a>
                            </div>
                        </div>
                    </BackgroundGradient>
                ))}
            </div>
        </div>
    );
}

export default CardPortofolio;
