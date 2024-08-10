/* eslint-disable react/prop-types */
"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "../ui/CardGradient";
import SwitchToggle from "../ToogleButton/Button";
import { useFetchContractData } from "../../../Data/Data";

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

    const { projoect, isLoading } = useFetchContractData();

    if (isLoading) {
        return <div>Loading...</div>; 
    }

    // URL prefix for IPFS
    const IPFS_GATEWAY_URL = "https://gateway.pinata.cloud/ipfs/";

    // Format the contract data
    const formattedData = projoect?.map( project => ({
        imgSrc: project.uri.startsWith("ipfs://") ? `${IPFS_GATEWAY_URL}${project.uri.slice(7)}` : project.uri || "",
        title: project.title,
        description: project.description,
        repository: project.urlRepository,
        demo: project.urlDemo,
        category: project.category
    })) || [];

    // Filter data based on the active tab
    const dataToDisplay = formattedData.filter(item => item.category === activeTab);

    return (
        <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-950" id="portofolio">
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
                                {card.demo && (
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
