// components/ImageSlider.js
'use client'
import { useState, useEffect } from 'react';

const ImageSlider = () => {
    const [images] = useState([
        {
            src: '/all.jpg',
            alt: 'Image 1',
            description: 'Winners of Devignite 2024',
        },
        {
            src: '/first.jpg',
            alt: 'Image 2',
            description: '1st place team GFC',
        },
        {
            src: '/2nd.jpg',
            alt: 'Image 2',
            description: '2nd place team #Builder',
        },
        {
            src: '/3rd.jpg',
            alt: 'Image 2',
            description: '3rd place The Heisen Bugs',
        },
        {
            src: '/judge-view.jpg',
            alt: 'Image 2',
            description: 'Devignite 2024',
        },
        {
            src: '/group.jpg',
            alt: 'Image 2',
            description: 'Makers of DevIgnite 2024',
        },
     
        // Add more images as needed
    ]);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-56 md:min-h-screen overflow-hidden box-border">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 text-white w-full pt-5 md:pt-20 pb-5 md:pb-12 text-center text-sm md:text-2xl bg-gradient-to-t from-black to-transparent">{image.description}</div>
                </div>
            ))}
        </div>
    );
};

export default ImageSlider;
