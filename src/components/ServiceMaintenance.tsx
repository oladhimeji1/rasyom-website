"use client";

import {
  // WrenchIcon,
  BuildingOfficeIcon,
  // PaintBrushIcon,
  // PaperAirplaneIcon,
  WrenchScrewdriverIcon,
  CogIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const featuresLeft = [
  {
    title: "Building Construction",
    description:
      "From design to execution, we deliver durable residential, commercial, and industrial buildings.",
    icon: BuildingOfficeIcon,
  },
  {
    title: "Facility Maintenance",
    description:
      "Reliable maintenance solutions that extend the life and performance of your facilities.",
    icon: WrenchScrewdriverIcon,
  },
];

const featuresRight = [
  {
    title: "Engineering Solutions",
    description:
      "Civil, structural, and mechanical engineering expertise tailored to your unique projects.",
    icon: CogIcon,
  },
  {
    title: "Project Management",
    description:
      "End-to-end project planning, supervision, and delivery with quality and timeliness guaranteed.",
    icon: ClipboardDocumentCheckIcon,
  },
];


export default function ServiceMaintenance() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-8xl w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-3 gap-12 items-center">
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
