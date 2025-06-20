import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Service from '@/components/Service';
import Gallarey from '@/components/gallarey';
export default function Home() {
  return (
    <main className="font-light text-gray-900 bg-white">

      {/* HERO */}
      <HeroSection />
      {/* ABOUT */}
     <About />

      {/* SERVICES */}
      <Service />

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 md:px-20 bg-white text-center">
        <h2 className="text-4xl font-serif font-semibold mb-12">Client Love</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Jaspreet K.", quote: "Absolutely divine! The ambiance, the service, the result — all five stars." },
            { name: "Amandeep G.", quote: "My bridal makeup was flawless. Thank you Satanam Salon for making me feel like royalty." },
            { name: "Riya B.", quote: "I come here every month for facials — it's a whole vibe of calm and glow." },
          ].map((t, i) => (
            <div key={i} className="bg-[#fdf8f6] p-6 rounded-xl shadow-sm">
              <p className="italic text-gray-700">“{t.quote}”</p>
              <p className="mt-4 text-sm text-pink-600 font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>
            <Gallarey />
      {/* CTA BOOKING */}
      <section className="bg-black backdrop-blur-2xl text-white py-20 text-center">
        <h2 className="text-4xl font-serif font-bold mb-4">Your Luxury Experience Awaits</h2>
        <p className="mb-8 text-gray-300">Book now and let your transformation begin.</p>
        <Link
          href="tel:+917973490084"
          className="inline-block bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg rounded-full font-semibold transition"
        >
          Schedule Appointment
        </Link>
      </section>

      {/* CONTACT */}
      <section className="py-12 text-center text-gray-600 text-sm">
        <p>📍 Chunni kalan ,Fategarh shaib Punjab  |  📞<Link
          href="tel:+917973490084"
        >
          7973490084
        </Link> | 🕒 Mon–Sun: 10AM – 8PM</p>
        <p className="mt-2">&copy; 2025 Satanam Hair & Beauty Salon. All rights reserved.</p>
      </section>
    </main>
  );
}
