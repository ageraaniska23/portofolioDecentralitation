import React from "react";
import { InfiniteMovingCards } from "../ui/CardAward";
import { useFetchContractData } from "../../../Data/Data";

export function InfiniteMovingCardsDemo() {
    // Fetching the certified data from the contract
    const { Certified, isLoading } = useFetchContractData();
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Mapping the fetched data to the format required by InfiniteMovingCards
    const testimonials = Certified.map(cert => ({
        title: cert.title,
        description: cert.description,
        name: cert.institute,
        link: cert.urlVerify,
    }));

    console.log("Testimonials data:", testimonials);

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-950" id="certificate">
            <h1 
                className="text-3xl font-bold mb-8 italic text-gray-50" 
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
            >
                Award & Certifications
            </h1>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}
