"use client";

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCake } from '@fortawesome/free-solid-svg-icons';
import LandingSectionStyle from "./LandingSection.style";

function LandingSection() {
    return (
        <LandingSectionStyle className="relative w-full lg:p-28 p-16 bg-primary-bg flex flex-col lg:flex-row">
            <div className="heading w-full lg:w-2/3 lg:mt-20 mt-8">
                <h1 className="lg:text-7xl text-4xl mb-5 font-medium">
                    Designer <br /> Cakes <br /> for Every Occasion
                </h1>
                <h2 className="lg:text-5xl text-3xl subtitle font-light mb-3">
                    Crafted with Love
                </h2>
                <p className="lg:text-2xl text-xl text-gray-600 mb-8 flex items-center gap-2">
                    The Story in every treat! <FontAwesomeIcon icon={faCake} className="text-pink-400" />
                </p>

                <a
                    href="/menu"
                    className="outline-0 text-white text-2xl font-medium px-10 py-2 bg-pink-400 rounded-xl font-bold"
                >
                    Explore Menu
                </a>
            </div>
            <div className="image w-1/6 hidden lg:block">
                <Image src="/images/cake2.jpg" alt="Cake" width={500} height={500} />
            </div>
        </LandingSectionStyle>
    );
}

export default LandingSection;