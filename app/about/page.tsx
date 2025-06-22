import React from 'react';
import Gallarey from '@/components/gallarey';
const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white px-6 md:px-20 py-20">
      {/* About Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif font-semibold mb-6 text-gray-900">
          Hair & Beauty unisex Salon
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At Hair & Beauty unisex Salon, we combine expert techniques with premium products to give you an unforgettable beauty experience. Our team is dedicated to making you look and feel your absolute best in a relaxing, luxurious environment.
        </p>
      </section>

      {/* Gallery Section */}
      <Gallarey />
    </main>
  );
};

export default AboutPage;
