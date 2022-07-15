import MyServicesItems from './MyServicesItems';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const newServicesData = [
  {
    icon: 'fa-solid fa-pen-ruler',
    iconBgColor: 'bg-dark',
    title: 'ARCHITECTURE',
    description: `Include concept design development, preparation of construction
    documents, and construction administration.`,
  },
  {
    icon: 'fa-solid fa-house-chimney-window',
    iconBgColor: 'bg-secondary',
    title: 'STRUCTURAL',
    description: `We design and analyze the roof, foundation, basement, walls, ceilings, or floors of a home.`,
  },
  {
    icon: 'fa-solid fa-faucet',
    iconBgColor: 'bg-tahiti',
    title: 'PLUMBING',
    description: `Professional involved with the planning, design and installation of building systems related to plumbing, including water supply and drainage.`,
  },
  {
    icon: 'fa-solid fa-hand-holding-droplet',
    iconBgColor: 'bg-background',
    title: 'SANITARY',
    description: `The application of engineering methods to improve sanitation of human communities, primarily by providing the removal and disposal of human waste.`,
  },
  {
    icon: 'fa-solid fa-bolt',
    iconBgColor: 'bg-yellow ',
    title: 'ELECTRICAL',
    description: `The part of the installation from the utility point of connection to the first over-current device, usually the main circuit breaker.`,
  },
];

export default function MyServices() {
  const { ref: serviceRef, inView } = useInView();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: [0.1, 1],
      transition: {
        delay: 0.2,
        duration: 0.75,
        type: 'spring',
        bounce: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start('show');
    }
    if (!inView) {
      animation.start('hidden');
    }
  }, [inView, animation]);

  return (
    <section ref={serviceRef} className='my-20 w-full '>
      <h2 className='p-4 pl-12 mt-5 font-mono font-semibold   rounded w-80 sm:w-96 sm:text-left text-md sm:text-xl mix-blend-hard-light'>
        We provide the best services:
      </h2>
      <motion.div
        variants={container}
        initial='hidden'
        animate={animation}
        className='grid grid-cols-1 gap-2 justify-items-center align-center sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-5'
      >
        {/* card starting - will invoke card from MyServicesItem and pass the data */}
        <MyServicesItems servicesData={newServicesData || []} />
        {/* /card end */}
      </motion.div>
      <div className='relative flex py-5 items-center'>
        <div className='flex-grow border-t border-gray-400'></div>
        <span className='flex-shrink mx-4 text-gray-400'>
          <h2 className='text-2xl font-bold tracking-widest text-tahiti'>
            8<span className='font-mono text-primary'>Prime</span>
          </h2>
        </span>
        <div className='flex-grow border-t border-gray-400'></div>
      </div>
    </section>
  );
}
