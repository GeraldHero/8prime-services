// const myLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
// };

export default function MyAbout() {
  return (
    <section id='aboutPage'>
      <div className='grid items-center grid-cols-1 gap-5 m-10 my-24 lg:grid-cols-2 font-mono'>
        <div className=' flex justify-center   '>
          <img
            src='/images/about-img-2.jpg'
            alt='Picture of the author'
            className='rounded lg:h-[500px] shadow-lg'
          />
        </div>
        <div className='p-5 space-y-5 text-lg lg:text-xl mx-auto  md:w-10/12'>
          <p className='indent-8'>
            Our multi-disciplined engineering team understands the complex
            manufacturing and industrial problems our clients face. Our
            engineering services are built on years of experience and the
            expertise to identify and design the unique industrial engineering
            solutions that match our client's needs.
          </p>
          <p className='indent-8'>
            We possess state of the art technology and utilize these tools on a
            daily basis to solve our clients most difficult challenges. Some of
            our engineering services include paint & process coatings
            strategies, electrical engineering solutions, conveyance system
            solutions, equipment and tooling, and facility layout and design.
          </p>
          <p className='indent-8'>
            8prime stands out as a leader amongst industrial engineering
            companies. Contact us today to find out the most effective way to
            incorporate lean principles into your operations for maximum
            efficiency.
          </p>
        </div>
      </div>

      <div className='grid justify-center w-7/12 grid-cols-1 gap-12 mx-auto my-12 text-left font-roboto align-center'>
        <h1 className='text-3xl font-bold text-center'>
          8Prime Construction and Engineeing Services
        </h1>
        <p className='indent-8'>
          8Prime is an expert structural engineering firm and our engineers,
          structural engineering consultants, and expert project managers
          understand how to support the equipment in current or future
          facilities. We can design or analyze the support systems needed for
          existing or future mezzanines, equipment, conveyors, and platforms &
          more.
        </p>
        <p className='indent-8'></p>
        <div className='text-lg font-bold text-right'>
          <p>
            <i className='fa-solid fa-phone'></i> (+63) 927 084 4077
          </p>
          <p>
            <i className='fa-solid fa-phone'></i> (+63) 947 276 4512
          </p>
          <p>
            <i className='fa-solid fa-envelope'></i>{' '}
            8prime.construction@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
