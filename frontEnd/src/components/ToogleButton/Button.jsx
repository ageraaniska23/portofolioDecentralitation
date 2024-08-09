import React, { useState } from 'react';

const SwitchToggle = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState('Blockchain');

    const handleClick = (tab) => {
        setActiveTab(tab);
        onTabChange(tab); // Notify parent component of the active tab
    };

    return (
        <div className="flex flex-wrap items-center space-x-1 bg-transparent rounded-xl border-2 border-[#00eaff]">
            <button
                onClick={() => handleClick('Blockchain')}
                className={`px-4 py-2 rounded-lg ${activeTab === 'Blockchain' ? 'bg-[#00eaff] text-gray-50' : 'text-[#00eaff] hover:text-slate-50'}`}
            >
                Blockchain
            </button>
            <button
                onClick={() => handleClick('Network')}
                className={`px-4 py-2 rounded-lg ${activeTab === 'Network' ? 'bg-[#00eaff] text-gray-50' : 'text-[#00eaff] hover:text-slate-50'}`}
            >
                Network
            </button>
        </div>
    );
};

export default SwitchToggle;
