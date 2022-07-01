import Image from 'next/image';
const photosIndex = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Photo() {
  return (
    <section className='py-10 bg-gray-100 font-roboto'>
      <h1 className='py-8 text-3xl md:text-5xl font-bold text-center text-gray-700'>
        Bungalow Style
      </h1>
      <div className='gap-3 p-3 mx-auto space-y-3 columns-1 sm:columns-2 xl:columns-3 '>
        {photosIndex.map((photo, idx) => {
          return (
            <div key={idx} className='  md:break-inside-void sm:hover:border-4'>
              <div className='imageContainer'>
                <Image
                  src={`/images/project/project-img-${photo}.jpg`}
                  alt='image'
                  width='100%'
                  height='100%'
                  className='image'
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
