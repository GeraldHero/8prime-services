import MyServicesItems from "./MyServicesItems";

const servicesData = [
  {
    svg: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
    iconColor: "bg-dark",
    title: "ARCHITECTURE",
    description: `Include concept design development, preparation of construction
    documents, and construction administration.`,
  },
  {
    svg: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    iconColor: "bg-secondary",
    title: "STRUCTURAL",
    description: `Design and analyze buildings, bridges, power plants, electrical towers, dams, and other large structures.`,
  },
  {
    svg: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    iconColor: "bg-tahiti",
    title: "PLUMBING",
    description: `Professional involved with the planning, design and installation of building systems related to plumbing, including water supply and drainage.`,
  },
  {
    svg: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    iconColor: "bg-background",
    title: "SANITARY",
    description: `The application of engineering methods to improve sanitation of human communities, primarily by providing the removal and disposal of human waste, and in addition to the supply of safe potable water.`,
  },
  {
    svg: "M13 10V3L4 14h7v7l9-11h-7z",
    iconColor: "bg-yellow",
    title: "ELECTRICAL",
    description: `The part of the installation from the utility point of connection to the first over-current device, usually the main circuit breaker.`,
  },
];

export default function MyServices() {
  return (
    <section className="my-20 ">
      <div className="py-4 rounded-tl-full rounded-br-full sm:px-2 bg-primary">
        <h2 className="my-10 font-mono font-semibold text-center text-md sm:text-xl ">
          We provide the best services:
        </h2>
        <div className="grid content-center justify-center grid-cols-2 gap-2 md:grid-cols-3 ">
          {/* card starting - will invoke card from MyServicesItem and pass the data */}
          <MyServicesItems servicesData={servicesData || []} />
          {/* /card end */}
        </div>
      </div>
    </section>
  );
}
