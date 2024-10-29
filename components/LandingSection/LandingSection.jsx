"use client";

import React from 'react';
import LandingSectionStyle from "./LandingSection.style";

function LandingSection(props) {
    return (
        <LandingSectionStyle className="relative w-full lg:p-28 p-16 bg-primary-bg flex flex-col lg:flex-row">
            <div className="heading w-full lg:w-2/3 lg:mt-20 mt-8">
                <h1 className="lg:text-7xl text-4xl mb-5 font-medium">
                    Designer <br /> Cakes <br /> for Every Occasion
                </h1>
                <h2 className="lg:text-5xl text-3xl subtitle font-light mb-8">
                    Crafted with Love
                </h2>

                <a
                    href="/menu"
                    className="outline-0 text-white text-2xl font-medium px-10 py-2 bg-pink-400 rounded-xl font-bold"
                >
                    Explore Menu
                </a>
            </div>
            <div className="image w-1/6 hidden lg:block">
                <img className={""} src="/images/cake2.jpg" alt=""/>
            </div>
        </LandingSectionStyle>
    );
}

export default LandingSection;