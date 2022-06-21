const MyBackToBack = () => {
  return (
    <section className="sm:p-8">
      <div className="flex order-1 text-center text-sm grid sm:my-20 items-center content-center justify-center gap-2.5 grid-cols-1 font-sans md:grid-cols-2 md:gap-y-3.5">
        <div className="p-8 m-3 rounded bg-light sm:bg-transparent lg:text-lg">
          <h2 className="font-bold sm:text-right ">
            Trust is the one of the things we build well.
            <p className="font-sans text-lg sm:text-xl lg:text-3xl text-dark">
              Put your money on <span className="text-tahiti">TRUSTED</span>{" "}
              hands.
            </p>
          </h2>
        </div>
        <div className="items-center justify-center order-2 py-6 m-5 lg:m-0">
          <div>
            <img
              className="md:rounded-bl-full"
              src="/images/bb-img-1.jpg"
              alt="bb1"
            />
          </div>
        </div>
        <div className="order-4 py-6 m-5 sm:order-3 lg:m-0">
          <img
            className="md:rounded-r-full"
            src="/images/bb-img-2.jpeg"
            alt="bb1"
          />
        </div>
        <div className="order-3 p-8 m-3 rounded sm:order-4 bg-light sm:bg-transparent lg:text-lg">
          <h2 className="font-bold sm:text-left ">
            <p className="font-sans text-lg sm:text-xl lg:text-3xl text-dark">
              Your <span className="text-tahiti">LIFE</span> is our priority.
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit neque
            sapiente, sequi assumenda officiis ab enim explicabo quidem! Aut,
            fugit!
          </h2>
        </div>
        <div className="order-5 p-8 m-3 rounded bg-light sm:bg-transparent lg:text-lg">
          <h2 className="font-bold sm:text-right ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente
            <p className="font-sans text-lg sm:text-xl lg:text-3xl text-dark">
              <span className="text-tahiti">QUALITY</span> is a must.
            </p>
          </h2>
        </div>
        <div className="order-6 py-6 m-5 lg:m-0">
          <img
            className="md:rounded-tl-full"
            src="/images/bb-img-3.jpeg"
            alt="bb1"
          />
        </div>
      </div>
    </section>
  );
};

export default MyBackToBack;
//
