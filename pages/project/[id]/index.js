import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import projectsData from '../../../Components/homePage/myProjects/data';

const project = () => {
  const { id } = useRouter().query;
  let projectData = [];
  projectData = projectsData.filter((data) => {
    if (data.id == id) {
      return data;
    }
  });

  return projectData.map((item, idx) => (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className='my-5'
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
      <h1 className='w-full text-center text-lg md:text-2xl font-bold text-gray-400 m-5 p-5'>
        {item.title}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8'>
        <div className=' imageContainer'>
          <Image
            className=' image rounded-xl shadow rounded-tl-[6rem] rounded-br-[6rem]'
            src={`../${item.image}`}
            alt='project1'
            width='100%'
            height='100%'
          />
        </div>
        <div className='text-gray-700 text-md md:text-xl font-mono space-y-2 font-semibold'>
          <p className='text-gray-600'>&#8369; {item.price} only</p>
          <p className='my-5 font-normal font-roboto'>{item.description}</p>

          <ul className='text-base md:text-lg'>
            <li>Bedrooms: {item.bedrooms}</li>
            <li>Bathrooms: {item.cr}</li>
            <li>Square Meter: {item.sq} sqm</li>
          </ul>
          <p className='text-base md:text-xl'>{item.listTitle}</p>
          <ul className='font-normal text-gray-600'>
            {item.area.map((i, idx) => {
              return <li key={idx}>{i}</li>;
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  ));
};
export default project;
