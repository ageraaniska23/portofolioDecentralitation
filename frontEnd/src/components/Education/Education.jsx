import React from 'react';

const Education = () => {
    return (
        <div className='min-h-screen w-screen flex flex-col items-center justify-center bg-gray-950'>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle text-blue-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">1984</time>
                        <div className="text-lg font-black">First Macintosh computer</div>
                        The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh
                        p
                    </div>
                    <hr className="border border-cyan-400" />
                </li>
                <li>
                    <hr className="border border-cyan-400" />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">1998</time>
                        <div className="text-lg font-black">iMac</div>
                        iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has
                    </div>
                    <hr className="border border-cyan-400" />
                </li>
                
            </ul>
        </div>
    );
}

export default Education;
