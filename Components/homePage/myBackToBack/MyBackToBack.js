import Image from 'next/image';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const MyBackToBack = () => {
  const { ref: firstRef, inView: firstInView } = useInView();
  const { ref: secondRef, inView: secondInView } = useInView();
  const { ref: thirdRef, inView: thirdInView } = useInView();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
        delay: 0.3,
      },
    },
  };

  const childContainer = {
    hidden: { x: 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const childContainer2 = {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const imageContainerRight = {
    hidden: { opacity: 0, x: '100vw' },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        stiffness: 100,
      },
    },
  };

  const imageContainerLeft = {
    hidden: { opacity: 0, x: '-100vw' },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        stiffness: 100,
      },
    },
  };

  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  useEffect(() => {
    firstInView ? animation.start('show') : animation.start('hidden');
    secondInView ? animation2.start('show') : animation2.start('hidden');
    thirdInView ? animation3.start('show') : animation3.start('hidden');
  }, [
    firstInView,
    secondInView,
    thirdInView,
    animation,
    animation2,
    animation3,
  ]);

  return (
    <motion.section className='my-16'>
      <div className='flex grid items-center content-center justify-center grid-cols-1 md:gap-8 mb-10 font-sans text-sm text-center sm:my-10 md:grid-cols-2 p-3 md:p-0'>
        <motion.div
          ref={firstRef}
          className='order-2 md:order-1   mb-5 md:mb-0 lg:justify-end bb-text-box'
        >
          <motion.h2
            variants={container}
            animate={animation}
            initial='hidden'
            className='font-bold md:text-right '
          >
            Trust is the one of the things we build well.
            <motion.p
              variants={childContainer}
              animate={animation}
              initial='hidden'
              className='font-sans text-lg sm:text-xl lg:text-3xl text-dark'
            >
              Put your money on <span className='text-tahiti'>TRUSTED</span>{' '}
              hands.
            </motion.p>
          </motion.h2>
        </motion.div>
        <div className='order-1 md:order-2'>
          <motion.div
            variants={imageContainerRight}
            initial='hidden'
            animate={animation}
          >
            <Image
              width={800}
              height={600}
              className='shadow-md rounded-t-xl md:rounded-bl-[16rem]'
              src='/images/bb-img-1.jpg'
              alt='bb1'
            />
          </motion.div>
        </div>

        <div className='order-3'>
          <motion.div
            variants={imageContainerLeft}
            initial='hidden'
            animate={animation2}
          >
            <Image
              width={800}
              height={600}
              className='shadow-md rounded-t-xl md:rounded-r-[12rem]'
              src='/images/bb-img-2.jpeg'
              alt='bb2'
            />
          </motion.div>
        </div>

        <div
          ref={secondRef}
          className='order-4 bb-text-box mb-5 md:mb-0 lg:justify-start'
        >
          <motion.h2
            variants={container}
            animate={animation2}
            initial='hidden'
            className='font-bold md:text-left mb-5'
          >
            <motion.p
              variants={childContainer2}
              animate={animation2}
              initial='hidden'
              className='font-sans text-lg sm:text-xl lg:text-3xl text-dark'
            >
              Your <span className='text-tahiti'>LIFE</span> is our priority.
            </motion.p>
            We're not just building a house, We're building homes.
          </motion.h2>
        </div>
        <div
          ref={thirdRef}
          className='order-6 md:order-5 bb-text-box mb-5 md:mb-0 lg:justify-end '
        >
          <motion.h2
            variants={container}
            initial='hidden'
            animate={animation3}
            className='font-bold md:text-right '
          >
            Our profession, business and career is on the line.
            <motion.p
              variants={childContainer}
              animate={animation3}
              initial='hidden'
              className='font-sans text-lg sm:text-xl lg:text-3xl text-dark'
            >
              We put <span className='text-tahiti'>QUALITY</span> first.
            </motion.p>
          </motion.h2>
        </div>
        <div className='order-5 rounded-t-xl md:order-6 '>
          <motion.div
            variants={imageContainerRight}
            initial='hidden'
            animate={animation3}
          >
            <Image
              width={800}
              height={600}
              className='shadow-md md:rounded-tl-[16rem]'
              src='/images/bb-img-3.jpeg'
              alt='bb3'
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MyBackToBack;
//
