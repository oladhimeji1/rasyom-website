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
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
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
                <div className="bg-[#ccc4c433] p-8 rounded-2xl border border-gray-100 h-62 flex flex-col justify-between">
                  {/* Quote icon */}
                  <Quote className="w-6 h-6 text-blue-500 mb-4" />

                  {/* Feedback */}
                  <p className="text-gray-800 text-lg font-medium leading-relaxed">
                    {t.feedback}
                  </p>

                  {/* Bottom section */}
                  <div className="flex items-center gap-3 mt-6">
                    <Image
                      width={40}
                      height={40}
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-left text-gray-900">
                        {t.name}
                      </h3>
                      <p className="text-xs text-left text-gray-500">
                        {t.role}
                      </p>
                    </div>
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
