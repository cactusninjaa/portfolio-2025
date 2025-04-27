import React from 'react';
import { motion } from 'framer-motion';
import Light from './Light';

export default function MountainAnimation() {
    const firstName = "Thomas";
    const lastName = "Sauvage";

    
return (
    <div className="relative w-full md:w-1/2 lg:w-1/3 h-full overflow-hidden border-3 border-black" >

            <motion.svg 
                className="absolute bottom-0 w-full z-9"
                viewBox="0 0 400 250"
                preserveAspectRatio="none"
            >
                <path d="M0 432.5V86.6791L272.133 0L430 68.6418V432.5H0Z" fill="#100E24"/>
            </motion.svg>
            <motion.svg 
                className="absolute bottom-0 w-full z-9"
                viewBox="0 0 400 285"
                preserveAspectRatio="none"
            >
                <path 
                    d="M180.756 26.36C121.944 74.9193 45.2465 100.921 -5.99965 120.896C-7.54735 121.412 -5.49951 132 65.5004 120.896C70.116 120.174 146.138 102.882 176.629 82C190.501 72.5 199.164 83 196.5 87C195.469 88.5498 158.146 117.96 155.501 125C151.222 136.389 153.001 158.138 166.311 154.99C170.5 154 166.827 142.592 176.629 137.426C186.431 132.261 187.463 137.943 207.067 123.479C226.671 109.014 235.442 100.232 238.021 93.5165C240.601 86.8008 244.23 87.5403 246.276 91.4501C251.951 102.298 273.618 133.81 284.968 134.327C286.688 134.499 289.302 133.604 286 128.644C281.873 122.445 275.166 105.398 275.682 99.7155C276.198 94.0331 279.809 99.1989 280.841 102.298C281.873 105.398 284.452 119.346 307.668 121.412C330.883 123.479 342.749 127.095 349.456 134.327C356.162 141.559 375.251 144.142 392.791 144.142C410.332 144.142 394.339 140.526 380.41 132.777C366.48 125.028 331.399 103.332 329.336 90.4169C329.336 83.7013 338 91.5 341.717 94.0331C350 99.5 397.434 127.611 435.611 127.611C473.788 127.611 449.025 106.948 438.707 102.298C404.141 96.0994 303.541 26.3599 281.357 10.8624C264.604 -0.84107 256.594 0.013894 250.919 0.013894C248.339 0.013894 242.974 0.117273 227.703 0.530543C208.615 1.04713 204.488 4.66325 180.756 26.36Z" 
                    fill="white"
                />
            </motion.svg>
            <div className="absolute w-full h-full z-9">
            <div className="absolute top-40 right-0 z-10">
                <Light />
            </div>
        </div>
            <div className="absolute -top-20 -right-20 w-72 aspect-1/1 bg-orange rounded-full z-1"></div>
            <div className="absolute top-30 z-1 uppercase flex text-3xl/8 font-medium gap-2 px-10">
                <div className="flex flex-col items-center overflow-hidden ">
                    {firstName.split("").map((letter, index) => (
                        <motion.h1
                            key={index}
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}  
                            transition={{ duration: 1, delay: index * 0.1 }}
                            style={{ display: "inline-block" }}
                        >
                        {letter}
                        </motion.h1>
                    ))}
                </div>
                <div className='flex flex-col pt-24 items-center justify-center overflow-hidden'>
                    {lastName.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}  
                            transition={{ duration: 1, delay: index * 0.05 }}
                            style={{ display: "inline-block" }}
                        >
                        {letter}
                        </motion.span>
                    ))}
                </div>
            </div>  
        </div>  
    );
}