import { useEffect, useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import Project from './Project'
import { allprojects } from '../data/data'
import { filter } from '../lib/filter'

function Projects() {
  const [projects, setProjects] = useState(allprojects)

  // Filters
  const filterActive =
    'w-72 text-left font-medium bg-subtitle bg-opacity-40 py-2 pl-2 text-text cursor-pointer'
  const filterNotActive =
    'w-72 text-left font-medium py-2 pl-2 text-text cursor-pointer hover:bg-gray-50 '

  // States
  const [django, setDjango] = useState(false)
  const [fastapi, setFastapi] = useState(false)
  const [svelte, setSvelte] = useState(false)
  const [java, setJava] = useState(false)
  const [vanilla, setVanilla] = useState(false)
  const [net, setNet] = useState(false)
  const [react, setReact] = useState(false)

  useEffect(() => {
    const handleFilter = () => {
      const filteredProjects = filter(
        allprojects,
        django,
        fastapi,
        svelte,
        vanilla,
        java,
        net,
        react
      )
    
      setProjects(filteredProjects)
      
    }

    handleFilter()
  }, [django, fastapi, svelte, vanilla, java, net, react])

  return (
    <>
    <div id='projects' className='pt-10'></div>
      <div className='container mx-auto mt-10'>
        <h2 className='text-5xl text-text font-bold' >
          Proyectos
        </h2>
        <hr className='mt-10 mb-5' />

        <div className='flex gap-10'>
          <div className='flex flex-col gap-3 select-none mb-40'>
            <h4 className='font-bold text-text'>Backend</h4>

            <div
              className={django ? filterActive : filterNotActive}
              onClick={() => setDjango(!django)}
            >
              {django ? (
                <div className='flex justify-between'>
                  Django
                  <VscChromeClose className='mr-4 self-center text-subtitle text-opacity-50' />
                </div>
              ) : (
                'Django'
              )}
            </div>

            <div
              className={fastapi ? filterActive : filterNotActive}
              onClick={() => setFastapi(!fastapi)}
            >
              {fastapi ? (
                <div className='flex justify-between'>
                  Fast API
                  <VscChromeClose className='mr-4 self-center text-subtitle text-opacity-50' />
                </div>
              ) : (
                'Fast API'
              )}
            </div>

            <div
              className={java ? filterActive : filterNotActive}
              onClick={() => setJava(!java)}
            >
              {java ? (
                <div className='flex justify-between'>
                  Java
                  <VscChromeClose className='mr-4 self-center text-subtitle text-opacity-50' />
                </div>
              ) : (
                'Java'
              )}
            </div>

            <div
              className={net ? filterActive : filterNotActive}
              onClick={() => setNet(!net)}
            >
              {net ? (
                <div className='flex justify-between'>
                  .NET
                  <VscChromeClose className='mr-4 self-center text-subtitle text-opacity-50' />
                </div>
              ) : (
                '.NET'
              )}
            </div>

            <hr />
            <h4 className='font-bold text-text'>Frontend</h4>

            <div
              className={vanilla ? filterActive : filterNotActive}
              onClick={() => setVanilla(!vanilla)}
            >
              {vanilla ? (
                <div className='flex justify-between'>
                  Javascript Vanilla
                  <VscChromeClose className='mr-4 self-center text-subtitle text-opacity-50' />
                </div>
              ) : (
                'Javascript Vanilla'
              )}
            </div>

            <div
              className={react ? filterActive : filterNotActive}
              onClick={() => setReact(!react)}
            >
              {react ? (
                <div className='flex justify-between'>
                  React
                  <VscChromeClose className='mr-4 self-center text-subtitle text-opacity-50' />
                </div>
              ) : (
                'React'
              )}
            </div>

            <div
              className={svelte ? filterActive : filterNotActive}
              onClick={() => setSvelte(!svelte)}
            >
              {svelte ? (
                <div className='flex justify-between'>
                  Svelte
                  <VscChromeClose className='mr-4 self-center text-subtitle text-opacity-50' />
                </div>
              ) : (
                'Svelte'
              )}
            </div>
          </div>

          <div className='flex flex-col flex-grow'>
            <div className='flex gap-10 flex-wrap justify-between overflow-y-auto max-h-[35rem]'>

              {projects.length > 0 ? projects.map((p, index) => (
                <Project
                  key={index}
                  title={p.title}
                  date={p.date}
                  tech={p.tech}
                  desc={p.desc}
                  img={p.img}
                  id={p.id}
                />
              )) : 'No se encontraron resultados.' }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
