import Image from 'next/image';
export default function ContactPage() {
  return (
    <section
      id='contactSection'
      className='w-full p-3 my-4 space-y-4 text-center md:my-14 md:space-y-8'
    >
      <h1 className='text-2xl font-bold md:text-3xl'>Contact Us</h1>
      <p className=' md:text-xl'>
        Swing by for a cup of coffee, or leave us a message:
      </p>

      <div className='grid justify-center grid-cols-1 lg:grid-cols-2 justify-items-center texts-center  imageContainer sm:p-12 lg:p-0'>
        <Image
          className='rounded-md  shadow-lg image'
          src='/images/contact-img-1.jpg'
          alt='contactImage'
          width={500}
          height={400}
        />
        <form className='w-full p-5 space-y-1 text-left sm:p-0 mt-4 sm:w-5/6'>
          <label
            htmlFor='firstName
            '
            className='block mb-2 text-gray-900 dark:text-gray-400'
          >
            Name
          </label>
          <input
            placeholder='Your Name'
            className='my-input-style'
            type='text'
          />
          <label
            htmlFor='email'
            className='block mb-2 text-gray-900 dark:text-gray-400'
          >
            Email
          </label>
          <input
            id='email'
            placeholder='Your Email'
            className='my-input-style'
            type='email'
          />

          <label
            htmlFor='message'
            className='block mb-2 text-gray-900 dark:text-gray-400'
          >
            Your message
          </label>
          <textarea
            id='message'
            rows='5'
            className='resize-none my-input-style'
            placeholder='Your message...'
          ></textarea>
          <div className='flex justify-center pt-2'>
            <button className='uppercase my-btn'>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

// <label
//             htmlFor='country'
//             className='block mb-2 text-gray-900 dark:text-gray-400'
//           >
//             Country
//           </label>
//           <select
//             id='country'
//             className='block w-full px-4 py-3 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline'
//           >
//             <option selected='true' disabled='disabled'>
//               -- Select --
//             </option>
//             <option>Philippines</option>
//             <option>Poland</option>
//             <option>Japan</option>
//           </select>
