"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useState, useEffect } from "react";

import { testimonials } from "../utils/data";

export default function Testimonial() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Dynamically adjust based on screen width
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow,
    speed: 400,
    slidesToScroll: 1,
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
              <div key={index} className="px-4 h-52">
                <div className="bg-gray-200 px-6 pb-6 pt-4 rounded-xl transition h-full flex flex-col justify-between text-left">
                  {/* Quote + Feedback */}
                  <div>
                    <Quote className="w-6 h-6 text-orange-500 mb-4" />
                    <p className="text-gray-700 leading-relaxed">
                      {t.feedback}
                    </p>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center mt-6">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {t.name}
                      </h3>
                      <p className="text-xs text-gray-500">{t.role}</p>
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
