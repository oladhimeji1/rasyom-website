import Image from "next/image";
import Link from "next/link";
// import OurCompanySection from "../../components/OurCompany";
import FAQSection from "../../components/Faq";

export default function AboutPage() {
  return (
    <div className="min-h-screen mt-15">
      {/* Hero Section */}
      <section className="relative bg-[url('/assets/about/section-bg.jpg')] bg-center bg-cover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              At Rasyom, we are committed to delivering top-notch construction
              services that exceed our clients expectations. With a team of
              experienced professionals and a passion for excellence, we bring
              your visions to life with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/assets/gallery/about.png"
                alt="About Our Company"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Building Excellence, Delivering Trust
              </h2>
              <p className="text-gray-600 mb-6">
                For over <span className="font-semibold">20 years</span>, we have been at the forefront of the construction industry, 
                delivering large-scale projects with precision, innovation, and integrity. 
                From architecture and engineering to project management and construction, 
                our team brings together expertise in every field to ensure world-class results.
              </p>
              <p className="text-gray-600 mb-6">
                We pride ourselves on creating sustainable, cost-effective, and 
                future-ready solutions tailored to each client’s unique vision. 
                Our commitment to quality, safety, and excellence has earned us 
                the trust of partners across residential, commercial, and 
                industrial sectors.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[rgb(243,92,39)] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 4H3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional construction services that transform our
                clients’ visions into reality. We are committed to excellence,
                innovation, and sustainability in every project we undertake.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted construction partner, known for our integrity,
                quality, and commitment to client satisfaction. We strive to set new
                standards in the construction industry.
              </p>
            </div>

          </div>
        </div>
      </section>


      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT SECTION */}
          <div>
            <p className="uppercase text-sm font-semibold text-gray-400 mb-2">
              Welcome to Rasyom Consults
            </p>

            <h2 className="text-3xl md:text-4xl font-light leading-snug mb-6">
              We understand the importance of{" "}
              <span className="font-bold">innovation</span> <br className="md:hidden"/>
              and <span className="font-bold">professionalism</span>
            </h2>

            <p className="text-gray-600 mb-6">
              Since our launch in 2007, our vision and focus has been to deliver
              high value projects for our clients with the emphasis on
              communication and attention to detail.
            </p>

            <p className="text-gray-600 mb-6">
              We began Rasyom Consult Ltd with one focus: to build a company
              that can compete with large construction firms while operating
              with the flexibility and customer-focus of a small, family-run
              business. We call it small business values with a big business
              approach.
            </p>

            <p className="text-gray-600 mb-8">
              Today, 75 percent of our business comes from a core group of
              legacy clients: a testament to our commitment to building strong,
              long-term working relationships.
            </p>

            <Link
              href="/projects"
              className="inline-block px-6 py-3 border border-orange-500 text-white font-semibold rounded-full bg-orange-500 transition-colors"
            >
              See our Project
            </Link>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-[90%] md:w-[80%] relative">
              <Image
                src="/assets/about/about-main-1.png"
                alt="Engineer at construction site"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <OurCompanySection /> */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Expert Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the professionals who make our success possible
            </p>
          </div>

          <div className="flex justify-around flex-wrap gap-8">
            {[
              {
                name: "Engr. Nasiru Yomi Rasaq",
                role: "CEO/Founder",
                image: "/assets/customers/testimonial1-2.jpg",
              },
              // {
              //   name: "Sarah Johnson",
              //   role: "Senior Architect",
              //   image: "/assets/customers/testimonial2.jpg",
              // },
              {
                name: "Mike Davis",
                role: "Construction Supervisor",
                image: "/assets/customers/testimonial3.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
