export default function MyAbout() {
  return (
    <section id="aboutPage">
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
            necessitatibus, voluptatum obcaecati in? Non, labore. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Beatae sit
            necessitatibus consectetur rerum vitae aperiam quae ut quod id
            mollitia.
          </p>
          <button className="my-subscribe-btn">CONTACT US</button>
        </div>
      </div>

      <div className="grid justify-center w-8/12 grid-cols-1 gap-8 mx-auto my-12 text-left font-roboto align-center">
        <h1 className="text-3xl font-bold text-center">
          8Prime Construction and Engineeing Services
        </h1>
        <p className="indent-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          numquam exercitationem iste ipsam debitis ab aliquid libero sunt
          voluptatem vero. Sequi alias aut veritatis error, delectus enim
          explicabo repellendus ducimus! Lorem ipsum dolor sit amet consectetur
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          inventore magnam architecto consequatur praesentium deleniti nam optio
          pariatur debitis? Porro eos cumque consequatur facilis voluptatum ab
          aperiam assumenda voluptates veritatis?
        </p>
        <p className="indent-8">
          adipisicing elit. Facilis quasi unde praesentium. Magnam, consequuntur
          nisi, officia rerum praesentium assumenda impedit ratione quod
          blanditiis quasi minus nulla saepe quisquam veniam deleniti, possimus
          laudantium sapiente sunt. Quasi ut ab fugit totam? Expedita harum ipsa
          fugiat quisquam doloribus illo et earum ab quod.
        </p>
        <div className="text-lg font-bold text-right">
          <p>
            <i class="fa-solid fa-phone"></i> (+63) 927 084 4077
          </p>
          <p>
            <i class="fa-solid fa-phone"></i> (+63) 947 276 4512
          </p>
          <p>
            <i class="fa-solid fa-envelope"></i> 8prime.construction@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
