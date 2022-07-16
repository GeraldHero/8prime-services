import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const helpCenterData = [
  {
    contact: '(+63) 927 084 4077',
    icon: 'fa-solid fa-phone',
  },
  {
    contact: ' (+63) 947 276 4512',
    icon: 'fa-solid fa-phone',
  },
  {
    contact: ' 8prime.construction@gmail.com',
    icon: 'fa-solid fa-envelope',
  },
];

export default function AboutCard() {
  return (
    <div className='flex flex-col justify-center align-center text-lg lg:text-xl  font-mono w-10/12 md:w-8/12 bg-gray-200 gap-12  shadow-lg   rounded mx-auto my-16 text-left font-roboto align-center p-14 md:p-24'>
      <h1 className='text-2xl md:text-3xl font-bold text-center'>
        8Prime Construction and Engineeing Services
      </h1>
      <p>
        8Prime is an expert structural engineering firm and our engineers,
        structural engineering consultants, and expert project managers
        understand how to support the equipment in current or future facilities.
        We can design or analyze the support systems needed for existing or
        future mezzanines, equipment, conveyors, and platforms & more.
      </p>

      <div className='text-lg font-bold text-right  '>
        <ul>
          {/* helpCenterData link start */}
          {helpCenterData.map((data, idx) => {
            return (
              <li
                key={idx}
                className='flex items-center gap-2 text-sm sm:text-lg'
              >
                <FontAwesomeIcon icon={data.icon} className='w-4 h-4' />
                {data.contact}
              </li>
            );
          })}

          {/* helpCenterData link end */}
        </ul>
      </div>
    </div>
  );
}
