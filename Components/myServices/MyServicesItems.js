export default function MyServicesItems({ servicesData }) {
  return servicesData.map((service, idx) => {
    return (
      <section
        key={idx}
        className="  p-5 m-5 text-center bg-white rounded-md h-[300px] max-w-md shadow-xl"
      >
        <div
          className={`flex items-center justify-center w-20 h-20 p-5 m-auto text-center rounded-full sm:w-28 sm:h-28 ${service.iconColor}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-light sm:w-11 sm:h-11"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={service.svg}
            />
          </svg>
        </div>
        <h2 className="m-4 font-serif font-medium tracking-wider text-center sm:m-6 sm:text-lg ">
          {service.title}
        </h2>
        <p className="text-xs sm:text-base text-background">
          {service.description}
        </p>
      </section>
    );
  });
}
