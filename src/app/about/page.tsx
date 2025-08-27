import Image from "next/image";
import Link from "next/link";
import OurCompanySection from "../../components/OurCompany";
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
                alt="About Us"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Complete solution of large projects
              </h2>
              <p className="text-gray-600 mb-6">
                Questions explained agreeable preferred strangers too him her
                son. There are many variations of passages. Architecture,
                control and construction of projects of all kinds, we have the
                experts in each area of work.
              </p>
              <p className="text-gray-600 mb-6">
                We are a leading construction company with over 20 years of
                experience in delivering high-quality construction projects. Our
                team of experts is dedicated to providing innovative solutions
                that meet our clients unique needs and exceed their
                expectations.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional construction services that transform our
                clients visions into reality. We are committed to excellence,
                innovation, and sustainability in every project we undertake.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted construction partner, known for our
                integrity, quality, and commitment to client satisfaction. We
                strive to set new standards in the construction industry.
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
              <span className="font-bold">innovation</span> <br />
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
              className="inline-block px-6 py-3 border border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-colors"
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

      <OurCompanySection />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Expert Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the professionals who make our success possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "Project Manager",
                image: "/assets/customers/testimonial1-2.jpg",
              },
              {
                name: "Sarah Johnson",
                role: "Senior Architect",
                image: "/assets/customers/testimonial2.jpg",
              },
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
