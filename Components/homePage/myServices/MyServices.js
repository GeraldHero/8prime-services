import MyServicesItems from './MyServicesItems';

const newServicesData = [
  {
    icon: 'fa-solid fa-pen-ruler',
    iconBgColor: 'bg-dark',
    title: 'ARCHITECTURE',
    description: `Include concept design development, preparation of construction
    documents, and construction administration.`,
  },
  {
    icon: 'fa-solid fa-house-chimney-window',
    iconBgColor: 'bg-secondary',
    title: 'STRUCTURAL',
    description: `We design and analyze the roof, foundation, basement, walls, ceilings, or floors of a home.`,
  },
  {
    icon: 'fa-solid fa-faucet',
    iconBgColor: 'bg-tahiti',
    title: 'PLUMBING',
    description: `Professional involved with the planning, design and installation of building systems related to plumbing, including water supply and drainage.`,
  },
  {
    icon: 'fa-solid fa-hand-holding-droplet',
    iconBgColor: 'bg-background',
    title: 'SANITARY',
    description: `The application of engineering methods to improve sanitation of human communities, primarily by providing the removal and disposal of human waste.`,
  },
  {
    icon: 'fa-solid fa-bolt',
    iconBgColor: 'bg-yellow ',
    title: 'ELECTRICAL',
    description: `The part of the installation from the utility point of connection to the first over-current device, usually the main circuit breaker.`,
  },
];

export default function MyServices() {
  return (
    <section className='my-20 '>
      <h2 className='p-4 pl-12 mt-5 font-mono font-semibold   rounded w-80 sm:w-96 sm:text-left text-md sm:text-xl mix-blend-hard-light'>
        We provide the best services:
      </h2>
      <div className='grid grid-cols-1 gap-2 justify-items-center align-center sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-5 '>
        {/* card starting - will invoke card from MyServicesItem and pass the data */}
        <MyServicesItems servicesData={newServicesData || []} />
        {/* /card end */}
      </div>
    </section>
  );
}
