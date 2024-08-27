import { useEffect, useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import Project from './Project'
import { allprojects } from '../data/data'
import { filter } from '../lib/filter'

function Projects() {
  const handleSeeMore = () => {}

  const handleFilter = () => {
    filter(allprojects, django, fastapi)
  }

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

  //Svelte
  const [svelte, setSvelte] = useState(false)
  const handleSvelte = () => {
    setSvelte(!svelte)
  }

  //Java
  const [java, setJava] = useState(false)
  const handleJava = () => {
    setJava(!java)
  }

  //JS Vanilla
  const [vanilla, setVanilla] = useState(false)
  const handleVanilla = () => {
    setVanilla(!vanilla)
  }

  // NET
  const [net, setNet] = useState(false)
  const handleNet = () => {
    setNet(!net)
  }

  //React
  const [react, setReact] = useState(false)
  const handleReact = () => {
    setReact(!react)
  }

  useEffect(() => {
    handleFilter()
  })

  return (
    <>
      <div className='container mx-auto mt-10'>
        <h2 className='text-5xl text-text font-bold'>Proyectos</h2>
        <hr className='mt-10 mb-5' />

        <div className='flex gap-10'>
          <div className='flex flex-col gap-3 select-none'>
            <h4 className='font-bold text-text'>Backend</h4>

            <div
              className={django ? filterActive : filterNotActive}
              onClick={handleDjango}
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
              onClick={handleFastApi}
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
              onClick={handleJava}
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
              onClick={handleNet}
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
              onClick={handleVanilla}
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
              onClick={handleReact}
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
              onClick={handleSvelte}
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

          <div className='flex flex-col'>
            <div className='flex gap-10 flex-wrap justify-between'>
              {allprojects.map((p, index) => (
                <Project
                  key={index}
                  title={p.title}
                  date={p.date}
                  tech={p.tech}
                  desc={p.desc}
                  img={p.img}
                />
              ))}
            </div>
            <div className='relative flex py-5 items-center'>
              <div className='flex-grow border-t border-gray-200'></div>
              <span
                className='flex-shrink mx-4 text-gray-400 cursor-pointer'
                onClick={handleSeeMore}
              >
                Ver todo
              </span>
              <div className='flex-grow border-t border-gray-200'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
