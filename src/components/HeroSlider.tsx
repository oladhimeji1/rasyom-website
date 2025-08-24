'use client';

import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../../public/assets/hero/h1_hero1.png';
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
    waitForAnimate: false
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="flex gap-6 items-center opacity-90">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Experienced Construction Solution 2
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Questions explained agreeable preferred strangers too him her son. 
              There are many variations of passages.
            </p>
            <Link 
              href="/services" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Our Services
            </Link>
          </div>
          <div className="relative h-[400px]">
            <Image
              src={heroImg}
              alt="Construction"
              className="rounded-lg shadow-2xl h-full object-cover"
              fill
            />
          </div>
        </div>
        <div className="flex gap-6 items-center opacity-90">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Experienced Construction Solution
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Questions explained agreeable preferred strangers too him her son. 
              There are many variations of passages.
            </p>
            <Link 
              href="/services" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Our Services
            </Link>
          </div>
          <div className="relative h-[400px]">
            <Image
              src={heroImg}
              alt="Construction"
              className="rounded-lg shadow-2xl h-full object-cover"
              fill
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}
