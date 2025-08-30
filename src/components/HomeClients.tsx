"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

const images = [
  "/assets/clients/client-1.png",
  "/assets/clients/client-2.png",
  "/assets/clients/client-3.png",
  "/assets/clients/client-4.png",
];
export default function HomeClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
      scrollAmount += 1;
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg text-[rgb(243,92,39)] font-bold mb-2 uppercase">
          Our Valued Clients
        </h3>
        <h2 className="text-[#030F27] text-4xl mb-8 max-w-3xl mx-auto">
          Have a view of some of our{" "}
          <span className="text-orange-500">formidable clients</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At Rasyom Consults, we pride ourselves on delivering exceptional
          services and results to our clients. Here is look at some of the
          companies we have had the pleasure of working with.
        </p>

        <div
          ref={containerRef}
          className="flex mt-15 animate-slide w-max space-x-6"
          style={{ scrollBehavior: "auto" }}
        >
          {[...images, ...images].map((src, idx) => (
            <div key={idx} className="relative w-40 h-20 flex-shrink-0">
              <Image
                src={src}
                alt={`Construction work ${idx}`}
                fill
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
