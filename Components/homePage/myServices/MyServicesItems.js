import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MyServicesItems({ servicesData }) {
  return servicesData.map((service, idx) => {
    return (
      <section
        key={idx}
        className='max-w-md p-8 m-5 text-center bg-white rounded-md shadow-md '
      >
        <div
          className={`flex items-center justify-center w-20 h-20 p-5 m-auto text-center rounded-full sm:w-24 sm:h-24 fa-2xl text-light ${service.iconBgColor}`}
        >
          <FontAwesomeIcon icon={service.icon} className='w-12' />
        </div>
        <h2 className='m-4 font-serif font-medium tracking-wider text-center sm:m-6 sm:text-lg '>
          {service.title}
        </h2>
        <p className='text-sm sm:text-base  text-gray-800'>
          {service.description}
        </p>
      </section>
    );
  });
}
