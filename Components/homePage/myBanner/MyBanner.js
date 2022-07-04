import Image from "next/image";
function MyBanner() {
  return (
    <section>
      <div className="z-20 flex justify-center mx-auto m-2drop-shadow-lg sm:my-3 index">
        <Image
          src="/images/banner-img.jpg"
          alt="eight prime banner"
          width={1800}
          height={700}
        />
      </div>
    </section>
  );
}

export default MyBanner;
