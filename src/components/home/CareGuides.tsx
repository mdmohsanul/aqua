// components/home/CareGuides.tsx
import BlogCard from "@/components/blog/BlogCard";

const guides = [
  {
    title: "Beginner’s Guide to Aquascaping",
    excerpt:
      "Learn the basics of aquascaping, plant selection, and layout techniques to build stunning underwater landscapes.",
    image: "/blog/aquascaping-guide.jpg",
    slug: "beginners-guide-to-aquascaping",
  },
  {
    title: "How to Care for Freshwater Aquarium Plants",
    excerpt:
      "Essential tips on lighting, fertilization, and trimming to keep your aquatic plants healthy and vibrant.",
    image: "/blog/plant-care.jpg",
    slug: "freshwater-plant-care",
  },
  {
    title: "Common Aquarium Mistakes Beginners Make",
    excerpt:
      "Avoid these common mistakes that can harm your fish and plants when starting your aquarium journey.",
    image: "/blog/common-mistakes.jpg",
    slug: "common-aquarium-mistakes",
  },
];

export default function CareGuides() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Care Guides & Tips
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Learn how to care for your aquarium with expert guides
            designed for beginners and enthusiasts alike.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <BlogCard
              key={guide.slug}
              {...guide}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="text-sm font-medium underline"
          >
            View All Guides
          </a>
        </div>

      </div>
    </section>
  );
}
