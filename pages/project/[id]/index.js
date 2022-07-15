import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProjectsData from '../../../Components/homePage/myProjects/data';

const Project = () => {
  const Route = useRouter();
  const { id } = Route.query;
  let projectData = [];
  projectData = ProjectsData.filter((data) => {
    if (data.id == id) {
      return data;
    }
  });

  const variantText = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.8,
        stiffness: 100,
        staggerChildren: 0.3,
      },
    },
  };
  const listText = {
    hidden: { opacity: 0, x: 100 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        delay: 1.1,
        duration: 0.8,
        stiffness: 100,
      },
    },
  };

  return projectData.map((item, idx) => (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className='m-6 md:m-16 p-4 md:p-10 shadow-lg rounded-lg '
      key={idx}
    >
      <Link href='/'>
        <motion.a
          whileTap={{ scale: [1.2, 1, 0.9, 1.2, 1] }}
          whileHover={{ scale: 1.1 }}
          className='ml-4 hover:cursor-pointer	 hover:bg-dark hover:text-light font-bold p-3 rounded-lg'
        >
          Back
        </motion.a>
      </Link>
      | Project:
      <div className='grid grid-cols-1 lg:grid-cols-2 align-center items-center gap-6 md:gap-8 p-8'>
        <motion.div
          variants={variantText}
          animate='show'
          initial='hidden'
          className='text-gray-700 text-sm md:text-base font-mono space-y-2 md:pr-8 font-semibold text-left md:text-right'
        >
          <motion.h1
            variants={listText}
            animate='show'
            initial='hidden'
            className='w-full text-center text-lg md:text-2xl font-bold text-gray-400 m-2 p-2 md:p-5'
          >
            {item.title}
          </motion.h1>

          <p className='my-5 text font-semibold font-roboto'>
            {item.description}
          </p>

          <ul className='text-sm font-normal  '>
            <li>
              Bedrooms: <span className='font-bold'>{item.bedrooms}</span>
            </li>
            <li>
              Bathrooms: <span className='font-bold'>{item.cr}</span>
            </li>
            <li>
              Square Meter: <span className='font-bold'>{item.sq} sqm</span>
            </li>
          </ul>
          <p>{item.listTitle}</p>
          <ul className='font-normal text-gray-600'>
            {item.area.map((i, idx) => {
              return <li key={idx}>{i}</li>;
            })}
          </ul>
          <p className=' text-sm text-gray-600'>&#8369; {item.price} only</p>
          <div className='w-full '>
            <Link href='/contact' className='p-2'>
              <motion.a
                whileTap={{ scale: [1.2, 1, 0.9, 1.2, 1] }}
                whileHover={{ scale: 1.05 }}
                className='my-btn text-center  mx-auto hover:cursor-pointer w-6/12'
              >
                <button>Contact Us</button>
              </motion.a>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, stiffness: 100 }}
          className='flex flex-rows   items-center  my-8 md:my-0'
        >
          <Image
            className='   rounded-xl shadow rounded-tl-[6rem] rounded-br-[6rem] shadow-lg '
            src={`../${item.image}`}
            alt='project1'
            width={800}
            height={800}
          />
        </motion.div>
      </div>
    </motion.div>
  ));
};
export default Project;
