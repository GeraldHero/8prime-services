export default function Photo() {
  return (
    <section className="py-10 bg-gray-100 font-roboto">
      <h1 className="py-8 text-5xl font-bold text-center text-gray-700">
        Bungalow Style
      </h1>
      <div className="gap-3 p-3 mx-auto space-y-3 columng-1 sm:columns-2 xl:columns-3 pc-28">
        <div className="transition-all bg-gray-200 md:break-inside-void sm:hover:border-4">
          <img src="/images/project/project-img-1.jpg" alt="" />
        </div>
        <div className="bg-gray-200 break-inside-void sm:hover:border-4">
          <img src="/images/project/project-img-2.jpg" alt="" />
        </div>
        <div className="bg-gray-200 break-inside-void sm:hover:border-4">
          <img src="/images/project/project-img-3.jpg" alt="" />
        </div>
        <div className="bg-gray-200 break-inside-void sm:hover:border-4">
          <img src="/images/project/project-img-4.jpg" alt="" />
        </div>
        <div className="bg-gray-200 break-inside-void sm:hover:border-4">
          <img src="/images/project/project-img-5.jpg" alt="" />
        </div>
        <div className="bg-gray-200 break-inside-void sm:hover:border-4">
          <img src="/images/project/project-img-6.jpg" alt="" />
        </div>
        <div className="bg-gray-200 break-inside-void sm:hover:border-4">
          <img src="/images/project/project-img-7.jpg" alt="" />
        </div>
        <div className="bg-gray-200 break-inside-void sm:hover:border-4">
          <img src="/images/project/project-img-8.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
