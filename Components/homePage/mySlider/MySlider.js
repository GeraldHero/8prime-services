import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let count = 0;
// const images = [
//   '/images/slider/img-1.jpg',
//   '/images/slider/img-2.jpg',
//   '/images/slider/img-3.jpg',
//   '/images/slider/img-4.jpg',
//   '/images/slider/img-5.jpg',
//   '/images/slider/img-6.jpg',
// ];

const testimonialsData = [
  {
    name: 'Chokni Chokni',
    position: 'Web Developer',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus dolorem enim explicabo voluptatibus distinctio odio ex, sunt ad vitae.',
    image: 'CC',
  },
  {
    name: 'John Dow',
    position: 'Web Developer',
    comment:
      'Consectetur adipisicing elit. Ipsa doloribus dolorem enim explicabo voluptatibus distinctio odio ex, sunt ad vitae.',
    image: 'JD',
  },
  {
    name: 'Smith Run',
    position: 'Engineer',
    image: 'SR',
    comment:
      'Dolorem enim explicabo voluptatibus distinctio odio ex, sunt ad vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus dolorem enim explicabo voluptatibus distinctio odio ex, sunt ad vitae.',
  },
];

export default function MySlider() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const slideRef = useRef(null);

  const handleNextClick = () => {
    count = (count + 1) % testimonialsData.length;
    // to prevent ref overlapse in other pages
    if (slideRef.current) slideRef.current.classList.add('fade-anim');
    return setcurrentIndex(count);
  };
  const handlePrevClick = () => {
    const testimonialsDataLength = testimonialsData.length;
    count =
      (currentIndex + testimonialsDataLength - 1) % testimonialsDataLength;
    slideRef.current.classList.add('fade-anim');
    setcurrentIndex(count);
  };

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim');
  };

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation);
    const startSlider = () => {
      setInterval(() => {
        handleNextClick();
      }, 3000);
    };
    startSlider();
  }, []);

  // <img
  //           className='w-full h-[500px]'
  //           src={images[currentIndex]}
  //           id='lastSlide'
  //           alt='i6'
  //         />

  return (
    <section id='mySlider'>
      <div className='relative mx-auto m-10 w-11/12 sm:w-8/12 select-none overflow-hidden'>
        <div
          ref={slideRef}
          id={testimonialsData[currentIndex].name}
          className='font-roboto'
        >
          <div className='flex flex-col w-8/12 md:w-10/12  h-80 justify-center items-center content-center  pt-5 text-center mx-auto'>
            <p className='text-sm md:text-xl'>
              <span className='text-sm md:text-5xl font-bold'>&#8220;</span>
              {testimonialsData[currentIndex].comment}
              <span className='font-bold'>&#8221;</span>
            </p>
            <div className='flex mt-5 md:mt-8 mb-2 rounded-full justify-center items-center text-lg md:text-2xl shadow w-12 h-12 md:w-16 md:h-16 bg-dark text-light'>
              {testimonialsData[currentIndex].image}
            </div>
            <h1 className='text-sm md:text-lg font-bold text-gray-700'>
              {testimonialsData[currentIndex].name}
            </h1>
            <p className='text-sm text-gray-500'>
              {testimonialsData[currentIndex].position}
            </p>
          </div>
        </div>

        <div className='absolute mx-auto w-full top-1/2 transform -translate-y-1/2   flex justify-between items-center '>
          <button
            className='  rounded p-3 hover:bg-dark hover:text-light '
            onClick={handlePrevClick}
            id='prevButton'
            aria-label='previous button'
          >
            <FontAwesomeIcon
              icon='fa-solid fa-angle-left'
              className='w-3 h-3 md:w-5 md:h-5'
            />
          </button>
          <button
            className=' rounded p-3 hover:bg-dark hover:text-light '
            onClick={handleNextClick}
            id='nextButton'
            aria-label='next button'
          >
            <FontAwesomeIcon
              icon='fa-solid fa-angle-right'
              className='w-3 h-3 md:w-5 md:h-5'
            />
          </button>
        </div>
      </div>
    </section>
  );
}
