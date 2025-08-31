import React from "react";
import {
  PencilSquareIcon,
  UserIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";

const HomeCTA = () => {
  return (
    <div className="min-h-80 bg-center bg-no-repeat bg-cover bg-[url('/assets/hero/slider_bg1.jpg')] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-7xl flex justify-center items-center mx-auto">
        {/* Hero Section */}
        <div className="bg-[#9A0200] rounded-lg  p-8 sm:p-12 shadow-2xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 md:mb-0 md:mr-8 max-w-xl">
              We&apos;re here to help you get started in the right{" "}
              {/* <br className="hidden lg:inline" /> */}
              direction with your project.
            </h2>
            <button className="bg-white text-[#9A0200] font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* Services Section */}
        {/* <div className="container mx-auto px-4 mt-[-4rem] relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Construction Management Card 
            <div className="relative rounded-md overflow-hidden shadow-2xl transition-shadow hover:shadow-lg">
              <div className="bg-gray-800 text-white p-6">
                <PencilSquareIcon className="w-12 h-12 mb-4 text-[#9A0200] transition-transform duration-300" />
                <h4 className="text-lg font-semibold mb-2">
                  Construction Management
                </h4>
                <p className="text-sm text-gray-400">
                  This area delivers the control you want over all critical
                  aspects of your project.
                </p>
              </div>
            </div>

            {/* Owner's Representation Card 
            <div className="bg-gray-800 rounded-md shadow-2xl border border-gray-700">
              <div className="p-6">
                <UserIcon className="text-[#9A0200] w-12 h-12 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  Owner&apos;s Representation
                </h4>
                <p className="text-sm text-gray-400">
                  A good owner&apos;s rep saves their client time, money and a lot of
                  headaches.
                </p>
              </div>
            </div>

            {/* General Contractor Card 
            <div className="bg-gray-800 rounded-md shadow-2xl border border-gray-700">
              <div className="p-6">
                <BuildingOffice2Icon className="text-[#9A0200] w-12 h-12 mb-4" />
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
        </div> */}
      </div>
    </div>
  );
};

export default HomeCTA;
