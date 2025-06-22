import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white px-6 text-center"
      style={{ backgroundImage: "url('/landing.jpg')" }}
      aria-label="Hero section with salon name and call to action"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 drop-shadow-lg">
          Hair and beauty unisex salon
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 drop-shadow-md">
          Elevate your beauty with style and grace.
        </p>
        <Link
          href="/booking"
          className="inline-block bg-pink-600 hover:bg-pink-700 px-10 py-3 rounded-full font-semibold text-lg shadow-lg transition"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
