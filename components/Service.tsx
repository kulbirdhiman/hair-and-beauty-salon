import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Service = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#fdf8f6]">
        <h2 className="text-4xl font-serif text-center mb-16 text-gray-900">Our Signature Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: 'Hairstyling & Cut', img: '/services/cutting.jpg' },
            { title: 'Facials & Glow Treatments', img: '/services/facial.jpg' },
            { title: 'Bridal & Occasion Makeup', img: '/services/bridelmakeup.jpg' },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src={s.img}
                alt={s.title}
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif font-medium text-gray-800 mb-2">{s.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="text-gray-700 underline font-medium hover:text-pink-600 transition"
          >
            View All Services →
          </Link>
        </div>
      </section>
  )
}

export default Service