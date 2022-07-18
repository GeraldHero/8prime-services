import Image from 'next/image';
export default function AboutIntro() {
  return (
    <div className='mx-auto p-4 m-2 lg:p-16 2xl:p-24 lg:w-12/12 xl:w-12/12  '>
      <img
        src='/images/about-img-2.jpg'
        alt='Picture of the author'
        className='w-[200px] h-[500px] lg:w-[500px]   rounded shadow-lg float-left mr-8 aspect-[1/1] object-cover object-center lg:aspect-[1/2] lg:[clip-path:polygon(0%_0%,100%_0%,75%_100%,0%_100%)] lg:[shape-outside:polygon(0%_0%,100%_0%,75%_100%,0%_100%)] [clip-path:circle(70%_at_10%_30%)] [shape-outside:circle(70%_at_10%_30%)]'
      />
      <div className='p-6 lg:p-12 lg:text-xl space-y-12  h-auto   align-center'>
        <p>
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
