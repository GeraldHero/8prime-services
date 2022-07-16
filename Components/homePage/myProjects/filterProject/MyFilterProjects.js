import LocationFilter from './LocationFilter';
import PriceFilter from './PriceFilter';
import PropertyFilter from './PropertyFilter';
export default function MyFilterProjects() {
  return (
    <div className='p-6 bg-gray-200 shadow-lg sm:mx-4'>
      <div className='grid w-full justify-items-center align-center items-center  grid-cols-1  lg:grid-cols-4  gap-4  m-2 '>
        <LocationFilter />
        <PropertyFilter />
        <PriceFilter />
        <button className='bg-gray-700 text-white w-32  hover:bg-gray-600 p-2 uppercase '>
          Filter
        </button>
      </div>
    </div>
  );
}
