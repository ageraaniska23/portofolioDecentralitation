/* eslint-disable react/prop-types */
"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../../lib/utils";
import { useFetchContractData } from "../../../Data/Data";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration ? duration : 1,
                delay: stagger(0.1),
            }
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => (
                    <motion.span
                        key={word + idx}
                        className="dark:text-white text-black opacity-0"
                        style={{
                            filter: filter ? "blur(10px)" : "none",
                        }}
                    >
                        {word}{" "}
                    </motion.span>
                ))}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className="dark:text-white text-black text-base md:text-lg lg:text-xl leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};

// const words = `
// I am an undergraduate with a Bachelor's degree in Computer Systems from Sriwijaya University. I have a passion for embracing new challenges and am always eager to learn new things. Currently, I am honing my skills in the blockchain field, particularly as a Solidity Developer and Web3 Developer. I participated in a bootcamp program focused on Solidity Blockchain Development, where I dedicated approximately six months to training. During this program, I served as the team lead for a Web3 project and successfully completed it. Additionally, I have participated in the Fresh Graduate Academy training provided by Kominfo, which focused on Cisco CCNA. I believe my ability to learn quickly and adaptively is a valuable asset in the ever-evolving technology industry.
// `;


export function TextGenerateEffectDemo() {

    const { aboutMe, isLoading } = useFetchContractData();

    if (isLoading) {
        return <div>Loading...</div>; 
    }
    return <TextGenerateEffect words={aboutMe} />;
}
