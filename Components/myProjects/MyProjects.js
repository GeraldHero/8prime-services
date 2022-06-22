import MyProjectsItem from "./MyProjectsItem";

const projectData = [
  {
    image: "/images/sample-design-1.jpg",
    title: "Bungalow Type",
    description:
      "Single Storey Residence Project Located at Balibago, Angles City Pampanga.",
    listTitle: "Design and Build",
    lists: [
      "3-Bedrooms",
      "2 Toilet and Bath",
      "Living area",
      "Dining area",
      "Kitchen",
      "Basketball Court",
    ],
  },
  {
    image: "/images/sample-design-2.jpg",
    title: "Single Family Type",
    description: "Two Storey Residence Project.",
    listTitle: "Design and Build",
    lists: [
      "4 Bedrooms",
      "2 Toilet and Bath",
      "Living area",
      "Dining area",
      "Kitchen",
      "Garage",
    ],
  },
  {
    image: "/images/sample-design-3.jpg",
    title: "Delux Type",
    description: "Two Storey Residence Project.",
    listTitle: "Design and Build",
    lists: [
      "5 Bedrooms",
      "3 Toilet and Bath",
      "Living area",
      "Dining area",
      "Kitchen",
      "Balcony ",
      "Garage",
    ],
  },
  {
    image: "/images/sample-design-4.jpg",
    title: "Supreme Residence Type",
    description: "Two Storey Residence Project.",
    listTitle: "Design and Build",
    lists: [
      "6 Bedrooms",
      "3 Toilet and Bath",
      "Living area",
      "Dining area",
      "Kitchen",
      "Garage",
    ],
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

        <MyProjectsItem projectData={projectData || []} />

        {/* projects  */}
      </div>
    </section>
  );
}
