import React from "react";
import { InfiniteMovingCards } from "../ui/CardAward";
import { useFetchContractData } from "../../../Data/Data";
import { motion } from "framer-motion";

export function InfiniteMovingCardsDemo() {
    const { Certified, isLoading } = useFetchContractData();
    
    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-t-4 border-blue-500 rounded-full"
                />
            </div>
        );
    }

    const testimonials = Certified.map(cert => ({
        title: cert.title,
        description: cert.description,
        name: cert.institute,
        link: cert.urlVerify,
    }));

    return (
        <motion.div 
            className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-gray-950 to-gray-950 py-16 px-4 sm:px-6 lg:px-8" 
            id="certificate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h1 
                className="text-4xl sm:text-5xl font-bold mb-8 text-gray-50  text-center justify-center "
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Award & Certifications
            </motion.h1>
            <motion.div 
                className="w-full max-w-6xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </motion.div>
        </motion.div>
    );
}