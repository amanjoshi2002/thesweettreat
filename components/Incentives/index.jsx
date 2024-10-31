/* This example requires Tailwind CSS v2.0+ */

"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const bakedGoods = [
    {
        name: 'Cupcakes',
        imageSrc: '/images/cupcake.jpg',
        description: 'Our cupcakes are handcrafted bites of happiness, perfect for any occasion. Choose from a variety of flavors and designs, each one topped with decadent frosting and decorated with care. Whether you need a simple treat or a customized theme, our cupcakes add sweetness to your day.',
    },
    {
        name: 'Bento Cakes',
        imageSrc: '/images/bentocake.jpeg',
        description: 'Bento cakes are perfect for gifting or a little indulgence. These petite cakes are beautifully designed, featuring soft layers, rich flavors, and thoughtful decorations. Each Bento cake brings a personal touch, making small celebrations even more memorable.',
    },
    {
        name: 'Brownies',
        imageSrc: '/images/brownies.jpg',
        description: 'Indulge in the rich, fudgy goodness of our brownies. Made with high-quality chocolate and a touch of love, these treats have the perfect balance of crisp edges and gooey centers. Perfect with coffee or as a treat anytime, our brownies are a must-try for chocolate lovers.',
    },
    {
        name: 'Cookies',
        imageSrc: '/images/cookies.jpg',
        description: 'Our cookies are crafted to perfection—crispy on the outside, soft on the inside, and packed with delicious flavors. Whether classic chocolate chip, buttery shortbread, or an adventurous new flavor, these cookies are baked fresh to satisfy any craving.',
    },
    {
        name: 'Cakes for Special Events',
        imageSrc: '/images/specialcake.jpg',
        description: 'Celebrate life’s big moments with our custom cakes, tailored to make your event unforgettable. From birthdays to weddings and every occasion in between, we create cakes that are as stunning as they are delicious, designed to match your vision and theme perfectly.',
    },
];

export default function Incentives() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bakedGoods.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const visibleItems = window.innerWidth < 640
        ? [bakedGoods[currentIndex]]
        : [
            bakedGoods[currentIndex],
            bakedGoods[(currentIndex + 1) % bakedGoods.length],
            bakedGoods[(currentIndex + 2) % bakedGoods.length],
        ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + bakedGoods.length) % bakedGoods.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bakedGoods.length);
    };

    return (
        <section className="w-full lg:p-16 p-10">
            <h2 className="heading text-center font-medium lg:text-7xl text-3xl mt-24">
                Discover Our Treats
            </h2>
            <p className="subheading text-center font-light lg:text-3xl text-xl mt-2">
                Delight in our delicious offerings
            </p>
            <div className="mt-12 max-w-7xl mx-auto grid gap-5 lg:grid-cols-3">
                {visibleItems.map((item, index) => (
                    <div key={index} className="flex flex-col rounded-3xl shadow-lg overflow-hidden bg-white">
                        <div className="flex-shrink-0">
                            <Image className="h-56 w-full object-cover" src={item.imageSrc} alt={item.name} width={500} height={300} />
                        </div>
                        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <div className="block mt-2">
                                    <p className="text-xl font-semibold text-gray-900">{item.name}</p>
                                    <p className="mt-3 text-base text-gray-500">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-8">
                <button onClick={handlePrev} className="p-2 bg-gray-300 rounded-full">
                    <ChevronLeftIcon className="h-8 w-8 text-gray-700" />
                </button>
                <button onClick={handleNext} className="p-2 bg-gray-300 rounded-full">
                    <ChevronRightIcon className="h-8 w-8 text-gray-700" />
                </button>
            </div>
        </section>
    );
}
