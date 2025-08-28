import Link from "next/link";

import React from "react";
// import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-[#171A1E] text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-white mr-2"
              >
                <path d="M12 2L2 22h20L12 2z" />
              </svg>
              <h3 className="text-xl text-white font-semibold">
                Rasyom Consults.
              </h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              With over 10 years of experience in construction, we partner with
              owners and design professionals to build high-quality projects.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067C2.179 19.29 4.768 20 7.548 20c9.142 0 14.307-7.721 13.995-14.646a9.936 9.936 0 0 0 .962-2.534z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              ></Link>
            </div>
          </div>

          {/* Useful Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-white font-semibold mb-4">Useful Links</h4>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link href="/blog" className="hover:text-white transition-colors">
                News
              </Link>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/careers"
                className="hover:text-white transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link href="/help" className="hover:text-white transition-colors">
                Help Desk
              </Link>

              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to get updates.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Subscribe!
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rasyom Consult Ltd . All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
