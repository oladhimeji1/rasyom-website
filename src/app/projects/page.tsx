import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen mt-15">
      {/* Hero Section */}
      <section className="relative bg-[url('/assets/gallery/project-bg.jpg')] bg-center bg-no-repeat bg-cover text-white">
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
<section className="py-16 bg-white">
  {/* Heading */}
  <div className="max-w-4xl mx-auto text-center px-4">
    <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
      Featured Projects
    </p>
    <h2 className="mt-2 text-3xl md:text-4xl font-light text-gray-800">
      View <span className="font-bold">our featured projects</span> below,
      <br /> then get in touch with us
    </h2>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      We are proud to show you our latest projects. You will find a diverse gallery
      of developments, remodeling, additions and new construction.
    </p>
  </div>

  {/* Image Gallery */}
  {/* <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-0">
    <img
      src="/assets/gallery/project1-6-425x528.jpg"
      alt="Project 1"
      className="w-full h-64 object-cover"
    />
    <img
      src="/assets/gallery/project2-6-425x528.jpg"
      alt="Project 2"
      className="w-full h-64 object-cover"
    />
    <img
      src="/assets/gallery/project3-6-425x528.jpg"
      alt="Project 3"
      className="w-full h-64 object-cover"
    />
    <img
      src="/assets/gallery/project4-6-425x528.jpg"
      alt="Project 4"
      className="w-full h-64 object-cover"
    />
    <img
      src="/assets/gallery/project5-4-425x528.jpg"
      alt="Project 5"
      className="w-full h-64 object-cover"
    />
  </div> */}
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
                    className="inline-block mt-4 bg-[rgb(243,92,39)] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-cover bg-center" style={{ backgroundImage: "url('/assets/gallery/project-form-bg.jpg')" }}>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
    
    {/* Left Side - Contact Info 
    <div className="bg-black bg-opacity-70 text-white p-8 rounded-lg">
      <h2 className="text-3xl font-light">
        Get in <span className="font-bold">Touch</span>
      </h2>
      <p className="mt-4 text-gray-300 text-sm leading-relaxed">
        If you’ve got questions or ideas you would like to share, send a message.
        For anything more specific, please use one of the addresses listed below.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 text-sm">
        {/* Addresses 
        <div>
          <h3 className="font-semibold">Bauer Internation</h3>
          <p>24B Isapa Crescent Byazhin Kubwa, Abuja</p>
          <a href="#" target="_blank" className="text-orange-400 flex items-center gap-1 mt-1">
            <span>📍</span> Find Us on Map
          </a>
        </div>
        
      </div>

      {/* Contact Numbers 
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div>
          <p className="font-semibold">Support</p>
          <p>📞 +1 212-946-2707</p>
        </div>
        <div>
          <p className="font-semibold">Sales Enquiries</p>
          <p>📞 +1 212-946-2704</p>
        </div>
      </div>

      {/* Email 
      <div className="mt-6">
        <p className="font-semibold">Our Email</p>
        <a href="mailto:info@BauerX.com" className="text-orange-400 flex items-center gap-1">
          <span>📧</span> rasyom@yahoo.com
        </a>
      </div>
    </div>

    {/* Right Side - Contact Form 
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h3 className="text-xl font-semibold text-gray-800">
        Let’s Talk About Your Project
      </h3>
      <p className="mt-2 text-gray-500 text-sm">
        After we get some information from you, we’ll set up a time to discuss your project in further detail.
      </p>

      <form className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition"
        >
          SUBMIT
        </button>
      </form>
    </div>
  </div>
</section> */}

    </div>
  );
}
