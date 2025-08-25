import Image from "next/image";
import Link from "next/link";
import HeroSlider from "../components/HeroSlider";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Footer from "../components/Footer";
import StatsSection from "../components/HomeStats";
import OurCompanySection from "../components/OurCompany";
import HomeBlogSection from "../components/HomeBlog";
import HomeCta from "../components/HomeCta";
export default function HomePage() {
  return (
    <>
      <div className="min-h-screen hero-section">
        {/* Hero Section */}
        <section className="relative text-white hero-section">
          <div className=" mx-auto px-4 sm:px-6 lg:px-0">
            <HeroSlider />
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/assets/gallery/about2.jpg"
                  alt="About Us"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <p className="text-zinc-600 uppercase font-bold mb-4">
                  We Build things differently
                </p>
                <h2 className="text-4xl text-[#030F27] font-medium mb-4">
                  We can service all of your{" "}
                  <span className=" font-bold">construction needs</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Rasyom Consults is a full service construction company
                  offering building solutions from start to finish. Our staff
                  has been operating on NYC for ten years.
                </p>
                <p className="text-gray-600 mb-6">
                  From contract delivery alternatives to progressive
                  preconstruction and tech-driven construction services, Rasyom
                  offers clients flexible options that keep information flowing,
                  teammates collaborating, and projects on track.
                </p>

                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4 bg-[#F7F9FA] p-8 rounded-lg">
                    <PhoneIcon className="h-6 w-6 text-[#F35C27]" />
                    <div>
                      <p className="text-sm text-gray-500">Call us</p>
                      <a
                        href="tel:+1234567890"
                        className="font-medium text-[#F35C27]"
                      >
                        +1 234 567 890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-[#F7F9FA] p-8 rounded-lg">
                    <EnvelopeIcon className="h-6 w-6 text-[#F35C27]" />
                    <div>
                      <p className="text-sm text-gray-500">Email us</p>
                      <a
                        href="mailto:rasyom@yahoo.com"
                        className="font-medium text-[#F35C27]"
                      >
                        rasyom@yahoo.com
                      </a>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-block bg-[rgb(243,92,39)] text-white px-12 py-4 rounded-full hover:bg-[rgb(204,54,0)] transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-[#F7F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-lg text-zinc-600 font-bold mb-8 uppercase">
                Services we provide
              </h3>
              <p className="text-[#030F27] text-4xl max-w-2xl mx-auto">
                View <span className="font-bold"> our services</span> below,
                then get in touch with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "General Contracting",
                  image: "/assets/gallery/services1.png",
                  description:
                    "As a trusted general contractor, we oversee construction projects from start to finish, ensuring timely completion, budget adherence, and exceptional quality. Our expertise encompasses subcontractor management, material procurement & site supervision",
                },
                {
                  title: "Project Planning",
                  image: "/assets/gallery/services2.png",
                  description:
                    "Effective project planning is the foundation of successful construction projects. Our experienced team helps you navigate the complexities of construction planning, ensuring your project is well organized, on-time, and withing budget",
                },
                {
                  title: "Interior Design",
                  image: "/assets/gallery/services3.png",
                  description:
                    "Transform your space with our expert interior design services. Our team of skilled designers will work with you to create functional, beautiful, and tailored spaces that reflect your styles and meet your needs.",
                },
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Explore Now →
                  </Link>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="inline-block mt-10 text-center bg-[rgb(243,92,39)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#363636] transition-colors"
            >
              All Services
            </Link>
          </div>
        </section>

        <StatsSection />

        {/* Projects Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-lg text-zinc-600 font-bold mb-8 uppercase">
                LASTEST PROJECTS
              </h3>
              <p className="text-[#030F27] text-4xl mb-8 max-w-2xl mx-auto">
                View <span className="font-bold"> our projects</span> below,
                then get in touch with us
              </p>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                We are proud to show you our latest projects. You will find a
                diverse gallery of developments, remodeling, additions and new
                construction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "/assets/gallery/items1.png",
                "/assets/gallery/items2.png",
                "/assets/gallery/items3.png",
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl shadow-md"
                >
                  <Image
                    src={image}
                    alt={`Project_${index}`}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-lg font-semibold">
                      Construction Project
                    </h3>
                    <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition">
                      View More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                All Projects
              </Link>
            </div>
          </div>
        </section>

        <OurCompanySection />

        {/* Testminonial Section */}

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-900">
              What <span className="text-orange-500">our customers</span> are
              saying about us
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              At Rasyom, customer satisfaction is our ultimate goal. See what
              Bauer clients have to say about a variety of services that we
              provided for their projects.
            </p>

            {/* Testimonials Grid */}
            <div className="grid gap-8 mt-12 md:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition border-b-4 border-orange-500">
                <div className="flex justify-center">
                  <Image
                    width={100}
                    height={100}
                    src="/assets/customers/testimonial1-2.jpg"
                    alt="Eloise Smith"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  Eloise Smith
                </h3>
                <p className="text-sm text-orange-500 font-medium">
                  Industrial Engineer and CEO
                </p>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Rasyom Limited did an excellent job from the conceptual stage
                  through the finished construction of our new office.
                </p>
                <div className="mt-6 text-gray-700 font-semibold">INDUX</div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                <div className="flex justify-center">
                  <Image
                    width={100}
                    height={100}
                    src="/assets/customers/testimonial2.jpg"
                    alt="Thomas Smith"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  Thomas Smith
                </h3>
                <p className="text-sm text-orange-500 font-medium">
                  Industrial Engineer and CEO
                </p>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Rasyom Limited did an excellent job from the conceptual stage
                  through the finished construction of our new office.
                </p>
                <div className="mt-6 text-gray-700 font-semibold">Bauer</div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                <div className="flex justify-center">
                  <Image
                    width={100}
                    height={100}
                    src="/assets/customers/testimonial3.jpg"
                    alt="Vincent Smith"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  Vincent Smith
                </h3>
                <p className="text-sm text-orange-500 font-medium">
                  Industrial Engineer and CEO
                </p>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Rasyom Limited did an excellent job from the conceptual stage
                  through the finished construction of our new office.
                </p>
                <div className="mt-6 text-gray-700 font-semibold">Arquix</div>
              </div>
            </div>
          </div>
        </section>

        <HomeBlogSection />

        <HomeCta />

        <Footer />
      </div>
    </>
  );
}
