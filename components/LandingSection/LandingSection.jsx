"use client";

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCake } from '@fortawesome/free-solid-svg-icons';
import LandingSectionStyle from "./LandingSection.style";

function LandingSection() {
    return (
        <LandingSectionStyle className="relative w-full lg:pt-2 p-16 bg-primary-bg flex flex-col items-center">
            <div className="heading w-full flex flex-col items-center">
                <div className="mb-2">
                    <Image 
                        src="/images/logo.png"
                        alt="The Sweet Treat Logo"
                        width={500}
                        height={500}
                        className="lg:w-[500px] w-[300px]"
                        priority
                    />
                </div>
                <p className="lg:text-2xl text-xl text-gray-600 mb-3 flex items-center gap-2">
                    The Story in every treat! <FontAwesomeIcon icon={faCake} className="text-pink-400" />
                </p>

                <a
                    href="/menu"
                    className="outline-0 text-white text-2xl font-medium px-10 py-2 bg-pink-400 rounded-xl font-bold"
                >
                    Explore Menu
                </a>
            </div>
        </LandingSectionStyle>
    );
}

export default LandingSection;