export default function MySubscribeBox() {
  return (
    <section id="mySubscibeBox" className=" my-background-gradient">
      <div className="container flex flex-col justify-center h-64 gap-5 m-auto text-center text-light md:h-80 align-center">
        <div className="space-y-3 font-bold tracking-wide">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl">
            Subscribe to{" "}
            <span className="text-3xl sm:text-4xl lg:text-5xl text-tahiti">
              8<span className="font-mono text-primary">Prime</span>
            </span>
          </h1>
          <p className="text-sm sm:text-xl">
            Get the latest posts delivered right to your inbox
          </p>
        </div>
        <div>
          <form className="w-full max-w-sm m-auto">
            <div className="flex items-center py-2 ">
              <input
                className="w-full p-2 mr-3 text-lg rounded text-dark focus:outline-none"
                type="email"
                placeholder="Email"
              />
              <button
                className="flex-shrink-0 px-3 py-2 text-lg text-white rounded bg-green hover:bg-lightGreen "
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
