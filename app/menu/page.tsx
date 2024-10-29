"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar'; // Adjust the import path as necessary
import Image from 'next/image';

interface Photo {
    id: number;
    src: string;
    alt: string;
    description: string;
    category: string;
}

const photos: Photo[] = [
    { id: 1, src: '/images/cake.jpg', alt: 'Photo 1', description: 'Description for Photo 1', category: 'cakes' },
    { id: 2, src: '/images/cake2.png', alt: 'Photo 2', description: 'Description for Photo 2', category: 'cakes' },
    { id: 3, src: '/images/cake3.png', alt: 'Photo 3', description: 'Description for Photo 3', category: 'pastries' },
    // Add more photos as needed
];

const categories = ['all', 'cakes', 'pastries'];

const Menu: React.FC = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const openModal = (photo: Photo) => {
        setSelectedPhoto(photo);
    };

    const closeModal = () => {
        setSelectedPhoto(null);
    };

    const filteredPhotos = selectedCategory === 'all'
        ? photos
        : photos.filter(photo => photo.category === selectedCategory);

    return (
        <div className="bg-pink-50 min-h-screen">
            <Navbar />
            <div className="p-4">
                <div className="flex space-x-4 mb-4">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-pink-400 text-white' : 'bg-white text-black'}`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredPhotos.map(photo => (
                        <div key={photo.id} onClick={() => openModal(photo)} className="cursor-pointer">
                            <Image src={photo.src} alt={photo.alt} width={500} height={300} className="w-full h-64 object-cover rounded-lg" />
                        </div>
                    ))}
                </div>

                {selectedPhoto && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-4 rounded-lg max-w-lg w-full">
                            <button onClick={closeModal} className="float-right text-xl font-bold">&times;</button>
                            <Image src={selectedPhoto.src} alt={selectedPhoto.alt} width={500} height={300} className="w-full h-auto" />
                            <p className="mt-4">{selectedPhoto.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;