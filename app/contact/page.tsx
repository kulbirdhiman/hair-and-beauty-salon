import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white px-6 md:px-20 lg:px-32 py-20">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Map Section */}
        <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-xl">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d109831.10646819026!2d76.4790232!3d30.6558744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe41cc6b6f21d%3A0x3c9ead273a31cdc0!2sHair%20%26%20Beauty%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1750170664886!5m2!1sen!2sin" width="600" height="450"></iframe>
        </div>

        {/* Contact Info Section */}
        <div className="bg-pink-50 rounded-3xl shadow-xl p-10 flex flex-col space-y-10">
          <h1 className="text-4xl font-serif font-extrabold text-pink-700 text-center">
            Get In Touch
          </h1>
          <p className="text-gray-700 text-center text-lg">
            Questions? Booking requests? We’d love to hear from you! Contact us anytime.
          </p>

          <div className="flex flex-col space-y-8">
            {/* Address */}
            <div className="flex items-start gap-5">
              <FiMapPin className="text-pink-600 text-3xl mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-pink-700">Address</h2>
                <address className="not-italic text-gray-700 leading-relaxed text-base">
                 📍 Chunni kalan ,Fategarh shaib Punjab 
                </address>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <FiPhone className="text-pink-600 text-3xl mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-pink-700">Phone</h2>
                <a
                  href="tel:+1234567890"
                  className="text-gray-900 text-base hover:text-pink-600 transition"
                >
                  +91 7973490084
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5">
              <FiMail className="text-pink-600 text-3xl mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-pink-700">Email</h2>
                <a
                  href="mailto:info@satanamsalon.com"
                  className="text-gray-900 text-base hover:text-pink-600 transition"
                >
                  info@satanamsalon.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
