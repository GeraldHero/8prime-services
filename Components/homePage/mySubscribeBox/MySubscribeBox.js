import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MySubscribeBox() {
  return (
    <section id='mySubscibeBox' className=' my-background-gradient'>
      <div className='container flex flex-col justify-center h-64 gap-5 m-auto text-center text-light md:h-80 align-center'>
        <div className='space-y-3 font-bold tracking-wide'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl'>
            Subscribe to{' '}
            <span className='text-3xl sm:text-4xl lg:text-5xl text-tahiti'>
              8<span className='font-mono text-primary'>Prime</span>
            </span>
          </h1>
          <p className='text-xs sm:text-sm sm:text-xl '>
            Get the latest posts delivered right to your inbox
          </p>
        </div>
        <div>
          <form className='w-full max-w-sm m-auto'>
            <div className='flex items-center justify-center gap-3 py-2 '>
              <input
                className='p-2 rounded sm:w-full sm:text-lg text-dark focus:outline-none'
                type='email'
                placeholder='Email'
              />
              <button className='my-btn flex items-center gap-1' type='button'>
                <FontAwesomeIcon
                  icon='fa-solid fa-envelope'
                  className='w-4 h-4'
                />
                <p>Sign Up</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
