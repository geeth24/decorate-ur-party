'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';
import { motion } from 'framer-motion';
type Decoration = {
  title: string;
  description: string;
  image: string;
};

const decorations: Decoration[] = [
  {
    title: 'Birthday Decorations',
    description: 'Decorations for birthday parties.',
    image: '/bday.webp',
  },
  {
    title: 'Indian Pooja Decorations',
    description: 'Decorations for Indian pooja.',
    image: '/pooja.webp',
  },
  {
    title: 'Baby Shower Decorations',
    description: 'Decorations for baby showers.',
    image: '/baby.webp',
  },
  {
    title: 'Graduation Decorations',
    description: 'Decorations for graduation parties.',
    image: '/grad.webp',
  },
];

function Decorations() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
      },
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="flex w-full flex-col items-center justify-center py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-200px' }}
      >
        <motion.h1
          className="font-playfair text-3xl font-black tracking-tight text-primary-foreground"
          variants={itemVariants}
        >
          The Decorations We Do
        </motion.h1>
        <motion.p className="text-primary-foreground md:text-lg" variants={itemVariants}>
          Some of the best decorations you can find in the market.
        </motion.p>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {decorations.map((decoration) => (
            <motion.div key={decoration.title} className="h-full w-full" variants={itemVariants}>
              <Card key={decoration.title} className="h-full shadow-lg">
                <CardHeader>
                  <AspectRatio ratio={1}>
                    <Image
                      src={`/decors${decoration.image}`}
                      alt={decoration.title}
                      width={300}
                      height={300}
                    />
                  </AspectRatio>
                </CardHeader>
                <CardContent>
                  <CardTitle>{decoration.title}</CardTitle>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Decorations;
