import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Projects We Have Done</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our completed projects showcasing our expertise and
              commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Office Complex",
                image: "/assets/gallery/items1.png",
                category: "Commercial",
                description:
                  "A state-of-the-art office complex with sustainable design features.",
                location: "New York, NY",
                year: "2023",
              },
              {
                title: "Luxury Residential Tower",
                image: "/assets/gallery/items2.png",
                category: "Residential",
                description:
                  "High-end residential tower with premium amenities and finishes.",
                location: "Los Angeles, CA",
                year: "2023",
              },
              {
                title: "Industrial Warehouse",
                image: "/assets/gallery/items3.png",
                category: "Industrial",
                description:
                  "Large-scale warehouse facility with advanced logistics capabilities.",
                location: "Chicago, IL",
                year: "2022",
              },
              {
                title: "Retail Shopping Center",
                image: "/assets/gallery/items1.png",
                category: "Commercial",
                description:
                  "Modern shopping center with diverse retail spaces and parking.",
                location: "Miami, FL",
                year: "2022",
              },
              {
                title: "Educational Facility",
                image: "/assets/gallery/items2.png",
                category: "Institutional",
                description:
                  "Comprehensive educational facility with classrooms and labs.",
                location: "Seattle, WA",
                year: "2021",
              },
              {
                title: "Healthcare Center",
                image: "/assets/gallery/items3.png",
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
                    className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
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
