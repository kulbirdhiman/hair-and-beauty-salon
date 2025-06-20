import Image from "next/image";
import React from "react";

const Gallarey = () => {
  const galleryImages = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
  ];
  return (
    <div>
      <section className="max-w-5xl my-4 mx-auto">
        <h3 className="text-3xl font-serif font-medium mb-8 text-gray-900 text-center">
          Our Work & Ambiance
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-48 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority={index < 3} // prioritize first 3 images
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallarey;
