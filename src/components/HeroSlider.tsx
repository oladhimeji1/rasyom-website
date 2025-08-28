"use client";

import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const heroSlides = [
  {
    id: 1,
    bg: "/assets/hero/slider_bg1.jpg",
    tagline: "Building Tomorrow, Today",
    heading: (
      <>
        We <span className="font-bold">construct roads</span> that connect{" "}
        <span className="font-bold">communities</span>
      </>
    ),
  },
  {
    id: 2,
    bg: "/assets/hero/slider-construct-bg2.jpg",
    tagline: "Engineering with Precision",
    heading: (
      <>
        Strong <span className="font-bold">bridges</span> for{" "}
        <span className="font-bold">generations</span> to come
      </>
    ),
  },
  {
    id: 3,
    bg: "/assets/hero/slider-construct-bg3.jpg",
    tagline: "Innovative. Reliable. Trusted.",
    heading: (
      <>
        Creating <span className="font-bold">modern buildings</span> that
        inspire <span className="font-bold">progress</span>
      </>
    ),
  },
];

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
        {heroSlides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-screen overflow-hidden"
          >
            {/* Background image with next/image */}
            <Image
              src={slide.bg}
              alt={slide.tagline}
              fill
              priority
              className="object-cover w-full h-full"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center flex-col h-full text-center text-white px-4">
              <h3 className="uppercase text-md font-medium mb-6 text-zinc-200 tracking-wide">
                {slide.tagline}
              </h3>
              <h1 className="text-4xl leading-snug max-w-4xl md:text-7xl font-medium mb-6 drop-shadow-lg">
                {slide.heading}
              </h1>
              <Link
                href="/services"
                className="inline-block mt-10 bg-[rgb(243,92,39)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#363636] transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
