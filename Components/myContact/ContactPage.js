export default function ContactPage() {
  return (
    <section
      id='contactSection'
      className='w-full p-3  my-24 space-y-4 text-center md:space-y-12 sm:p-10  '
    >
      <h1 className='text-2xl font-bold md:text-3xl'>Contact Us</h1>
      <p className=' md:text-xl'>
        Swing by for a cup of coffee, or leave us a message:
      </p>

      <div className='grid justify-center grid-cols-1 md:grid-cols-2 justify-items-center texts-center align-center'>
        <img
          className='md:h-[30vw] shadow-lg rounded-md'
          src='/images/contact-img-1.jpg'
          alt='contactImage'
        />
        <form className='w-full space-y-1 text-left p-5 sm:p-0  md:w-5/6'>
          <label
            for='firstName
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
            for='email'
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
            for='country'
            className='block mb-2 text-gray-900 dark:text-gray-400'
          >
            Country
          </label>
          <select
            id='country'
            className='block w-full px-4 py-3 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline'
          >
            <option selected='true' disabled='disabled'>
              -- Select --
            </option>
            <option>Philippines</option>
            <option>Poland</option>
            <option>Japan</option>
          </select>
          <label
            for='message'
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
