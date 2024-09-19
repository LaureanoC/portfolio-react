import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { getProject } from '../lib/filter'
import { allprojects } from '../data/data'
import Carousel from '../components/Carousel'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

function ProjectPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const p = getProject(allprojects, id)
  return (
    <>
      <div className='container mx-auto mt-10 lg:mt-32 px-4 sm:px-6'>
        <div className='flex flex-col md:flex-row justify-between'>
          <h1 className='text-text text-5xl font-bold mb-4 md:mb-0'>{p.title}</h1>
          <span
            className='mt-10 md:mt-auto self-center bg-subtitle rounded hover:bg-subtitlehover py-2 px-10 cursor-pointer text-white font-medium'
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
        <p className='text-text mb-5'>{p.fulldesc}</p>
        {p.repo && (
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={p.repo}
            className='text-text font-medium underline'
          >
            Visita el repositorio del proyecto
          </a>
        )}
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
