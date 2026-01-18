// components/shop/ProductsGrid.tsx
import ProductCard from "@/components/product/ProductCard";

const products = [
  {
    title: "Java Moss Aquatic Plant",
    price: 499,
    image: "/products/java-moss.jpg",
    slug: "java-moss",
  },
  {
    title: "Aquarium LED Light",
    price: 3499,
    image: "/products/led-light.jpg",
    slug: "aquarium-led-light",
  },
  {
    title: "External Canister Filter",
    price: 6899,
    image: "/products/filter.jpg",
    slug: "external-canister-filter",
  },
];

export default function ProductsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} {...product} />
      ))}
    </div>
  );
}
