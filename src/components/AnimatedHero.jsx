import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import WaveAnimation from './animations/WaveAnimation';
import MountainAnimation from './animations/MountainAnimation';
import ShapeAnimation from './animations/ShapeAnimation';

export default function AnimatedHero() {
    return (
        <section
            className="flex flex-row w-full h-screen items-center justify-center p-4 md:p-8 md:gap-8 overflow-hidden"
        >
        <WaveAnimation />
        <MountainAnimation />
        <ShapeAnimation />
        </section>
    );
}
