import React from 'react';
import { motion } from 'framer-motion';
import WaveAnimation from './animations/WaveAnimation';
// import MountainAnimation from './animations/MountainAnimation';
// import CircleAnimation from './animations/CircleAnimation';

export default function AnimatedHero() {
  return (
    <section className="flex flex-col md:flex-row w-full h-screen items-center justify-center bg-gray-100 p-12 gap-12">
        <WaveAnimation />
        <WaveAnimation />
        <WaveAnimation />

      {/* <MountainAnimation />
      <CircleAnimation /> */}
    </section>
  );
}