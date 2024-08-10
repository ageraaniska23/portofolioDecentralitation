/* eslint-disable react/prop-types */
import React from "react";
import { FaAward } from "react-icons/fa";

export const InfiniteMovingCards = ({ items }) => {
    const handleClick = (url, title) => {
        console.log(`Clicked on item: ${title}, URL: ${url}`);
        if (url) {
            window.open(url, '_blank');
        } else {
            console.log("No URL provided for this item");
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 justify-center" data-aos="fade-up" data-aos-duration="1500">
                {items.map((item, index) => (
                    <li
                        key={`${item.title}-${index}`}
                        className="relative rounded-2xl border border-gray-800 shadow-2xl px-4 py-4 h-full"
                        style={{
                            background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
                            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.8), 0 6px 12px rgba(0, 0, 0, 0.5)",
                            transition: "transform 0.3s, box-shadow 0.3s",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-5px)";
                            e.currentTarget.style.boxShadow =
                                "0 15px 25px rgba(0, 0, 0, 1), 0 10px 20px rgba(0, 0, 0, 0.7)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                                "0 10px 20px rgba(0, 0, 0, 0.8), 0 6px 12px rgba(0, 0, 0, 0.5)";
                        }}
                    >
                        <div className="mb-2">
                            <span className="text-sm text-gray-400 font-semibold">{item.title}</span>
                        </div>
                        <div className="mt-auto">
                            <span className="text-sm text-gray-400">{item.name}</span>
                        </div>
                        <button
                            onClick={() => handleClick(item.link, item.title)}
                            className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 text-sm rounded-full hover:bg-blue-600 transition-colors"
                        >
                            <FaAward className="text-yellow-400 text-lg" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
