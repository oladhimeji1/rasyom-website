"use client";

import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const posts = [
  {
    title: "Monday Inspiration: Beautiful and Creative Living Rooms",
    date: "Aug 26, 2025",
    excerpt:
      "Explore this simple friendly decor idea to turn around your home space. NYC style with modern taste.",
    image: "/assets/blog/blog4-558x410.jpg",
  },
  {
    title: "Things You Can Do to Refresh Your Home This Weekend",
    date: "Aug 25, 2025",
    excerpt:
      "In just a weekend, here’s how to give your space a refresh using affordable tricks and smart layout ideas.",
    image: "/assets/blog/blog5-558x410.jpg",
  },
  {
    title: "Decorating On A Budget And How To Plan Kids’ Rooms",
    date: "Aug 24, 2025",
    excerpt:
      "Tips for decorating family-friendly and kid-safe rooms without going over budget.",
    image: "/assets/blog/blog6-558x410.jpg",
  },
];

const categories = [
  "Architecture",
  "Construction",
  "Decoration",
  "Furniture",
  "Interior",
];

const recentPosts = [
  {
    title: "Things You Can Do to Refresh...",
    image: "/assets/blog/single_blog_1.png",
  },
  {
    title: "Godstime is Really Write NextJS without Experience 😂😂",
    image: "/assets/blog/single_blog_3.png",
  },
];

const tags = ["Modern", "Office", "Design", "Tips", "Ideas"];

export default function BlogPage() {
  return (
    <>
      <section className="relative px-8 mt-15 w-full bg-[url('/assets/gallery/title-bg1.jpg')] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blogs</h1>
            <p className="text-xl mb-8 text-orange-100">
              Stay updated with our latest blogs and news
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 mt-20 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Blog Posts */}
          <div className="lg:col-span-2 space-y-8">
            {posts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full object-cover h-64"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-orange-500 cursor-pointer mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <Link
                    href="#"
                    className="text-orange-500 text-sm font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <div className="bg-white p-4 border border-gray-200 rounded-md">
              <div className="flex items-center gap-2">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full border-none focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-4 border border-gray-200 rounded-md">
              <h4 className="font-semibold mb-3">Categories</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    className="hover:text-orange-500 cursor-pointer"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-4 border border-gray-200 rounded-md">
              <h4 className="font-semibold mb-3">Recent Posts</h4>
              <ul className="space-y-3">
                {recentPosts.map((post, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={60}
                      height={60}
                      className="rounded-sm object-cover"
                    />
                    <span className="hover:text-orange-500 cursor-pointer">
                      {post.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white p-4 border border-gray-200 rounded-md">
              <h4 className="font-semibold mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2 text-sm">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-orange-100 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Image */}
            <div className="bg-white p-4 border border-gray-200 rounded-md">
              <Image
                src="/images/cta-banner.jpg"
                alt="Free Consultation"
                width={300}
                height={200}
                className="rounded"
              />
            </div>

            {/* Newsletter */}
            {/* <div className="bg-white p-4 border border-gray-200 rounded-md">
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-2"
              />
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded text-sm font-medium">
                Subscribe
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
