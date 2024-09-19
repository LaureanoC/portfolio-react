import { FaInstagram } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa6'

function About() {
  return (
    <>
      <div className='bg-bg py-16 md:py-20' id='about'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='flex-col max-w-full lg:max-w-4xl mb-10 lg:mb-0'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text mb-6 lg:mb-10'>
                Laureano Neyén Chaves
              </h1>
              <h2 className='text-3xl sm:text-4xl md:text-5xl text-subtitle font-bold mb-4 lg:mb-5 text-left'>
                Desarrollador Fullstack
              </h2>
              <p className='text-base sm:text-lg md:text-xl text-text'>
                ¡Hola!, ¿cómo estás? Bienvenido/a a mi portafolio. Soy Laureano,
                un desarrollador fullstack entusiasta con una sólida experiencia
                en la creación de aplicaciones web. Me especializo en el uso de
                tecnologías modernas como React, Django y Tailwind, y tengo una
                fuerte base en desarrollo tanto frontend como backend. Aunque mi
                camino académico ha tomado diferentes rumbos, mi pasión por la
                tecnología y mi compromiso con el aprendizaje continuo me han
                permitido construir una sólida base técnica y profesional.
              </p>
              <div className='mt-8 lg:mt-10 text-text font-medium flex gap-5 md:gap-10'>
                <a target='_blank' href='https://github.com/LaureanoC'>
                  <div className='flex gap-1 items-center'>
                    <span className='underline'>Github</span>
                    <FaGithub size={20} />
                  </div>
                </a>
                <a
                  target='_blank'
                  href='https://www.instagram.com/laureano.chaves/'
                >
                  <div className='flex gap-1 items-center'>
                    <span className='underline'>Instagram</span>
                    <FaInstagram size={20} />
                  </div>
                </a>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/laureano-neyén-chaves/'
                >
                  <div className='flex gap-1 items-center'>
                    <span className='underline'>LinkedIn</span>
                    <FaLinkedinIn size={20} />
                  </div>
                </a>
              </div>
            </div>
            <div className='flex justify-center'>
              <img
                className='w-0 lg:w-[30rem] object-contain'
                src='./img/dev.png'
                alt='Laureano trabajando'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
