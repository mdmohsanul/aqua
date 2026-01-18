// components/product/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  slug: string;
}

export default function ProductCard({
  title,
  price,
  image,
  slug,
}: ProductCardProps) {
  return (
    <div className="group rounded-xl border bg-white p-4 transition hover:shadow-md">
      
      {/* Image */}
      <Link href={`/product/${slug}`}>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <h3 className="line-clamp-2 text-sm font-medium">
          {title}
        </h3>

        <p className="text-lg font-semibold">
          ₹{price.toLocaleString()}
        </p>

        <Button asChild className="mt-2 w-full" size="sm">
          <Link href={`/product/${slug}`}>View Product</Link>
        </Button>
      </div>
    </div>
  );
}
