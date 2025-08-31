"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assets/clients/client-1.png",
  "/assets/clients/client-2.png",
  "/assets/clients/client-3.png",
  "/assets/clients/client-4.png",
];

export default function HomeClient() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg text-[#9A0200] font-bold mb-2 uppercase">
          Our Valued Clients
        </h3>
        <h2 className="text-[#030F27] text-4xl mb-8 max-w-3xl mx-auto">
          Have a view of some of our{" "}
          <span className="font-semibold">formidable clients</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At Rasyom Consults, we pride ourselves on delivering exceptional
          services and results to our clients. Here is look at some of the
          companies we have had the pleasure of working with.
        </p>

        <div className="mt-15">
          <Slider {...settings}>
            {images.map((src, idx) => (
              <div key={idx} className="px-2">
                <div className="relative w-30 h-16 mx-auto">
                  <Image
                    src={src}
                    alt={`Client ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
