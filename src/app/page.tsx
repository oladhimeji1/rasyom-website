import Image from 'next/image';
import Link from 'next/link';
import HeroSlider from '../components/HeroSlider';

export default function HomePage() {
  return (
    <div className="min-h-screen hero-section">
      {/* Hero Section */}
      <section className="relative text-white hero-section">
        <div className="absolute inset-0 hero-bg-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <HeroSlider />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
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
              <Link 
                href="/about" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services we provide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Questions explained agreeable preferred strangers too him her son. 
              There are many variations of passages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "General Contracting",
                image: "/assets/img/gallery/services1.png",
                description: "Questions explained agreeable preferred strangers."
              },
              {
                title: "Project Planning",
                image: "/assets/img/gallery/services2.png",
                description: "Questions explained agreeable preferred strangers."
              },
              {
                title: "Interior Design",
                image: "/assets/img/gallery/services3.png",
                description: "Questions explained agreeable preferred strangers."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
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
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Projects we have Done</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Questions explained agreeable preferred strangers too him her son. 
              There are many variations of passages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "/assets/img/gallery/items1.png",
              "/assets/img/gallery/items2.png",
              "/assets/img/gallery/items3.png"
            ].map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`Project ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Planning</h3>
                  <p className="text-gray-600 mb-4">
                    Questions explained agreeable preferred strangers.
                  </p>
                  <Link 
                    href="/projects" 
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Project →
                  </Link>
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

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get Free Quote</h2>
              <p className="text-gray-600 mb-6">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="project">Project Discussion</option>
                    <option value="quote">Request Quote</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Your message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <Image
                src="/assets/img/gallery/video-bg.png"
                alt="Contact"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Any help needed?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
