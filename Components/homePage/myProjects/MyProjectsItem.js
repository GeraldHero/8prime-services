import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

export default function MyProjectsItem({ projectData }) {
  return projectData.map((data, idx) => {
    return (
      <Link key={idx} href='/project/[id]' as={`/project/${data.id}`}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: [1, 0.9, 1, 1.1, 1] }}
          className='hover:cursor-pointer hover:shadow-xl rounded-tl-[6rem] m-6 p-5 '
        >
          <br />
          <div className='flex mx-auto sm:w-11/12'>
            <Image
              className='rounded-xl shadow rounded-tl-[6rem] rounded-br-[6rem]'
              src={data.image}
              alt='project1'
              width={900}
              height={900}
            />
          </div>
          <div className='p-4 '>
            <div className='flex items-center gap-4 py-3 text-sm text-gray-500 '>
              <p>
                <FontAwesomeIcon
                  icon='fa-solid fa-bed'
                  className='inline w-3'
                />{' '}
                {data.bedrooms}
              </p>
              <p>
                <FontAwesomeIcon
                  icon='fa-solid fa-bath'
                  className='inline w-3'
                />{' '}
                {data.cr}
              </p>
              <p>
                <FontAwesomeIcon
                  icon='fa-solid fa-arrows-left-right'
                  className='inline w-3'
                />{' '}
                {data.sq} sqm
              </p>
            </div>
            <h1 className='font-mono font-bold sm:text-xl'>{data.title}</h1>
            <h3 className='text-sm text-base sm:font-semibold text-tahiti'>
              &#8369; {data.price}{' '}
            </h3>
          </div>
        </motion.div>
      </Link>
    );
  });
}

// <div className="p-3 font-serif sm:p-10">
// <h1 className="text-xl font-semibold tracking-wide md:text-3xl ">
//   {data.title}
// </h1>
// <p className="pt-2 text-base md:text-xl">{data.description}</p>
// <div className="py-5 pl-5 text-sm md:text-lg">
//   <p className="font-semibold">{data.listTitle}</p>
//   <ul className="pt-2 pl-10 space-y-1 list-disc">
//     {data.lists.map((list, idx) => {
//       return <li key={idx}>{list}</li>;
//     })}
//   </ul>
// </div>
// <div className="w-full text-center">
//   {" "}
//   <button className="my-btn">more info</button>
// </div>
// </div>
