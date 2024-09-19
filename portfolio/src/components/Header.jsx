function Header() {
  return (
    <>
      <div className='bg-white sticky top-0 z-50 shadow-sm'>
        <div className='container mx-auto p-4 sm:py-6  text-text font-medium'>
          <nav>
            <ul className='flex justify-start gap-5 sm:gap-10'>
              <li>
                <a
                  href='/#about'
                  className='hover:text-gray-700 transition-all'
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href='/#projects'
                  className='hover:text-gray-700 transition-all'
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href='/#contact'
                  className='hover:text-gray-700 transition-all'
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
