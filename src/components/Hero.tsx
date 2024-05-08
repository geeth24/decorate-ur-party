'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { AuroraBackground } from './ui/aurora-background';

function Hero() {
  // Animation variants for the container and items
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
    <div className="relative flex h-[calc(100vh-64px)] w-full flex-col items-center justify-center px-10 py-2">
      <Image
        src="/hero-bg.jpg"
        alt="hero"
        layout="fill"
        objectFit="cover"
        className="absolute z-[-1] h-full w-full object-cover object-center"
      />
      <div className="absolute z-0 h-full w-full bg-black/50" />
      <AuroraBackground className="z-10 h-full w-full">
        <div className="h-full w-full" />
      </AuroraBackground>
      <motion.div
        className="z-20  flex w-full items-start gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex max-w-3xl flex-col text-left">
          <motion.h1
            className="text-4xl font-black tracking-tight text-secondary md:text-6xl"
            variants={itemVariants}
          >
            Make Every <br />
            <span className="text-primary"> Moment Unforgettable </span>
          </motion.h1>
          <motion.p
            className="mt-2 text-base font-light text-muted md:text-lg"
            variants={itemVariants}
          >
            With a dedicated team spread across New Jersey and New York, we specialize in turning
            your celebrations into memorable milestones. From intimate gatherings to grand affairs,
            trust us to infuse life into your dreams. Ready to make your next event the most
            memorable one yet?
          </motion.p>
          <motion.div
            className="mt-4 flex rounded-md bg-primary/50 p-4 backdrop-blur-xl"
            variants={itemVariants}
          >
            <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex flex-col items-center gap-2 md:flex-row">
                <Button size="icon">
                  <Phone className="h-6 w-6 text-secondary" />
                </Button>
                <div className="ml-2 flex flex-col text-center md:text-left">
                  <h1 className="ml-2 font-semibold tracking-tight text-secondary">
                    Check out your options
                  </h1>
                  <p className="ml-2 font-light text-muted">
                    Or Call us at{' '}
                    <Link href="+1 (732) 491-1541" className="underline">
                      +1 (732) 491-1541
                    </Link>
                  </p>
                </div>
              </div>
              <Button variant="secondary">See More</Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
