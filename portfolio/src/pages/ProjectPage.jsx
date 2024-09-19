import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { getProject } from '../lib/filter'
import { allprojects } from '../data/data'
import Carousel from '../components/Carousel'
import { useNavigate } from 'react-router-dom'

function ProjectPage() {
  const params = useParams()
  const navigate = useNavigate()
  let p = getProject(allprojects, params.id)

  return (
    <>
      <div className='container mx-auto mt-32'>
        <div className='flex justify-between'>
          <h1 className='text-text text-5xl font-bold'>{p.title}</h1>
          <span
            className='self-center bg-subtitle rounded  hover:bg-subtitlehover py-2 px-10 cursor-pointer text-white font-medium'
            onClick={() => {
              navigate('/')
              window.scrollTo(0, 0)
            }}
          >
            Volver
          </span>
        </div>
        <hr className='mt-5 mb-5' />
        <div className='my-5 text-gray-400 text-xs'>{p.date}</div>
        <p className='text-text'>{p.fulldesc}</p>
        <a
          target='_blank'
          href={p.repo}
          className='text-text font-medium underline'
        >
          Visita el repositorio del proyecto
        </a>
        <h2 className='text-4xl text-subtitle font-bold mt-10 mb-5'>
          Imágenes
        </h2>
        <Carousel imgs={p.imgs} />
      </div>

      <Footer />
    </>
  )
}

export default ProjectPage
