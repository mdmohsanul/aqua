'use client'

import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Aquatic Plants",
    image: "/categories/plants.jpg",
    href: "/shop/plants",
  },
  {
    title: "Aquarium Fish",
    image: "/categories/fish.jpg",
    href: "/shop/fish",
  },
  {
    title: "Accessories",
    image: "/categories/accessories.jpg",
    href: "/shop/accessories",
  },
  {
    title: "Aquariums",
    image: "/categories/aquariums.jpg",
    href: "/shop/aquariums",
  },
  {
    title: "Food & Care",
    image: "/categories/food.jpg",
    href: "/shop/food",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-2 text-muted-foreground">
            Explore our wide range of aquarium products
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              {...category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
