import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function PriceFilter() {
  return (
    <div className='inline-block relative w-64 lg:w-44 xl:w-64'>
      <select className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline hover:cursor-pointer'>
        <option>Price</option>
        <option>Below P2,000,000.00</option>
        <option>Below P3,000,000.00</option>
        <option>Below P4,000,000.00</option>
        <option>Below P5,000,000.00</option>
        <option>none</option>
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <FontAwesomeIcon icon='fa-solid fa-angle-down' />
      </div>
    </div>
  );
}
