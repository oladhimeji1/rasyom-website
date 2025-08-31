import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen mt-15">
      {/* Hero Section */}
      <section className="relative bg-[url('/assets/gallery/title-bg1.jpg')] bg-center bg-no-repeat bg-cover text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Explore our portfolio of successful construction projects
            </p>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4  mb-8 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center px-4">
            <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
              Featured Projects
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-light text-gray-800">
              View <span className="font-bold">our featured projects</span>{" "}
              below,
              <br /> then get in touch with us
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We are proud to show you our latest projects. You will find a
              diverse gallery of developments, remodeling, additions and new
              construction.
            </p>
          </div>
          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Office Complex",
                image: "/assets/gallery/office-complex.webp",
                category: "Commercial",
                description:
                  "A state-of-the-art office complex with sustainable design features.",
                location: "New York, NY",
                year: "2023",
              },
              {
                title: "Luxury Residential Tower",
                image: "/assets/gallery/luxury-residential-tower.webp",
                category: "Residential",
                description:
                  "High-end residential tower with premium amenities and finishes.",
                location: "Los Angeles, CA",
                year: "2023",
              },
              {
                title: "Industrial Warehouse",
                image: "/assets/gallery/warehouse.avif",
                category: "Industrial",
                description:
                  "Large-scale warehouse facility with advanced logistics capabilities.",
                location: "Chicago, IL",
                year: "2022",
              },
              {
                title: "Retail Shopping Center",
                image: "/assets/gallery/retail-shopping-center.avif",
                category: "Commercial",
                description:
                  "Modern shopping center with diverse retail spaces and parking.",
                location: "Miami, FL",
                year: "2022",
              },
              {
                title: "Educational Facility",
                image: "/assets/gallery/educational-facility.avif",
                category: "Institutional",
                description:
                  "Comprehensive educational facility with classrooms and labs.",
                location: "Seattle, WA",
                year: "2021",
              },
              {
                title: "Healthcare Center",
                image: "/assets/gallery/health-center.avif",
                category: "Healthcare",
                description:
                  "Modern healthcare facility with advanced medical equipment.",
                location: "Denver, CO",
                year: "2021",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-1 text-sm text-gray-500">
                    <p>
                      <strong>Location:</strong> {project.location}
                    </p>
                    <p>
                      <strong>Completed:</strong> {project.year}
                    </p>
                  </div>
                  <Link
                    href={`/projects/${index + 1}`}
                    className="inline-block mt-4 bg-[#9A0200] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
