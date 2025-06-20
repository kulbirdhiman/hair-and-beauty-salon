"use client";
import React, { useState } from "react";

// BOYS SERVICES
const boysServices = [
  {
    title: "Hair Colouring",
    description: "Professional hair dyeing with vibrant, lasting colors.",
    icon: "🎨",
  },
  {
    title: "Beard Conditioning",
    description:
      "Deep conditioning treatments to soften and nourish your beard.",
    icon: "🧴",
  },
  {
    title: "Beard Dyeing",
    description: "Custom beard coloring for a bold or natural look.",
    icon: "🧔‍♂️",
  },
  {
    title: "Beard Maintenance",
    description: "Ongoing care and grooming to keep your beard flawless.",
    icon: "🪒",
  },
  {
    title: "Beard Trim",
    description:
      "Precise trims for all beard styles, from stubble to full beards.",
    icon: "✂️",
  },
  {
    title: "Buzz Cut",
    description: "Clean, no-fuss buzz cuts for a sharp and neat appearance.",
    icon: "🌀",
  },
  {
    title: "Capillary Hair Treatment",
    description: "Therapeutic treatments to strengthen and rejuvenate hair.",
    icon: "💆‍♂️",
  },
  {
    title: "Children’s Haircuts",
    description: "Fun and friendly haircut experiences for kids.",
    icon: "👶",
  },
  {
    title: "Curly Hair Styling",
    description: "Specialized cuts and care for curly and textured hair.",
    icon: "➰",
  },
  {
    title: "Custom Cut",
    description: "Tailored haircuts designed to suit your individual style.",
    icon: "✂️",
  },
  {
    title: "Eyebrow Tinting",
    description: "Subtle or bold tints to enhance your natural brows.",
    icon: "🌈",
  },
  {
    title: "Eyebrow Trimming",
    description: "Precision trimming to define and shape your eyebrows.",
    icon: "🧵",
  },
  {
    title: "Fade Cut",
    description: "Modern fade styles from low to high, clean and fresh.",
    icon: "🎯",
  },
  {
    title: "Groom Packages",
    description: "All-in-one grooming experiences for any occasion.",
    icon: "🎁",
  },
  {
    title: "Haircut",
    description: "Classic or modern cuts for every hair type.",
    icon: "💇‍♂️",
  },
  {
    title: "Hair Extensions",
    description: "Add volume and length with premium extensions.",
    icon: "🧬",
  },
  {
    title: "Hair Shape-Up",
    description: "Clean lines and edge-ups to keep your look sharp.",
    icon: "🪞",
  },
  {
    title: "Hair Straightening",
    description: "Sleek, straight styles with long-lasting results.",
    icon: "📏",
  },
  {
    title: "Hair Treatments",
    description: "Deep nourishment and repair for damaged hair.",
    icon: "🧖‍♂️",
  },
  {
    title: "Head Shave",
    description: "Smooth, clean head shaves for a polished appearance.",
    icon: "🪒",
  },
  {
    title: "Long Haircut",
    description: "Expert styling and cutting for longer hair.",
    icon: "💇",
  },
  {
    title: "Military Haircut",
    description: "Sharp, disciplined cuts with military precision.",
    icon: "🪖",
  },
  {
    title: "Online Barber Booking",
    description: "Book your appointments quickly and easily online.",
    icon: "📅",
  },
  {
    title: "Scissor Cut",
    description: "Traditional scissor cuts for personalized styling.",
    icon: "✂️",
  },
  {
    title: "Shave",
    description: "Classic wet shave with precision and care.",
    icon: "🧼",
  },
];

// GIRLS SERVICES
const girlsServices = [
  {
    title: "Haircut & Styling",
    description: "Trendy cuts and professional styling for any occasion.",
    icon: "💇‍♀️",
  },
  {
    title: "Hair Colouring",
    description:
      "Balayage, highlights, and root touch-ups with vibrant colors.",
    icon: "🎨",
  },
  {
    title: "Hair Straightening",
    description: "Get sleek, smooth hair with advanced straightening.",
    icon: "📏",
  },
  {
    title: "Hair Spa",
    description: "Relaxing hair spa treatments for deep nourishment.",
    icon: "🧖‍♀️",
  },
  {
    title: "Keratin Treatment",
    description: "Smooth and restore hair health with keratin care.",
    icon: "🧬",
  },
  {
    title: "Facials",
    description:
      "Brightening, anti-aging, and deep-cleaning facial treatments.",
    icon: "✨",
  },
  {
    title: "Manicure",
    description: "Classic and gel manicures with elegant polish.",
    icon: "💅",
  },
  {
    title: "Pedicure",
    description: "Relaxing foot care with exfoliation and polish.",
    icon: "🦶",
  },
  {
    title: "Makeup",
    description: "Party, bridal, or airbrush makeup for any event.",
    icon: "💄",
  },
  {
    title: "Eyebrow Threading",
    description: "Perfectly shaped brows with gentle threading.",
    icon: "🧵",
  },
  {
    title: "Waxing",
    description: "Full body, facial, or bikini waxing with premium wax.",
    icon: "🕯️",
  },
  {
    title: "Nail Extensions",
    description: "Acrylic or gel extensions with trendy nail art.",
    icon: "🧲",
  },
  {
    title: "Body Polishing",
    description: "Exfoliating treatments for glowing skin.",
    icon: "🧼",
  },
  {
    title: "Eyelash Extensions",
    description: "Natural or dramatic lash looks for your eyes.",
    icon: "👁️",
  },
  {
    title: "Bridal Packages",
    description: "Complete bridal beauty care from head to toe.",
    icon: "👰",
  },
];

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("boys");

  const servicesToDisplay = activeTab === "boys" ? boysServices : girlsServices;

  return (
    <main className="min-h-screen bg-white px-6 md:px-20 py-20">
      <section className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-serif font-extrabold mb-6 text-gray-900">
          Our Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Explore personalized grooming and beauty services for both men and
          women.
        </p>
      </section>

      {/* TABS */}
      <div className="flex justify-center space-x-4 mb-10">
        <button
          onClick={() => setActiveTab("boys")}
          className={`px-6 py-2 rounded-full font-semibold ${
            activeTab === "boys"
              ? "bg-pink-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Boys
        </button>
        <button
          onClick={() => setActiveTab("girls")}
          className={`px-6 py-2 rounded-full font-semibold ${
            activeTab === "girls"
              ? "bg-pink-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Girls
        </button>
      </div>

      {/* SERVICES GRID */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesToDisplay.map(({ title, description, icon }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gradient-to-tr from-pink-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-5xl mb-4 text-pink-600">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {title}
            </h3>
            <p className="text-gray-600 text-center">{description}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ServicesPage;
