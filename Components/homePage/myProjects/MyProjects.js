import MyProjectsItem from './MyProjectsItem';
import projectData from './data';

export default function MyProjects() {
  return (
    <section id='my-projects py-10'>
      <div className='container w-full p-3 mx-auto text-left sm:p-10 align-center'>
        <h1 className='m-3 font-mono text-xl font-bold sm:m-5 sm:text-3xl'>
          OUR LATEST PROJECTS:
        </h1>
        {/* projects item  */}
        <div className='grid gap-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
          <MyProjectsItem projectData={projectData || []} />
          {/* projects  */}
        </div>
      </div>
    </section>
  );
}
