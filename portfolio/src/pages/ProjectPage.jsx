import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { getProject } from '../lib/filter'
import { allprojects } from '../data/data'

function ProjectPage() {
  const params = useParams()
  let p = getProject(allprojects, params.id)

  return (
    <>
      <div className='container mx-auto mt-32'>
        <div className='flex justify-between'>
          <h1 className='text-text text-5xl font-bold'>{p.title}</h1>
          <span
            className='self-center bg-subtitle rounded  hover:bg-subtitlehover py-2 px-10 cursor-pointer text-white font-medium'
            onClick={() => (window.location.href = '/')}
          >
            Volver
          </span>
        </div>
        <hr className='mt-10 mb-5' />
        <p className='text-text'>{p.desc}</p>
        <a href={p.repo} className='text-text font-medium underline'>Visita el repositorio del proyecto</a>
        <h2 className='text-4xl text-subtitle font-bold mt-10'>Video</h2>
      </div>

      <Footer />
    </>
  )
}

export default ProjectPage
