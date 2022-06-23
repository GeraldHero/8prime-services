export default function MyAbout() {
  return (
    <div>
      <div className="grid items-center grid-cols-1 gap-5 m-10 lg:grid-cols-2 font-roboto">
        <div className="shadow-lg">
          <img className="rounded " src="/images/about-img-2.jpg" alt="about" />
        </div>
        <div className="p-5 space-y-5">
          <h1 className="text-xl font-bold md:text-3xl">ABOUT US</h1>
          <p className="indent-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            quisquam at voluptas ut corporis inventore ab ipsa quis omnis
            ratione aliquid adipisci in, ipsum sit autem sunt molestias quasi?
            Architecto.
          </p>
          <p className="indent-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            aperiam sunt repudiandae labore cumque ea expedita tempora harum,
            corrupti dolorum distinctio quae ab iste vel ut nemo dolore
            provident accusamus error nisi adipisci iure inventore eum? Odio
            modi necessitatibus enim, aliquid voluptatem obcaecati harum
            repudiandae. Eveniet ab impedit provident consequuntur hic illo
            vitae voluptatum quos et neque. Tempore laboriosam ab voluptatum
            illum voluptas eveniet qui voluptatem consectetur vero magni,
            doloribus ad enim error laudantium cum provident quas deleniti
            magnam voluptate culpa at fugit. Aliquid suscipit, laborum
            consequatur, aut amet veniam veritatis odit sit repellat
            necessitatibus, voluptatum obcaecati in? Non, labore.
          </p>
          <button className="my-subscribe-btn">CONTACT US</button>
        </div>
      </div>
    </div>
  );
}
