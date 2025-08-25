import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-xl mb-8 text-indigo-100">
              Latest insights and updates from the construction industry
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Top 10 Construction Trends for 2024",
                image: "/assets/blog/single_blog_1.png",
                excerpt:
                  "Discover the latest trends shaping the construction industry in 2024, from sustainable materials to smart building technologies.",
                date: "March 15, 2024",
                author: "John Smith",
                category: "Industry Trends",
              },
              {
                title: "Sustainable Construction Practices",
                image: "/assets/blog/single_blog_2.png",
                excerpt:
                  "Learn how sustainable construction practices are revolutionizing the industry and reducing environmental impact.",
                date: "March 10, 2024",
                author: "Sarah Johnson",
                category: "Sustainability",
              },
              {
                title: "Smart Building Technologies",
                image: "/assets/blog/single_blog_3.png",
                excerpt:
                  "Explore how smart building technologies are transforming modern construction projects and improving efficiency.",
                date: "March 5, 2024",
                author: "Mike Davis",
                category: "Technology",
              },
              {
                title: "Construction Safety Best Practices",
                image: "/assets/blog/single_blog_4.png",
                excerpt:
                  "Essential safety practices every construction site should implement to protect workers and ensure compliance.",
                date: "February 28, 2024",
                author: "Emily Wilson",
                category: "Safety",
              },
              {
                title: "Cost-Effective Construction Strategies",
                image: "/assets/blog/single_blog_5.png",
                excerpt:
                  "Learn proven strategies to reduce construction costs without compromising on quality or safety.",
                date: "February 20, 2024",
                author: "David Brown",
                category: "Cost Management",
              },
              {
                title: "Future of Construction Materials",
                image: "/assets/blog/single_blog_1.png",
                excerpt:
                  "Discover innovative construction materials that are changing the way we build for the future.",
                date: "February 15, 2024",
                author: "Lisa Anderson",
                category: "Innovation",
              },
            ].map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 hover:text-indigo-600">
                    <Link href={`/blog/${index + 1}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      By {post.author}
                    </span>
                    <Link
                      href={`/blog/${index + 1}`}
                      className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
