/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import { FaReact, FaHardHat, FaNetworkWired } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";
import { SiSolidity, SiBlockchaindotcom, SiJavascript, SiCisco, SiWeb3Dotjs, SiEthers, SiOpenzeppelin, SiThirdweb, SiIpfs, SiTailwindcss } from "react-icons/si";

export function Skill() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-4 overflow-hidden h-full relative"
        >
            <SkillGrid />
        </motion.div>
    );
}

const SkillGrid = () => {
    const icons = [
        FaReact, TbBrandVite, FaHardHat, SiSolidity, SiBlockchaindotcom,
        SiJavascript, SiCisco, FaNetworkWired, SiWeb3Dotjs, SiEthers,
        SiOpenzeppelin, SiThirdweb, SiIpfs, AiOutlinePython, SiTailwindcss 
    ];

    return (
        <div className="grid grid-cols-5 gap-3 md:grid-cols-8">
            {icons.map((Icon, index) => (
                <SkillIcon key={index} Icon={Icon} index={index} />
            ))}
        </div>
    );
};

const SkillIcon = ({ Icon, index }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Container className={`h-12 w-12 skill-icon-${index + 1}`}>
                <motion.div
                    animate={{
                        y: [0, -4, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.08,
                    }}
                >
                    <Icon className="h-6 w-6 dark:text-[#00eaff] transition-colors duration-300" />
                </motion.div>
            </Container>
        </motion.div>
    );
};

const Container = ({ className, children }) => {
    return (
        <div
            className={cn(
                `rounded-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200
                dark:from-gray-800 dark:to-gray-900 shadow-md hover:shadow-lg transition-all duration-300
                dark:shadow-[0_0_10px_rgba(0,234,255,0.2)]`,
                className
            )}
        >
            {children}
        </div>
    );
};