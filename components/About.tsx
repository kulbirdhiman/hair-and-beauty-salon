import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-6 md:px-40 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-semibold mb-6 tracking-wide">
          Where Style Meets Serenity
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold text-pink-600">Satanam Hair & Beauty Salon</span>, we believe beauty is an experience. 
          Our expert stylists and beauty therapists provide personalized treatments 
          in an atmosphere of luxury and calm, combining the latest trends with timeless elegance.
        </p>
        <p className="mt-6 text-gray-600 text-md max-w-3xl mx-auto leading-relaxed">
          Using only premium products and techniques, we strive to bring out your natural radiance while ensuring you feel pampered every step of the way.
        </p>
      </div>
    </section>
  );
};

export default About;
