export default function ContactPage() {
  return (
    <section
      id="contactSection"
      className="w-full p-3 py-10 space-y-4 text-center bg-gray-200 md:space-y-5 sm:p-10 md:h-screen align-center"
    >
      <h1 className="text-2xl font-bold md:text-3xl">Contact Us</h1>
      <p className=" md:text-xl">
        Swing by for a cup of coffee, or leave us a message:
      </p>

      <div className="grid justify-center grid-cols-1 md:grid-cols-2 justify-items-center texts-center align-center">
        <img
          className="md:h-[30vw] shadow-lg rounded-md"
          src="/images/contact-img-1.jpg"
          alt="contactImage"
        />
        <form className="w-full space-y-1 text-left md:w-5/6">
          <label
            for="firstName
            "
            className="block mb-2 text-gray-900 dark:text-gray-400"
          >
            Name
          </label>
          <input
            placeholder="Your Name"
            className="w-full p-2 rounded"
            type="text"
          />
          <label
            for="email"
            className="block mb-2 text-gray-900 dark:text-gray-400"
          >
            Email
          </label>
          <input
            id="email"
            placeholder="Your Email"
            className="w-full p-2 rounded"
            type="email"
          />
          <label
            for="country"
            className="block mb-2 text-gray-900 dark:text-gray-400"
          >
            Country
          </label>
          <select
            id="country"
            className="block w-full px-4 py-3 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
          >
            <option selected="true" disabled="disabled">
              -- Select --
            </option>
            <option>Philippines</option>
            <option>Poland</option>
            <option>Japan</option>
          </select>
          <label
            for="message"
            className="block mb-2 text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="5"
            className="resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
          <div className="flex justify-center pt-2">
            <button className="uppercase my-subscribe-btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
