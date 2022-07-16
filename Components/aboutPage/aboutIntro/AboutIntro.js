import Image from 'next/image';
export default function AboutIntro() {
  return (
    <div className='grid  grid-cols-1 gap-5 m-10 my-14 lg:grid-cols-2'>
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
          our engineering services include paint & process coatings strategies,
          electrical engineering solutions, conveyance system solutions,
          equipment and tooling, and facility layout and design.
        </p>
        <p>
          8prime stands out as a leader amongst industrial engineering
          companies. Contact us today to find out the most effective way to
          incorporate lean principles into your operations for maximum
          efficiency.
        </p>
      </div>
    </div>
  );
}
