"use client";

import {
  BuildingOfficeIcon,
  // WrenchScrewdriverIcon,
  // BeakerIcon,
  TruckIcon,
  // Cog6ToothIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Building Construction",
    description:
      "From residential to commercial projects, we deliver high-quality building construction services with a focus on durability, safety, and modern design.",
    icon: BuildingOfficeIcon,
  },
  {
    title: "Civil Engineering",
    description:
      "We specialize in roads, bridges, drainage, and other civil engineering works that improve communities and support economic development.",
    icon: TruckIcon,
  },
  {
    title: "Construction & Engineering Consultancy",
    description:
      "We provide end-to-end consultancy services, helping clients plan, design, and execute projects with expert guidance and innovative solutions.",
    icon: BuildingLibraryIcon,
  },
];


export default function ServiceFeature() {
  return (
    <section className="px-4 py-20 max-w-7xl mx-auto text-center">
      <p className="text-sm text-red-600 font-semibold uppercase">
        We shape the life of tomorrow.
      </p>
      <h2 className="mt-2 text-3xl sm:text-4xl font-light text-gray-900">
        Excellence in{" "}
        <span className="font-semibold">architecture, engineering</span> and{" "}
        <span className="font-semibold">interior</span> design
      </h2>
      <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-base sm:text-lg">
        We consult, design, engineer, and make products for the arts and
        entertainment industry, architecture, robotics and technology and
        industrial sectors.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <feature.icon className="h-10 w-10 mx-auto text-red-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
