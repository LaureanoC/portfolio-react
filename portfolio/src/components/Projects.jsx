import { useEffect, useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import Project from './Project'
import { allprojects } from '../data/data'


function Projects() {


  //Filters
  const filterActive =
    'w-72 text-left font-medium bg-subtitle bg-opacity-40 py-2 pl-2 text-text cursor-pointer'
  const filterNotActive =
    'w-72 text-left font-medium py-2 pl-2 text-text cursor-pointer'

  //Django
  const [django, setDjango] = useState(false)
  const handleDjango = () => {
    setDjango(!django)
  }
  //Fast API

  const [fastapi, setFastapi] = useState(false)
  const handleFastApi = () => {
    setFastapi(!fastapi)
  }

  useEffect(()=>{

  })

  return (
    <>
      <div className='container mx-auto mt-10'>
        <h2 className='text-5xl text-text font-bold'>Proyectos</h2>
        <hr className='mt-10 mb-5' />

        <div className='flex gap-10'>
          <div className='flex flex-col gap-3'>
            <div
              className={django ? filterActive : filterNotActive}
              onClick={handleDjango}
            >
              {django ? (
                <div className='flex justify-between'>
                  Django{' '}
                  <VscChromeClose className='mr-4 self-center text-subtitle text-opacity-50' />
                </div>
              ) : (
                'Django'
              )}
            </div>

            <div
              className={fastapi ? filterActive : filterNotActive}
              onClick={handleFastApi}
            >
              {fastapi ? (
                <div className='flex justify-between'>
                  Fast API{' '}
                  <VscChromeClose className='mr-4 self-center text-subtitle text-opacity-50' />
                </div>
              ) : (
                'Fast API'
              )}
            </div>
          </div>

          <div className='flex gap-10 flex-wrap justify-between'>

          {allprojects.map((p, index) => (
            <Project key={index} title={p.title} date={p.date} tech={p.tech} desc={p.desc} img={p.img}/>
          ))}

            
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
