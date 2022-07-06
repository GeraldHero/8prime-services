import Image from 'next/image';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const MyBackToBack = () => {
  const { ref: leftRef, inView: leftInview } = useInView();

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (leftInview) {
      controls1.start({
        x: 0,
        transition: {
          type: 'spring',
          delay: 1,
          duration: 1.3,
          bounce: 0.1,
        },
      });

      controls2.start({
        x: 0,
        transition: {
          type: 'spring',
          delay: 1,
          duration: 1.3,
          bounce: 0.2,
        },
      });
    }
    if (!leftInview) {
      controls1.start({ x: '-100vw' });
      controls2.start({ x: '100vw' });
    }
  }, [leftInview]);

  return (
    <section className='my-16'>
      <div
        ref={leftRef}
        className='flex grid items-center content-center justify-center grid-cols-1 md:gap-8 mb-10 font-sans text-sm text-center sm:my-10 md:grid-cols-2 p-3 md:p-0'
      >
        <motion.div
          animate={controls1}
          className='order-2 md:order-1   mb-5 md:mb-0 lg:justify-end bb-text-box'
        >
          <h2 className='font-bold md:text-right '>
            Trust is the one of the things we build well.
            <p className='font-sans text-lg sm:text-xl lg:text-3xl text-dark'>
              Put your money on <span className='text-tahiti'>TRUSTED</span>{' '}
              hands.
            </p>
          </h2>
        </motion.div>
        <div className='order-1 md:order-2'>
          <div>
            <Image
              width={600}
              height={500}
              className='shadow-md rounded-t-xl md:rounded-bl-[16rem]'
              src='/images/bb-img-1.jpg'
              alt='bb1'
            />
          </div>
        </div>
        <div className='order-3'>
          <Image
            width={600}
            height={500}
            className='shadow-md rounded-t-xl md:rounded-r-[12rem]'
            src='/images/bb-img-2.jpeg'
            alt='bb2'
          />
        </div>
        <motion.div
          animate={controls2}
          className='order-4 bb-text-box mb-5 md:mb-0 lg:justify-start'
        >
          <h2 className='font-bold md:text-left mb-5'>
            <p className='font-sans text-lg sm:text-xl lg:text-3xl text-dark'>
              Your <span className='text-tahiti'>LIFE</span> is our priority.
            </p>
          </h2>
        </motion.div>
        <motion.div
          animate={controls1}
          className='order-6 md:order-5 bb-text-box mb-5 md:mb-0 lg:justify-end '
        >
          <h2 className='font-bold md:text-right '>
            <p className='font-sans text-lg sm:text-xl lg:text-3xl text-dark'>
              <span className='text-tahiti'>QUALITY</span> is a must.
            </p>
          </h2>
        </motion.div>
        <div className='order-5 rounded-t-xl md:order-6 '>
          <Image
            width={600}
            height={500}
            className='shadow-md md:rounded-tl-[16rem]'
            src='/images/bb-img-3.jpeg'
            alt='bb3'
          />
        </div>
      </div>
    </section>
  );
};

export default MyBackToBack;
//
