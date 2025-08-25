import Image from "next/image";
import Link from "next/link";
const HomeBlogSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-sm text-gray-700 font-semibold uppercase mb-1">
              OUR ARTICLES
            </h2>
            <h3 className="text-3xl text-blue-900 font-bold">
              Latest News &amp; Blog
            </h3>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full">
            More News
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/assets/blog/blog4-558x410.jpg"
              alt="Construction Employment News"
              className="w-full h-56 object-cover"
              width={558}
              height={410}
            />
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">January 29, 2019</p>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Construction Employment News: April 2019
              </h4>
              <Link
                href="#"
                className="text-orange-500 hover:underline text-sm"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/assets/blog/blog5-558x410.jpg"
              alt="Technology, Contracts and Jobsite Safety"
              className="w-full h-56 object-cover"
              width={558}
              height={410}
            />
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">January 29, 2019</p>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                Technology, Contracts and Jobsite Safety
              </h4>
              <Link
                href="#"
                className="text-orange-500 hover:underline text-sm"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/assets/blog/blog6-558x410.jpg"
              alt="How Technology Can Help Contractors Be More Efficient"
              className="w-full h-56 object-cover"
              width={558}
              height={410}
            />
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">October 3, 2017</p>
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                How Technology Can Help Contractors Be More Efficient
              </h4>
              <Link
                href="#"
                className="text-orange-500 hover:underline text-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogSection;
