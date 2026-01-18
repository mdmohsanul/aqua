// app/(public)/cart/page.tsx
import CartItem from "@/components/cart/CartItem";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const cartItems = [
  {
    title: "Java Moss Aquatic Plant",
    price: 499,
    quantity: 2,
    image: "/products/java-moss.jpg",
    slug: "java-moss",
  },
  {
    title: "Aquarium LED Light 60cm",
    price: 3499,
    quantity: 1,
    image: "/products/led-light.jpg",
    slug: "aquarium-led-light",
  },
];

export default function CartPage() {
  const isEmpty = cartItems.length === 0;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold md:text-4xl">
            Shopping Cart
          </h1>
          <p className="mt-2 text-muted-foreground">
            Review your items before checkout
          </p>
        </div>

        {/* Empty State */}
        {isEmpty && (
          <div className="flex flex-col items-center justify-center rounded-xl border py-20 text-center">
            <p className="text-lg font-medium">
              Your cart is empty
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Add items to your cart to proceed.
            </p>

            <Link
              href="/shop"
              className="mt-6 text-sm font-medium underline"
            >
              Continue Shopping
            </Link>
          </div>
        )}

        {/* Cart Content */}
        {!isEmpty && (
          <div className="grid gap-10 lg:grid-cols-3">

            {/* Items */}
            <div className="lg:col-span-2 rounded-xl border bg-white p-6">
              {cartItems.map((item) => (
                <CartItem
                  key={item.slug}
                  {...item}
                />
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit rounded-xl border bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">
                Order Summary
              </h2>

              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <div className="mt-2 flex justify-between text-sm">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>

              <div className="mt-4 flex justify-between border-t pt-4 text-base font-semibold">
                <span>Total</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <Button className="mt-6 w-full" size="lg">
                Proceed to Checkout
              </Button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
