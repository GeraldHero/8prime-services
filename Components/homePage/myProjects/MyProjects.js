import MyProjectsItem from "./MyProjectsItem";

const projectData = [
  {
    image: "/images/sample-design-1.jpg",
    title: "Bungalow Type",
    description:
      "Single Storey Residence Project Located at Balibago, Angles City Pampanga.",
    listTitle: "Design and Build",
    bedrooms: 3,
    cr: 2,
    sq: 200,
    area: ["Living area", "Dining area", "Kitchen", "Basketball Court"],
    price: "3,200,000.00",
  },
  {
    image: "/images/sample-design-2.jpg",
    title: "Single Family Type",
    description: "Two Storey Residence Project.",
    listTitle: "Design and Build",
    bedrooms: 4,
    cr: 2,
    sq: 150,
    area: ["Living area", "Dining area", "Kitchen", "Garage"],
    price: "3,400,000.00",
  },
  {
    image: "/images/sample-design-3.jpg",
    title: "Delux Type",
    description: "Two Storey Residence Project.",
    listTitle: "Design and Build",
    bedrooms: 5,
    cr: 3,
    sq: 130,
    area: ["Living area", "Dining area", "Kitchen", "Balcony ", "Garage"],
    price: "4,000,000.00",
  },
  {
    image: "/images/sample-design-4.jpg",
    title: "Supreme Residence Type",
    description: "Two Storey Residence Project.",
    listTitle: "Design and Build",
    bedrooms: 5,
    cr: 3,
    sq: 200,
    area: ["Living area", "Dining area", "Kitchen", "Garage"],
    price: "4,000,000.00",
  },
];

export default function MyProjects() {
  return (
    <section id="my-projects py-10">
      <div className="container w-full p-3 mx-auto text-left sm:p-10 align-center">
        <h1 className="m-3 font-mono text-xl font-bold sm:m-5 sm:text-3xl">
          OUR LATEST PROJECTS:
        </h1>
        {/* projects item  */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <MyProjectsItem projectData={projectData || []} />
          {/* projects  */}
        </div>
      </div>
    </section>
  );
}
