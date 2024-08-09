import React from 'react';
import { useMediaQuery } from 'react-responsive';
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <div 
            className="p-4 sm:p-6 md:p-8 lg:p-10 transform scale-75 sm:scale-90 md:scale-100 lg:scale-110"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
        >
            <GitHubCalendar 
                username="ageraaniska23" 
                fontSize={12} 
                showWeekdayLabels={true} 
                blockSize={isMobile ? 2 : 7} 
                blockRadius={4} 
            />
        </div>
    );
};

export default Github;
