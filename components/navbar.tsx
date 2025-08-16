'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';

const links: { name: string; href: string }[] = [
  { name: 'Services', href: '/#services' },
  { name: 'Events', href: '/#events' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact', href: '/#contact' },
];

function Navbar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed z-30 flex w-full items-center justify-between   px-6 py-4 transition-all duration-300 ${scroll ? 'bg-secondary text-primary shadow-md' : 'text-secondary'}`}
    >
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Decorate Ur Party"
          width={200}
          height={200}
          className="h-10 w-10"
        />
        <h1 className="font-playfair text-2xl font-bold">Decorate Ur Party</h1>
      </div>
      <div className="flex gap-4">
        <div className="hidden gap-4 md:flex">
          {links.map(({ name, href }) => (
            <Button asChild key={name} variant="ghost">
              <Link href={href}>{name}</Link>
            </Button>
          ))}
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-4" aria-label="Main navigation">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Decorate Ur Party"
                  width={200}
                  height={200}
                  className="h-16 w-16"
                />
                <h1 className="font-playfair text-2xl font-bold text-primary">Decorate Ur Party</h1>
              </div>
              <div className="mt-4 flex w-full flex-col gap-1">
                {links.map(({ name, href }) => (
                  <SheetClose asChild key={name}>
                    <Link href={href} className="text-primary rounded-md px-2 py-2 hover:bg-secondary">
                      {name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
