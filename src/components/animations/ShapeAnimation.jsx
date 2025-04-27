import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedWaves() {
  // Animations subtiles pour chaque vague
  const wave1Animation = {
    animate: {
      y: [0, -8, 0],
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut"
      }
    }
  };

  const wave2Animation = {
    animate: {
      y: [0, -12, 0],
      transition: {
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

//   const wave3Animation = {
//     animate: {
//       y: [0, -3, 0],
//       transition: {
//         repeat: Infinity,
//         duration: 6,
//         ease: "easeInOut",
//         delay: 1
//       }
//     }
//   };

  // Le cercle rouge en haut
  const sunAnimation = {
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        repeat: Infinity,
        duration: 8,
        ease: "easeInOut"
      }
    }
  };

return (
  <div className="relative hidden lg:block lg:w-1/3 h-full overflow-hidden lg:border-3 border-black" >

      {/* Cercle rouge avec contour bleu en haut */}

      <motion.div 
        className="absolute top-20 right-8 w-72 aspect-1/1 bg-orange rounded-full"
        variants={sunAnimation}
        animate="animate"
      />
      
      <motion.svg 
        className="absolute bottom-0 left-0 w-full" 
        viewBox="0 0 288 305" 
        preserveAspectRatio="none"
        variants={wave1Animation}
        animate="animate"
      >
        <path 
          d="M155.5 90.5292C197.1 16.1292 260.833 -0.804512 287.5 0.0288216L287.5 307.001H-0.499817C-0.500227 270.001 -0.499817 231 -0.499837 199.5C35.0002 189 121 148.529 155.5 90.5292Z" 
          fill="#7FAAB9"
        />
      </motion.svg>
      
      <motion.svg 
        className="absolute bottom-0 left-0 w-full" 
        viewBox="0 0 430 448" 
        preserveAspectRatio="none"
        variants={wave2Animation}
        animate="animate"
      >
        <path 
          d="M90 422C29.5 359.5 22.5 198.5 -5.5 191.5L-0.5 453.5L432.5 449V0C157 2.5 252 256.5 140.5 420C119.308 451.075 97.6667 434.167 90 422Z" 
          fill="#54779D"
        />
      </motion.svg>
      
    
      <motion.svg 
        className="absolute bottom-0 left-0 w-full" 
        viewBox="0 0 430 478" 
        preserveAspectRatio="none"
        // variants={wave3Animation}
        // animate="animate"
      >
        <path 
          d="M107 452.5C31.8 455.3 -4.5 381.833 -11.5 345.5L-1 478H431.5V0C410.5 -7.73223e-05 369.428 120.711 364 139.5C357.5 162 336.5 244.5 298 267C254.348 292.51 240.041 323.439 219 366.5C197.5 410.5 170 448.5 107 452.5Z" 
          fill="#100E24"
        />
      </motion.svg>
    </div>
  );
}