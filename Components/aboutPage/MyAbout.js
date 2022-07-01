import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const helpCenterData = [
  {
    contact: '(+63) 927 084 4077',
    icon: 'fa-solid fa-phone',
  },
  {
    contact: ' (+63) 947 276 4512',
    icon: 'fa-solid fa-phone',
  },
  {
    contact: ' 8prime.construction@gmail.com',
    icon: 'fa-solid fa-envelope',
  },
];

export default function MyAbout() {
  return (
    <section id='aboutPage '>
      <div className='grid items-center grid-cols-1 gap-5 m-10 my-14 lg:grid-cols-2'>
        <div className=' flex justify-center   '>
          <Image
            src='/images/about-img-2.jpg'
            alt='Picture of the author'
            className='rounded shadow-lg'
            width={600}
            height={500}
          />
        </div>
        <div className='p-5 space-y-5 text-lg lg:text-xl mx-auto  md:w-10/12'>
          <p className='indent-8'>
            Our multi-disciplined engineering team understands the complex
            manufacturing and industrial problems our clients face. Our
            engineering services are built on years of experience and the
            expertise to identify and design the unique industrial engineering
            solutions that match our client&rsquo;s needs.
          </p>
          <p>
            We possess state of the art technology and utilize these tools on a
            daily basis to solve our clients most difficult challenges. Some of
            our engineering services include paint & process coatings
            strategies, electrical engineering solutions, conveyance system
            solutions, equipment and tooling, and facility layout and design.
          </p>
          <p>
            8prime stands out as a leader amongst industrial engineering
            companies. Contact us today to find out the most effective way to
            incorporate lean principles into your operations for maximum
            efficiency.
          </p>
        </div>
      </div>

      <div className='grid justify-center text-lg lg:text-xl  font-mono w-10/12 md:w-7/12 grid-cols-1 gap-12 mx-auto my-12 text-left font-roboto align-center'>
        <h1 className='text-2xl md:text-3xl font-bold text-center'>
          8Prime Construction and Engineeing Services
        </h1>
        <p>
          8Prime is an expert structural engineering firm and our engineers,
          structural engineering consultants, and expert project managers
          understand how to support the equipment in current or future
          facilities. We can design or analyze the support systems needed for
          existing or future mezzanines, equipment, conveyors, and platforms &
          more.
        </p>

        <div className='text-lg font-bold text-right  '>
          <ul>
            {/* helpCenterData link start */}
            {helpCenterData.map((data, idx) => {
              return (
                <li
                  key={idx}
                  className='flex items-center gap-2 text-sm sm:text-lg'
                >
                  <FontAwesomeIcon icon={data.icon} className='w-4 h-4' />
                  {data.contact}
                </li>
              );
            })}

            {/* helpCenterData link end */}
          </ul>
        </div>
      </div>
    </section>
  );
}
