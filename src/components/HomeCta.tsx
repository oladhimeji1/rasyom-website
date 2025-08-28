import React from "react";
import {
  PencilSquareIcon,
  UserIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";

const HomeCTA = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-orange-500 rounded-lg p-8 sm:p-12 mb-8 shadow-2xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 md:mb-0 md:mr-8 max-w-xl">
              We&apos;re here to help you get started in the right{" "}
              <br className="hidden lg:inline" />
              direction with your project.
            </h2>
            <button className="bg-white text-orange-500 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Services Section */}
        <div className="container mx-auto px-4 mt-[-4rem] relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Construction Management Card */}
            <div className="relative rounded-md overflow-hidden shadow-2xl transition-shadow hover:shadow-lg group">
              <div className="bg-gray-800 text-white p-6">
                <PencilSquareIcon className="w-12 h-12 mb-4 text-orange-500 transition-transform duration-300 group-hover:scale-110" />
                <h4 className="text-lg font-semibold mb-2">
                  Construction Management
                </h4>
                <p className="text-sm text-gray-400">
                  This area delivers the control you want over all critical
                  aspects of your project.
                </p>
              </div>
            </div>

            {/* Owner's Representation Card */}
            <div className="bg-gray-800 rounded-md shadow-2xl border border-gray-700">
              <div className="p-6">
                <UserIcon className="text-orange-500 w-12 h-12 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  Owner&apos;s Representation
                </h4>
                <p className="text-sm text-gray-400">
                  A good owner&apos;s rep saves their client time, money and a lot of
                  headaches.
                </p>
              </div>
            </div>

            {/* General Contractor Card */}
            <div className="bg-gray-800 rounded-md shadow-2xl border border-gray-700">
              <div className="p-6">
                <BuildingOffice2Icon className="text-orange-500 w-12 h-12 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  General Contractor
                </h4>
                <p className="text-sm text-gray-400">
                  Clients hire Bauer because we deliver great value, without
                  question.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCTA;
