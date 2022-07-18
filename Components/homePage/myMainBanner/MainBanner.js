import Image from 'next/image';
import { motion } from 'framer-motion';
export default function MainBanner() {
  const mainText = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.8 },
    },
  };

  const childText = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.8 },
    },
  };

  return (
    <section className='relative grid sm:grid-cols-2 justify-center mb-32 md:mb-2 md:mt-8   items-center '>
      <div
        className='absolute sm:rounded-lg 
        sm:shadow-none inset-x-0 shadow-xl bottom-[-30%] bg-white w-3/4 mx-auto  rounded-lg rounded-t-none sm:left-auto sm:bottom-auto sm:w-auto z-20  sm:bg-transparent sm:relative p-8 lg:p-24 2xl:pl-48 text-left'
      >
        <motion.h1
          variants={mainText}
          initial='hidden'
          animate='show'
          className='text-2xl lg:text-5xl font-mono font-bold'
        >
          <span className='text-tahiti uppercase'>Build</span> Your Dream
          <br /> House With Us.
        </motion.h1>
        <motion.p
          variants={childText}
          initial='hidden'
          animate='show'
          className=' text-xs lg:text-lg mt-4'
        >
          With an unwavering focus on quality, 8Prime Construction provides
          general construction, project management, estimating, and skilled
          craftsmenship to exceed expectations on every job. And, we do this in
          every industry we serve. Our sustainable construction practices make
          8Prime an easy to work with - and easy to trust - 8Prime Construction
          and Engineering Services.
        </motion.p>
      </div>
      <div className='z-10 flex justify-center'>
        <Image
          src='/images/main-banner-1.jpg'
          alt='eight prime banner '
          className='shadow-xl  md:rounded-tl-[6rem] '
          width={800}
          height={600}
        />
      </div>
    </section>
  );
}
