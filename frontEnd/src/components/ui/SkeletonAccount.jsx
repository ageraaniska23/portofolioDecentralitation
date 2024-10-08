/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
"use client";
import { animate } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "../../../lib/utils";
import { FaLinkedin, FaInstagram, FaGithubAlt, FaDiscord  } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useFetchContractData } from "../../../Data/Data";

export function SkeletonAccount() {
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
    const sequence = [
        [
            ".circle-1",
            { scale, transform },
            { duration: 0.8 },
        ],
        [
            ".circle-2",
            { scale, transform },
            { duration: 0.8 },
        ],
        [
            ".circle-3",
            { scale, transform },
            { duration: 0.8 },
        ],
        [
            ".circle-4",
            { scale, transform },
            { duration: 0.8 },
        ],
        [
            ".circle-5",
            { scale, transform },
            { duration: 0.8 },
        ],
    ];

    useEffect(() => {
        animate(sequence, {
            repeat: Infinity,
            repeatDelay: 1,
        });
    });

    const { Linkedin, discord, Instagram, Github, email, isLoading } = useFetchContractData();

    if (isLoading) {
        return <div>Loading...</div>; 
    }

    const linkedinUrl = Linkedin.startsWith('http') ? Linkedin : `https://${Linkedin}`;
    const discordUrl = discord.startsWith('http') ? discord : `https://${discord}`;
    const InstagramUrl = Instagram.startsWith('http') ? Instagram : `https://${Instagram}`;
    const GithubUrl = Github.startsWith('http') ? Github : `https://${Github}`;
    const emailUrl = email.startsWith('http') ? email : {email};

    
    return (
        <div className="p-2 md:p-8 overflow-hidden h-full relative flex items-center justify-center mt-2 md:mt-1">
            <div className="flex flex-wrap justify-center items-center gap-4">
                <Container className="h-12 w-12 md:h-16 md:w-16 circle-1 hover:animate-pulse" href={InstagramUrl}>
                    <FaInstagram className="h-6 w-6 md:h-8 md:w-8 dark:text-[#00eaff]" />
                </Container>
                <Container className="h-16 w-16 md:h-24 md:w-24 circle-2 hover:animate-pulse" href={GithubUrl}>
                    <FaGithubAlt className="h-8 w-8 md:h-12 md:w-12 dark:text-[#00eaff]" />
                </Container>
                <Container className="h-20 w-20 md:h-32 md:w-32 circle-3 hover:animate-pulse" href={linkedinUrl}>
                    <FaLinkedin className="h-10 w-10 md:h-16 md:w-16 dark:text-[#00eaff]" />
                </Container>
                <Container className="h-16 w-16 md:h-24 md:w-24 circle-4 hover:animate-pulse" href={discordUrl}>
                    <FaDiscord  className="h-8 w-8 md:h-12 md:w-12 dark:text-[#00eaff]" />
                </Container>
                <Container className="h-12 w-12 md:h-16 md:w-16 circle-5 hover:animate-pulse" href={`mailto:${emailUrl}`}>
                    <BiLogoGmail className="h-6 w-6 md:h-8 md:w-8 dark:text-[#00eaff]" />
                </Container>
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
                `rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
                shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
                className
            )}
        >
            {children}
        </a>
    );
};
