import Image from 'next/image';
function MyBanner() {
  return (
    <section>
      <div className='z-20 m-2drop-shadow-lg sm:my-3 index'>
        <div className='imageContainer'>
          <Image
            src='/images/banner-img.jpg'
            alt='eight prime banner'
            width='100%'
            height='100%'
            className='image object-scale-down rounded sm:object-fill sm:h-full'
          />
        </div>
      </div>
    </section>
  );
}

export default MyBanner;
