import React from 'react';
import { motion } from 'framer-motion';
import Wave from './Wave';
import DropAnimation from './DropAnimation';

export default function WaveAnimation() {

  return (
    <div className="relative w-full md:w-1/3 h-full overflow-hidden border-3 border-black" >
        <motion.svg 
            className="absolute bottom-0 w-full z-10"
            viewBox="0 0 300 60"
            preserveAspectRatio="none"
        >
            <Wave fillColor="var(--color-lightblue)"/>
        </motion.svg>
        <motion.svg 
            className="absolute bottom-0 w-full z-9"
            viewBox="0 0 350 100"
            preserveAspectRatio="none"
        >
            <Wave fillColor="var(--color-blue)"/>
        </motion.svg>
        <div className="absolute bottom-90 right-8 w-72 aspect-1/1 bg-orange rounded-full z-1"></div>
        <svg 
            className="absolute bottom-10 left-0 w-full z-8" 
            viewBox="0 0 400 700" 
            fill="none"
        >
            <path 
                d="M43.708 7.69459e-09C58.6375 -0.000201071 68.1675 3.94047 89.7168 28.8418C90.4812 29.725 91.5975 30.2502 92.7656 30.249C114.61 30.2266 150.562 29.8294 164.562 30.25C191.774 31.0678 212.76 55.3078 222.188 66.2227C234.165 80.0885 238.177 137.078 165.881 104.066C166.022 104.032 166.164 103.997 166.305 103.964C114.67 82.1691 56.0655 75.0637 0 77.4365V4.45117C4.64936 6.70516 7.93273 10.0564 8.49219 10.6279C9.29276 11.4456 12.4946 12.2628 14.8955 10.6279C17.2973 8.99225 27.6221 0.000409046 43.708 7.69459e-09Z" fill="#54779D"
            />
        </svg>
        <svg 
            className="absolute bottom-0 left-0 w-full  z-7" 
            viewBox="0 0 400 700" 
            fill="none"
        >
            <path 
                d="M224.061 450.318C-69.5132 311.29 89.8092 46.1663 170.684 27.5752C58.7798 -19.1956 -85.5418 1.67666 -167.371 38.7104V750.5H533V477.8H456.979C322.727 480.225 310.596 364.638 379.339 334.731C230.531 294.315 206.268 417.986 224.061 450.318Z" 
                fill="#100E24" 
            />
        </svg>
    </div>
  );
}