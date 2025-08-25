"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSlider() {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <div className="slider-container w-full">
      <Slider {...settings}>
        <div className="relative h-96 md:h-[600px] bg-[url('/assets/hero/slider_bg1.jpg')] bg-no-repeat bg-cover flex items-center justify-center text-center px-4">
          <div className="flex items-center justify-center flex-col h-full">
            <h3 className="uppercase text-md text-zinc-300 font-medium mb-6">
              Think Safety. Work Safely
            </h3>
            <h1 className="text-4xl leading-20 max-w-4xl md:text-7xl font-medium mb-6">
              Change the <span className="font-bold">Construction</span>{" "}
              Industry for the better
            </h1>

            <Link
              href="/services"
              className="inline-block mt-10 bg-[rgb(243,92,39)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#363636] transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
        {/* <div className="relative h-96 md:h-[600px] bg-[url('/assets/hero/slider-construct-bg2.jpg')] bg-center bg-no-repeat bg-cover flex items-center justify-center text-center px-4">
          <div className="flex items-center justify-center flex-col h-full">
            <h3 className="uppercase text-md font-medium mb-6">
              Think Safety. Work Safely
            </h3>
            <h1 className="text-4xl leading-20 max-w-4xl md:text-7xl font-medium mb-6">
              Trust <span className="font-bold">Professionals</span> world class{" "}
              <span className="font-bold">specialists.</span>
            </h1>

            <Link
              href="/services"
              className="inline-block bg-[rgb(243,92,39)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#363636] transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
        <div className="relative h-96 md:h-[600px] bg-[url('/assets/hero/slider-construct-bg3.jpg')] bg-center bg-no-repeat bg-cover flex items-center justify-center text-center px-4">
          <div className="flex items-center justify-center flex-col h-full">
            <h3 className="uppercase text-md font-medium mb-6">
              Think Safety. Work Safely
            </h3>
            <h1 className="text-4xl leading-20 max-w-4xl md:text-7xl font-medium mb-6">
              We can <span className="font-bold">Produce</span> what your
              business <span className="font-bold">needs.</span>
            </h1>

            <Link
              href="/services"
              className="inline-block bg-[rgb(243,92,39)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#363636] transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div> */}
      </Slider>
    </div>
  );
}
