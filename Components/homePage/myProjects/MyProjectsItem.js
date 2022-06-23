export default function MyProjectsItem({ projectData }) {
  return projectData.map((data, idx) => {
    return (
      <div
        className="grid w-full gap-4 p-2 sm:p-5 lg:grid-cols-2 align-center"
        key={idx}
      >
        <div className="flex w-full">
          <img src={data.image} alt="project1" />
        </div>
        <div className="p-3 font-serif sm:p-10">
          <h1 className="text-xl font-semibold tracking-wide md:text-3xl ">
            {data.title}
          </h1>
          <p className="pt-2 text-base md:text-xl">{data.description}</p>
          <div className="py-5 pl-5 text-sm md:text-lg">
            <p className="font-semibold">{data.listTitle}</p>
            <ul className="pt-2 pl-10 space-y-1 list-disc">
              {data.lists.map((list, idx) => {
                return <li key={idx}>{list}</li>;
              })}
            </ul>
          </div>
          <div className="w-full text-center">
            {" "}
            <button className="p-3 text-white rounded-lg shadow-lg shadow-tahiti/30 bg-tahiti hover:bg-secondary">
              MORE PHOTO
            </button>
          </div>
        </div>
        ;
      </div>
    );
  });
}
