import React from "react";
import { InfiniteMovingCards } from "../../../components/ui/CardAward";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-950" >
            <h1 className="text-3xl font-bold mb-8 italic text-gray-50" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000">
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

const testimonials = [
    {
        title: "Certified Blcokchain Practitioner (CBP)",
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "The S cOps Group",
        link: "https://flowbite.com/icons/",
    },
    {
        title: "Certified Blcokchain Practitioner (CBP)",
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "The SecOps Group",
        link: "https://flowbite.com/icons/",
    },
];