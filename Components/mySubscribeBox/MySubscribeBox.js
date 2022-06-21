export default function MySubscribeBox() {
  return (
    <section id="mySubscibeBox" className="m-5 sm:m-10 bg-light">
      <div className="container flex flex-col justify-center h-64 gap-5 m-auto text-center md:h-80 align-center">
        <div className="space-y-3 font-bold tracking-wide">
          <h1 className="text-2xl sm:text-5xl lg:text-6xl">
            Subscribe to{" "}
            <span className="text-3xl sm:text-6xl lg:text-8xl text-tahiti">
              8<span className="font-mono text-dark">Prime</span>
            </span>
          </h1>
          <p className="text-sm sm:text-xl">
            Get the latest posts delivered right to your inbox
          </p>
        </div>
        <div>
          <form className="w-full max-w-sm m-auto">
            <div className="flex items-center py-2 border-b border-dark">
              <input
                className="w-full px-2 py-1 mr-3 text-lg leading-tight bg-transparent text-dark focus:outline-none"
                type="email"
                placeholder="Email"
                ariaLabel="email"
              />
              <button
                className="flex-shrink-0 px-3 py-2 text-lg text-white border-4 rounded-2xl border-light bg-[#009688] hover:bg-[#285e61] "
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
