import Image from "next/image";
import { Quote } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import { testimonials } from "../utils/data";

export default function Testimonial() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 400,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 2 },
      },
    ],
  };
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900">
          What <span className="text-orange-500">our customers</span> are saying
          about us
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At Rasyom, customer satisfaction is our ultimate goal. See what our
          clients have to say about the services we provided for their projects.
        </p>

        {/* Testimonials Carousel */}
        <div className="mt-12">
          <Slider {...settings}>
            {testimonials.map((t, index) => (
              <div key={index} className="px-4">
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={60}
                      height={60}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="ml-4 text-left">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {t.name}
                      </h3>
                      <p className="text-sm text-gray-600">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Quote className="w-6 h-6 text-orange-500 mb-2" />
                    <p className="text-gray-700 italic">
                      &quot;{t.feedback}&quot;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
