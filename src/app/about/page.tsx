import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl mb-8 text-blue-100">
              Questions explained agreeable preferred strangers too him her son. 
              There are many variations of passages.
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
                src="/assets/img/gallery/about.png"
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
                Questions explained agreeable preferred strangers too him her son. 
                There are many variations of passages. Architecture, control and 
                construction of projects of all kinds, we have the experts in each area of work.
              </p>
              <p className="text-gray-600 mb-6">
                We are a leading construction company with over 20 years of experience 
                in delivering high-quality construction projects. Our team of experts 
                is dedicated to providing innovative solutions that meet our clients' 
                unique needs and exceed their expectations.
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
                clients' visions into reality. We are committed to excellence, 
                innovation, and sustainability in every project we undertake.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted construction partner, known for our 
                integrity, quality, and commitment to client satisfaction. 
                We strive to set new standards in the construction industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              { name: "John Smith", role: "Project Manager", image: "/assets/img/icon/testimonial.png" },
              { name: "Sarah Johnson", role: "Senior Architect", image: "/assets/img/icon/testimonial.png" },
              { name: "Mike Davis", role: "Construction Supervisor", image: "/assets/img/icon/testimonial.png" }
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
    </div>
  );
}
