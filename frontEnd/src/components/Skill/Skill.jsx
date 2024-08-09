/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
"use client";
import { animate } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "../../../lib/utils";
import { FaReact, FaHardHat, FaNetworkWired } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";
import { SiSolidity, SiBlockchaindotcom, SiJavascript, SiCisco, SiWeb3Dotjs, SiEthers, SiOpenzeppelin, SiThirdweb, SiIpfs, SiTailwindcss } from "react-icons/si";

export function Skill() {
    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000">
            <Skeleton />
        </div>
    );
}

const Skeleton = () => {
    const scale = [0.7, 1.1, 0.7];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
    const duration = 0.8;

    useEffect(() => {
        const sequence = Array.from({ length: 15 }, (_, index) => [
            `.circle-${index + 1}`,
            { scale, transform },
            { duration },
        ]);

        animate(sequence, {
            repeat: Infinity,
            repeatDelay: 1,
        });
    }, []);

    const icons = [
        FaReact, TbBrandVite, FaHardHat, SiSolidity, SiBlockchaindotcom,
        SiJavascript, SiCisco, FaNetworkWired, SiWeb3Dotjs, SiEthers,
        SiOpenzeppelin, SiThirdweb, SiIpfs, AiOutlinePython, SiTailwindcss 
    ];

    return (
        <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
            <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
                {icons.map((Icon, index) => (
                    <Container key={index} className={`h-16 w-16 circle-${index + 1}`}>
                        <Icon className="h-8 w-8 dark:text-[#00eaff]" />
                    </Container>
                ))}
            </div>
        </div>
    );
};

const Container = ({ className, children, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
                className
            )}
        >
            {children}
        </a>
    );
};
