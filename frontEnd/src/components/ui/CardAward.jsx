/* eslint-disable react/prop-types */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../../lib/utils";
import { FaAward } from "react-icons/fa";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}) => {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards");
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse");
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "15s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            }
        }
    };

    const handleClick = (link) => {
        window.open(link, '_blank'); // Opens link in a new tab
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item) => (
                    <li
                        className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] cursor-pointer"
                        style={{
                            background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
                        }}
                        key={item.title}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <div className="relative z-20 mb-4">
                                <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                                    {item.title}
                                </span>
                            </div>
                            <div className="relative z-20">
                                <span className="text-sm leading-[1.6] text-gray-100 font-normal">
                                    {item.quote}
                                </span>
                            </div>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                                        {item.name}
                                    </span>
                                </span>
                            </div>
                            <button
                                onClick={() => handleClick(item.link)}
                                className="absolute bottom-4 right-4 bg-transparent text-[#00eaff] px-4 py-2 rounded-md "
                            >
                                Visit Link
                            </button>
                            <FaAward className="absolute top-4 right-4 text-yellow-500 text-3xl z-30" />
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
