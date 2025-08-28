import Image from "next/image";
import Link from "next/link";
import ServiceFeature from "@/components/ServiceFeature";
import ServiceMaintenance from "@/components/ServiceMaintenance";
import ServiceContact from "@/components/ServiceContact";
export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mt-15 relative bg-[url('/assets/elements/title-bg3.jpg')] bg-cover bg-no-repeat text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Services</h1>
            <p className="text-xl mb-8 text-green-100">
              Comprehensive construction services tailored to your needs
            </p>
          </div>
        </div>
      </section>

      <ServiceFeature />

      {/* Services Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services We Provide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of construction services to meet
              all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "General Contracting",
                image: "/assets/gallery/services1.png",
                description:
                  "Complete construction management from planning to completion.",
                features: [
                  "Project Planning",
                  "Budget Management",
                  "Quality Control",
                  "Timeline Management",
                ],
              },
              {
                title: "Project Planning",
                image: "/assets/gallery/services2.png",
                description:
                  "Comprehensive planning and design services for all construction projects.",
                features: [
                  "Architectural Design",
                  "Engineering Services",
                  "Permit Acquisition",
                  "Cost Estimation",
                ],
              },
              {
                title: "Interior Design",
                image: "/assets/gallery/services3.png",
                description:
                  "Professional interior design and decoration services.",
                features: [
                  "Space Planning",
                  "Material Selection",
                  "Color Schemes",
                  "Furniture Layout",
                ],
              },
              {
                title: "Construction Management",
                image: "/assets/gallery/services1.png",
                description:
                  "Expert construction management services for complex projects.",
                features: [
                  "Site Management",
                  "Quality Assurance",
                  "Safety Compliance",
                  "Progress Tracking",
                ],
              },
              {
                title: "Renovation & Remodeling",
                image: "/assets/gallery/services2.png",
                description:
                  "Complete renovation and remodeling services for existing structures.",
                features: [
                  "Structural Assessment",
                  "Design Updates",
                  "Material Upgrades",
                  "Timeline Management",
                ],
              },
              {
                title: "Commercial Construction",
                image: "/assets/gallery/services3.png",
                description:
                  "Specialized commercial construction services for businesses.",
                features: [
                  "Office Buildings",
                  "Retail Spaces",
                  "Warehouses",
                  "Industrial Facilities",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-gray-500 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block bg-[rgb(243,92,39)] text-white px-4 py-2 rounded-lg hover:bg-[rgba(190, 57, 9, 1)]  transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceMaintenance />
      <ServiceContact />
    </div>
  );
}
