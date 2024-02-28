import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className='items-center flex justify-center mt-2'>
      <MotionLink
        href="/"
        className='bg-dark text-light flex items-center justify-center w-16 h-16 rounded-full text-2xl border border-solid border-transparent font-bold dark:border-light'
        whileHover={{
          backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253, 29, 29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
          transition: { duration: 1, repeat: Infinity }
        }}
      >
        HS
      </MotionLink>
    </div>
  );
}
export default Logo;
