"use client";

import {
  WrenchIcon,
  BuildingOfficeIcon,
  PaintBrushIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const featuresLeft = [
  {
    title: "Renovation Contractors",
    description:
      "Whether you need home exterior repair or interior improvement.",
    icon: WrenchIcon,
  },
  {
    title: "Flooring Installation",
    description:
      "We guarantee great results and a finished product you will be satisfied with.",
    icon: PaintBrushIcon,
  },
];

const featuresRight = [
  {
    title: "Home Renovations",
    description: "We provide more than average handyman renovations.",
    icon: BuildingOfficeIcon,
  },
  {
    title: "100% Value Delivered",
    description:
      "We focus on offering you excellent customer service and quality work.",
    icon: PaperAirplaneIcon,
  },
];

export default function ServiceMaintenance() {
  return (
    <section className="bg-gray-50 py-20 px-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-12 items-center">
        {/* Left side */}
        <div>
          <p className="text-sm font-semibold uppercase text-red-500 mb-2">
            Our Company
          </p>
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            We perform all types of{" "}
            <span className="font-semibold">property maintenance</span> and{" "}
            <span className="font-semibold">repair</span>
          </h2>
          <p className="text-gray-600 mb-8">
            We have the expertise to protect the value of your property with our
            services. We take pride in delivering quality services that exceed
            the expectations of our clients.
          </p>

          <div className="space-y-4">
            {featuresLeft.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-md p-4 flex items-start gap-4"
              >
                <feature.icon className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/assets/gallery/worker-png.png"
            alt="Handyman"
            width={350}
            height={500}
            className="object-contain"
          />
        </div>

        <div className="space-y-4">
          {featuresRight.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md p-4 flex items-start gap-4"
            >
              <feature.icon className="h-6 w-6 text-red-500 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
