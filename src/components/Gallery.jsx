import React, { useState, useEffect } from 'react';

export default function Services() {
  const images = [
    '/img/home1.jpeg',
    '/img/home2.jpeg',
    '/img/home3.jpeg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image slider */}
      <img
        src={images[currentImage]}
        alt="Vonzet Home"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Text container */}
      <div className="absolute top-10 right-10 text-right bg-white/70 p-6 rounded-md shadow-lg max-w-md z-10">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Welcome to Vonzet Care</h2>
        <p className="text-blue-800 text-lg">
          A home filled with warmth, dignity, and compassion. We offer exceptional care for our elderly residents with love and professionalism.
        </p>
      </div>
    </div>
  );
}
