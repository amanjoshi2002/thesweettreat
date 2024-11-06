import React from 'react';
import Image from 'next/image';

const cakes = [
    {
        title: 'Black Forest Cake',
        description: 'A luxurious combination of rich chocolate layers, fresh cherries, and whipped cream. Perfect for birthday celebrations and chocolate enthusiasts.',
        imageUrl: '/images/black-forest-cake.jpg',
    },
    {
        title: 'Fruit Cake',
        description: 'Loaded with premium dried fruits and nuts, soaked in natural fruit juices. An elegant choice for weddings and special gatherings.',
        imageUrl: '/images/fruit-cake.jpg',
    },
    {
        title: 'Vanilla Cake',
        description: 'Light, fluffy, and delicately flavored with pure Madagascar vanilla. Ideal for any occasion with its classic, timeless taste.',
        imageUrl: '/images/vanilla-cake.jpg',
    },
];

function Index() {
    return (
        <section className={"w-full lg:p-16 p-10 "}>
            <h2 className="heading text-center font-medium lg:text-7xl text-3xl mt-24">
                Choose Your Flavour
            </h2>
            <p className="subheading text-center font-light lg:text-3xl text-xl mt-2">
                Try our best custom designed cakes
            </p>
            <div className="products">
                <div className="mt-12 max-w-7xl mx-auto grid gap-5 lg:grid-cols-3">
                    {cakes.map((cake, index) => (
                        <div key={index} className="flex flex-col rounded-3xl shadow-lg overflow-hidden bg-white">
                            <div className="flex-shrink-0">
                                <Image className="h-56 w-full object-cover" src={cake.imageUrl} alt={cake.title} width={500} height={300} />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">{cake.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{cake.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Index;