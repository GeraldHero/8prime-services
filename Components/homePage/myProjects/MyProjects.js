import MyProjectsItem from './MyProjectsItem';
import projectData from './data';
// import MyFilterProjects from './filterProject/MyFilterProjects';
export default function MyProjects() {
  return (
    <section id='my-projects py-10'>
      <div className='container w-full p-3 mx-auto text-left lg:p-4 align-center'>
        <h1 className='m-3 font-mono text-xl font-bold sm:m-5 sm:text-3xl'>
          OUR LATEST PROJECTS:
        </h1>

        {/* projects item  */}
        <div className='grid sm:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
          <MyProjectsItem projectData={projectData || []} />
          {/* projects  */}
        </div>
      </div>
    </section>
  );
}
