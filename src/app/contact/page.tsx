import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen mt-15 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full bg-[url('/assets/gallery/title-bg1.jpg')] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8 text-orange-100">
              Get in touch with us for your construction needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Get Free Quote</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we will get back to you as soon as
                possible.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option value="">Select a service</option>
                    <option value="general-contracting">
                      General Contracting
                    </option>
                    <option value="project-planning">Project Planning</option>
                    <option value="interior-design">Interior Design</option>
                    <option value="construction-management">
                      Construction Management
                    </option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="commercial">Commercial Construction</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-6">
                We are here to help you with your construction needs. Reach out
                to us through any of the following channels.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">
                    78/A, Green Lane
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">
                    <a
                      href="tel:+10783672536"
                      className="hover:text-orange-600"
                    >
                      +10 (78) 367 2536
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:rasyom@yahoo.com"
                      className="hover:text-orange-600"
                    >
                      rasyom@yahoo.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Image
                  src="/assets/gallery/video-bg.png"
                  alt="Contact"
                  width={600}
                  height={400}
                  className="w-full max-w-[600px] h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-gray-600">
              Visit our office to discuss your project in person
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.8252704595097!2d7.321035374103014!3d9.17022948676417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd91a178ac3f9%3A0x4c2159d9017aabfe!2s27%20Isapa%20Cres%2C%20Kubwa%20901101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1756085316119!5m2!1sen!2sng"
              className="w-full aspect-video"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
