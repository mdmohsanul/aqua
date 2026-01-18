
"use client";

import Link from "next/link";
import { Search, User, Heart, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {

    
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center text-lg font-semibold tracking-wide"
        >
          AQUA
        </Link>

        {/* Center: Search (Desktop only) */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-9"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-5">
          <Link href='/login'>
            <User className="h-5 w-5" />
         </Link>

           <Link href='/wishlist'>
            <Heart className="h-5 w-5" />
          </Link>

         <Link href='/cart'>
            <ShoppingCart className="h-5 w-5" />
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6">
                
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-9" />
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-4 text-sm">
                  <Link href="/shop">Shop</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/about">About</Link>
                  <Link href="/contact">Contact</Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
