import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mainIconLink = [
  {
    link: 'https://www.facebook.com/8Prime.Construction',
    icon: 'fa-brands fa-facebook-f',
  },
  {
    link: 'https://mail.google.com/',
    icon: 'fa-brands fa-google',
  },
  {
    link: 'https://www.instagram.com/',
    icon: 'fa-brands fa-instagram',
  },
  {
    link: 'https://www.github.com/GeraldHero',
    icon: 'fa-brands fa-github',
  },
  {
    link: 'https://www.twitter.com/',
    icon: 'fa-brands fa-twitter',
  },
];

const companyLinks = [
  {
    page: 'About',
    link: '/about',
  },
  {
    page: 'Contact',
    link: '/contact',
  },
  {
    page: 'Photo',
    link: '/photo',
  },
  {
    page: 'Home',
    link: '/',
  },
];

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

export default function MyFooter() {
  return (
    <footer className='text-center lg:text-left my-background-gradient text-light '>
      <div className='flex items-center align-center justify-center p-6 border-b lg:justify-between border-light'>
        <div className='hidden mr-12 lg:block'>
          <span className=' font-roboto'>
            Get connected with us on social networks:
          </span>
        </div>
        <div className='flex justify-center items-center '>
          {mainIconLink.map((data, idx) => {
            return (
              <div key={idx}>
                <Link href={data.link}>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    className='flex  text-light'
                    aria-label={`Link-${idx}`}
                  >
                    <FontAwesomeIcon
                      icon={data.icon}
                      className={`w-5 h-5 hover:text-tahiti mx-3`}
                    />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className='grid justify-center w-full grid-cols-1 gap-5 p-12 mx-auto space-y-1 text-center sm:space-y-0 sm:grid-cols-2 align-center lg:max-w-screen-xl justify-items-center md:text-center lg:grid-cols-4'>
        <div>
          <h1 className='my-h2-title'>COMPANY</h1>
          <ul className='space-y-1'>
            {/* company link start */}
            {companyLinks.map((data, idx) => {
              return (
                <li key={idx}>
                  <Link href={data.link}>
                    <a className='text-sm hover:text-tahiti sm:text-lg'>
                      {data.page}
                    </a>
                  </Link>
                </li>
              );
            })}

            {/* company link end */}
          </ul>
        </div>

        <div className='text-lg'>
          <h1 className='my-h2-title'>FOLLOW US</h1>
          <ul className='space-y-1 text-sm sm:text-lg'>
            <li>
              <a
                target='_blank'
                rel='noreferrer'
                className='hover:text-tahiti'
                href='https://www.facebook.com/8Prime.Construction'
              >
                Facebook
              </a>
            </li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className='text-lg'>
          <h1 className='my-h2-title'>LEGAL</h1>
          <ul className='space-y-1 text-sm sm:text-lg'>
            <li>Privacy Policy</li>
            <li>Licensing</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className='text-lg'>
          <h1 className='my-h2-title'>HELP CENTER</h1>
          <ul className='space-y-1 '>
            {/* helpCenterData link start */}
            {helpCenterData.map((data, idx) => {
              return (
                <li
                  key={idx}
                  className='flex items-center justify-center gap-2 text-sm sm:text-lg'
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

      <div className='flex items-center justify-center h-20 gap-1 text-sm text-center border-t sm:text-lg'>
        Copyright &copy;
        <div className='text-sm sm:text-xl text-tahiti'>
          8
          <span className='text-sm sm:text-xl text-primary'>
            Prime Services 2022. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
