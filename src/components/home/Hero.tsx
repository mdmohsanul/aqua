// components/home/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      
      {/* Background Image */}
      <Image
        src="/images/hero-aquarium.jpg"
        alt="Aquarium plants and fish"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Build Your Dream Aquarium
            </h1>

            <p className="mt-4 text-base text-white/90 md:text-lg">
              Premium aquatic plants, fish, and accessories curated for
              stunning underwater landscapes.
            </p>

            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/shop">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
