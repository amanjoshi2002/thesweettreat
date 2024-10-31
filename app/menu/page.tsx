"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar'; // Adjust the import path as necessary
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Contact from '@/components/Contact';

const products = [
    { id: 1, name: 'Vanilla Cake', price: 900, category: 'Flavours', src: '/images/vanilla-cake.jpg' },
    { id: 2, name: 'Black Forest Cake', price: 1000, category: 'Flavours', src: '/images/black-forest-cake.jpg' },
    { id: 3, name: 'White Forest Cake', price: 1000, category: 'Flavours', src: '/images/white-forest-cake.jpg' },
    { id: 4, name: 'Mango Cake', price: 1000, category: 'Flavours', src: '/images/mango-cake.jpg' },
    { id: 5, name: 'Pineapple Cake', price: 1000, category: 'Flavours', src: '/images/pineapple-cake.jpg' },
    { id: 6, name: 'Strawberry Cake', price: 1000, category: 'Flavours', src: '/images/strawberry-cake.jpg' },
    { id: 7, name: 'Carrot Cake', price: 1000, category: 'Flavours', src: '/images/carrot-cake.jpg' },
    { id: 8, name: 'Butterscotch Cake', price: 1000, category: 'Flavours', src: '/images/butterscotch-cake.jpg' },
    { id: 9, name: 'Oreo Cream Cake', price: 1100, category: 'Flavours', src: '/images/oreo-cream-cake.jpg' },
    { id: 10, name: 'Chocolate Cake', price: 1200, category: 'Flavours', src: '/images/chocolate-cake.jpg' },
    { id: 11, name: 'Fruit Cake', price: 1100, category: 'Premium Flavours', src: '/images/fruit-cake.jpg' },
    { id: 12, name: 'Choco Vanilla Cake', price: 1100, category: 'Premium Flavours', src: '/images/choco-vanilla-cake.jpg' },
    { id: 13, name: 'Chocolate Fudge Cake', price: 1200, category: 'Premium Flavours', src: '/images/chocolate-fudge-cake.jpg' },
    { id: 14, name: 'Truffle Cake', price: 1200, category: 'Premium Flavours', src: '/images/truffle-cake.jpg' },
    { id: 15, name: 'Gulab Jamun Cake', price: 1200, category: 'Premium Flavours', src: '/images/gulab-jamun-cake.jpg' },
    { id: 16, name: 'Moti Choor Cake', price: 1200, category: 'Premium Flavours', src: '/images/moti-choor-cake.jpg' },
    { id: 17, name: 'Red Velvet Cake', price: 1300, category: 'Premium Flavours', src: '/images/red-velvet-cake.jpg' },
    { id: 18, name: 'Rasmalai Cake', price: 1300, category: 'Premium Flavours', src: '/images/rasmalai-cake.jpg' },
    { id: 19, name: 'Kaju Katli Cake', price: 1300, category: 'Premium Flavours', src: '/images/kaju-katli-cake.jpg' },
    { id: 20, name: 'Lotus Biscoff Cake', price: 1400, category: 'Premium Flavours', src: '/images/lotus-biscoff-cake.jpg' },
    { id: 21, name: 'Ferroro Rocher Cake', price: 1500, category: 'Premium Flavours', src: '/images/ferroro-rocher-cake.jpg' },
    { id: 22, name: 'Vanilla Cake', price: 260, category: 'Bento Cakes', src: '/images/vanilla-cake.jpg' },
    { id: 23, name: 'Black Forest Cake', price: 280, category: 'Bento Cakes', src: '/images/black-forest-cake.jpg' },
    { id: 24, name: 'White Forest Cake', price: 280, category: 'Bento Cakes', src: '/images/white-forest-cake.jpg' },
    { id: 25, name: 'Mango Cake', price: 280, category: 'Bento Cakes', src: '/images/mango-cake.jpg' },
    { id: 26, name: 'Pineapple Cake', price: 280, category: 'Bento Cakes', src: '/images/pineapple-cake.jpg' },
    { id: 27, name: 'Strawberry Cake', price: 280, category: 'Bento Cakes', src: '/images/strawberry-cake.jpg' },
    { id: 28, name: 'Oreo Cream Cake', price: 280, category: 'Bento Cakes', src: '/images/oreo-cream-cake.jpg' },
    { id: 29, name: 'Butterscotch Cake', price: 280, category: 'Bento Cakes', src: '/images/butterscotch-cake.jpg' },
    { id: 30, name: 'Carrot Cake', price: 300, category: 'Bento Cakes', src: '/images/carrot-cake.jpg' },
    { id: 31, name: 'Gulab Jamun Cake', price: 320, category: 'Bento Cakes', src: '/images/gulab-jamun-cake.jpg' },
    { id: 32, name: 'Moti Choor Cake', price: 360, category: 'Bento Cakes', src: '/images/moti-choor-cake.jpg' },
    { id: 33, name: 'Red Velvet Cake', price: 360, category: 'Bento Cakes', src: '/images/red-velvet-cake.jpg' },
    { id: 34, name: 'Rasmalai Cake', price: 360, category: 'Bento Cakes', src: '/images/rasmalai-cake.jpg' },
    { id: 35, name: 'Kaju Katli Cake', price: 360, category: 'Bento Cakes', src: '/images/kaju-katli-cake.jpg' },
    { id: 36, name: 'Lotus Biscoff Cake', price: 380, category: 'Bento Cakes', src: '/images/lotus-biscoff-cake.jpg' },
    { id: 37, name: 'Truffle Cake', price: 380, category: 'Bento Cakes', src: '/images/truffle-cake.jpg' },
    { id: 38, name: 'Ferroro Rocher Cake', price: 380, category: 'Bento Cakes', src: '/images/ferroro-rocher-cake.jpg' },
    { id: 39, name: 'Chocolate Brownies', price: 350, category: 'Brownies', src: '/images/chocolate-brownies.jpg' },
    { id: 40, name: 'Walnut Brownies', price: 500, category: 'Brownies', src: '/images/walnut-brownies.jpg' },
    { id: 41, name: 'Biscuits/Chocolate/Nutella', price: 400, category: 'Brownies', src: '/images/biscuits-chocolate-nutella.jpg' },
    { id: 42, name: 'Dry Fruits Brownies', price: 450, category: 'Brownies', src: '/images/dry-fruits-brownies.jpg' },
    { id: 43, name: 'Assorted Brownie Box', price: 600, category: 'Brownies', src: '/images/assorted-brownie-box.jpg' },
    { id: 44, name: 'Copycat Cosmic Brownies', price: 420, category: 'Brownies', src: '/images/copycat-cosmic-brownies.jpg' },
    { id: 45, name: 'Brownies Cake', price: 300, category: 'Brownies', src: '/images/brownies-cake.jpg' },
    { id: 46, name: 'Brownies Bar', price: 250, category: 'Brownies', src: '/images/brownies-bar.jpg' },
    { id: 47, name: 'Sandwich', price: 190, category: 'Brownies', src: '/images/sandwich.jpg' },
    { id: 48, name: 'Messed Brownie Bites', price: 150, category: 'Brownies', src: '/images/messed-brownie-bites.jpg' },
    { id: 49, name: 'Brownie Jar', price: 200, category: 'Brownies', src: '/images/brownie-jar.jpg' },
    { id: 50, name: 'Brownies Tower', price: 850, category: 'Brownies', src: '/images/brownies-tower.jpg' },
    { id: 51, name: 'Vanilla Cupcake', price: 40, category: 'Cupcakes', src: '/images/vanilla-cupcake.jpg' },
    { id: 52, name: 'Mango Cupcake', price: 40, category: 'Cupcakes', src: '/images/mango-cupcake.jpg' },
    { id: 53, name: 'Pineapple Cupcake', price: 40, category: 'Cupcakes', src: '/images/pineapple-cupcake.jpg' },
    { id: 54, name: 'Strawberry Cupcake', price: 40, category: 'Cupcakes', src: '/images/strawberry-cupcake.jpg' },
    { id: 55, name: 'Butterscotch Cupcake', price: 40, category: 'Cupcakes', src: '/images/butterscotch-cupcake.jpg' },
    { id: 56, name: 'Carrot Cupcake', price: 40, category: 'Cupcakes', src: '/images/carrot-cupcake.jpg' },
    { id: 57, name: 'Black Forest Cupcake', price: 45, category: 'Cupcakes', src: '/images/black-forest-cupcake.jpg' },
    { id: 58, name: 'White Forest Cupcake', price: 45, category: 'Cupcakes', src: '/images/white-forest-cupcake.jpg' },
    { id: 59, name: 'Oreo Cream Cupcake', price: 45, category: 'Cupcakes', src: '/images/oreo-cream-cupcake.jpg' },
    { id: 60, name: 'Truffle Cupcake', price: 50, category: 'Cupcakes', src: '/images/truffle-cupcake.jpg' },
    { id: 61, name: 'Red Velvet Cupcake', price: 65, category: 'Cupcakes', src: '/images/red-velvet-cupcake.jpg' },
    { id: 62, name: 'Center Filled Cupcake', price: 90, category: 'Cupcakes', src: '/images/center-filled-cupcake.jpg' },
    { id: 63, name: 'Ferroro Rocher Cupcake', price: 90, category: 'Cupcakes', src: '/images/ferroro-rocher-cupcake.jpg' },
    { id: 64, name: 'Fresh Berries & Cream Cupcake', price: 90, category: 'Cupcakes', src: '/images/fresh-berries-cream-cupcake.jpg' },
    { id: 65, name: 'Biscoff Cupcake', price: 90, category: 'Cupcakes', src: '/images/biscoff-cupcake.jpg' },
    { id: 66, name: 'Caramel Fudge Cupcake', price: 90, category: 'Cupcakes', src: '/images/caramel-fudge-cupcake.jpg' },
    { id: 67, name: 'Nutella Fudge Cupcake', price: 90, category: 'Cupcakes', src: '/images/nutella-fudge-cupcake.jpg' },
];

const categories = ['all', 'Flavours', 'Premium Flavours', 'Bento Cakes', 'Brownies', 'Cupcakes'];

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="bg-pink-50 min-h-screen">
            <Navbar />
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <button
                        className="sm:hidden px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        Categories
                    </button>
                    <a
                        href="/catalog.pdf" // Path to your PDF
                        download
                        className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition"
                    >
                        Download Catalog
                    </a>
                </div>
                <div className={`flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4 ${isMobileMenuOpen ? 'block' : 'hidden'} sm:block`}>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-lg shadow-md transition ${selectedCategory === category ? 'bg-pink-500 text-white' : 'bg-white text-black hover:bg-pink-100'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
                            <Image src={product.src} alt={product.name} width={500} height={300} className="w-full h-64 object-cover rounded-lg" />
                            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                            <p className="mt-2 text-gray-500">₹ {product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Contact />
            <a
                href="https://wa.me/918767986326"
                className="fixed bottom-4 right-4 bg-green-500 text-white p-5 rounded-full shadow-lg flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '60px', height: '60px' }}
            >
                <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '24px' }} />
            </a>
        </div>
    );
};

export default Menu;