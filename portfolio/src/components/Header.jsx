function Header() {
  return (
    <>
      <div className='bg-white sticky top-0'>
        <div className='container mx-auto p-6 pl-0 text-text font-medium'>
          <nav>
            <ul className='flex'>
              <li className='mr-10'>
                <a href='#about'>Sobre mí</a>
              </li>
              <li className='mr-10'>
                <a href='#'>Proyectos</a>
              </li>
              <li className='mr-10'>
                <a href='#'>Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
