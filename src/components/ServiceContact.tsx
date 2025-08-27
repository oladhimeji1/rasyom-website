"use client";

import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function ServiceContact() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            How to <span className="font-semibold">contact</span> us
          </h2>
          <p className="text-gray-600 mb-10">
            If you’ve got questions or ideas you would like to share, send a
            message. For anything more specific, please use one of the addresses
            listed below.
          </p>

          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3">
                <MapPinIcon className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Our Location</h4>
                <p className="text-gray-600 text-sm">
                  No. 27B Isapa Crescent Byazhin, Kubwa, Abuja
                </p>
                <a href="#" className="text-sm text-red-500 font-medium">
                  Find Us on Map
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3">
                <PhoneIcon className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Direct Line Numbers
                </h4>
                <p className="text-gray-600 text-sm">+1 212-946-2000</p>
                <p className="text-gray-600 text-sm">+1 212-946-2707</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3">
                <EnvelopeIcon className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Our Email</h4>
                <p className="text-blue-600 text-sm">rasyom@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Free handyman quote
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            After we get some information from you, we’ll set up a time to
            discuss your project in further detail.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-full border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-200 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-fit bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold px-6 py-2 rounded hover:opacity-90 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
