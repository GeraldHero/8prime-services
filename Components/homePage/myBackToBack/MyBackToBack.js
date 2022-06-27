const MyBackToBack = () => {
  return (
    <section className="my-16">
      <div className="flex grid items-center content-center justify-center grid-cols-1 gap-8 mb-10 font-sans text-sm text-center sm:my-10 md:grid-cols-2 ">
        <div className="order-2 md:order-1 lg:justify-end bb-text-box">
          <h2 className="font-bold md:text-right ">
            Trust is the one of the things we build well.
            <p className="font-sans text-lg sm:text-xl lg:text-3xl text-dark">
              Put your money on <span className="text-tahiti">TRUSTED</span>{" "}
              hands.
            </p>
          </h2>
        </div>
        <div className="order-1 md:order-2">
          <div>
            <img
              className="shadow-md md:rounded-bl-full"
              src="/images/bb-img-1.jpg"
              alt="bb1"
            />
          </div>
        </div>
        <div className="order-3">
          <img
            className="shadow-md md:rounded-r-full"
            src="/images/bb-img-2.jpeg"
            alt="bb2"
          />
        </div>
        <div className="order-4 bb-text-box lg:justify-start">
          <h2 className="font-bold md:text-left ">
            <p className="font-sans text-lg sm:text-xl lg:text-3xl text-dark">
              Your <span className="text-tahiti">LIFE</span> is our priority.
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit neque
            sapiente, sequi assumenda officiis ab enim explicabo quidem! Aut,
            fugit!
          </h2>
        </div>
        <div className="order-6 md:order-5 bb-text-box lg:justify-end ">
          <h2 className="font-bold md:text-right ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente
            <p className="font-sans text-lg sm:text-xl lg:text-3xl text-dark">
              <span className="text-tahiti">QUALITY</span> is a must.
            </p>
          </h2>
        </div>
        <div className="order-5 md:order-6 ">
          <img
            className="shadow-md md:rounded-tl-full"
            src="/images/bb-img-3.jpeg"
            alt="bb3"
          />
        </div>
      </div>
    </section>
  );
};

export default MyBackToBack;
//
