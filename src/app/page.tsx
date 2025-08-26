"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSlider from "../components/HeroSlider";
import OurCompanySection from "../components/OurCompany";
import HomeBlogSection from "../components/HomeBlog";
import HomeCta from "../components/HomeCta";
import { services, projects } from "@/utils/data";
import Testimonial from "../components/Testimonial";
export default function HomePage() {
  return (
    <>
      <div className="min-h-screen hero-section">
        {/* Hero Section */}
        <section className="relative text-white">
          <div className=" mx-auto px-4 sm:px-6 lg:px-0">
            <HeroSlider />
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="w-1/2">
                <Image
                  src="/assets/gallery/about2.jpg"
                  alt="About Us"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-1/2">
                <p className="text-zinc-600 uppercase font-bold">
                  We Build with Excellence
                </p>
                <h2 className="text-4xl text-[#030F27] font-medium mb-4">
                  Delivering quality{" "}
                  <span className="font-bold">construction solutions</span>{" "}
                  across Nigeria
                </h2>
                <p className="text-gray-600 mb-6">
                  At Rasyom Consults, we are more than builders — we are
                  partners in shaping the future of infrastructure across
                  Africa. With years of experience in Nigeria’s construction
                  industry, we specialize in delivering modern, sustainable, and
                  cost-effective building solutions tailored to our clients’
                  needs.
                </p>
                <p className="text-gray-600">
                  From residential homes to large-scale commercial projects, our
                  dedicated team combines technical expertise, innovation, and
                  deep local knowledge to bring your vision to life. We pride
                  ourselves on integrity, timely delivery, and workmanship that
                  stands the test of time.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether it’s design, planning, or construction, Rasyom
                  Consults provides end-to-end services that ensure excellence
                  every step of the way.
                </p>

                {/* <div className="flex items-center justify-between">
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
                </div> */}
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
        <section className="py-10 bg-[#F7F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-lg text-[rgb(243,92,39)] font-bold mb-2 uppercase">
                Services we provide
              </h3>
              <p className="text-[#030F27] text-4xl max-w-2xl mx-auto">
                Explore <span className="font-bold">our core services</span>{" "}
                below, then get in touch with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg flex flex-col"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-tl-lg rounded-tr-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {service.description}
                    </p>

                    <Link
                      href="/services"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Explore Now →
                    </Link>
                  </div>
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

        {/* Projects Section */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-lg text-[rgb(243,92,39)] font-bold mb-2 uppercase">
                Latest Projects
              </h3>
              <p className="text-[#030F27] text-4xl mb-8 max-w-2xl mx-auto">
                Explore <span className="font-bold">our recent works</span>{" "}
                below, then get in touch with us
              </p>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                From highways to bridges and modern buildings, we are proud to
                showcase some of our recent projects that reflect our commitment
                to quality, innovation, and lasting impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl shadow-md"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                    <h3 className="text-white text-lg font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm mt-2">
                      {project.description}
                    </p>
                    <button className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition">
                      View More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-block bg-[rgb(243,92,39)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[rgb(243,92,39)]/80 transition-colors"
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
              our clients have to say about the services we provided for their
              projects.
            </p>

            {/* Testimonials Carousel */}
            <Testimonial />
          </div>
        </section>

        <HomeBlogSection />

        <HomeCta />
      </div>
    </>
  );
}
