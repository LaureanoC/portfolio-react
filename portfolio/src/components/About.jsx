function About() {
  return (
    <>
      <div className='bg-bg pt-20 pb-20' id='about'>
        <div className='container mx-auto'>
          <div className='flex justify-between'>
            <div className='flex-col  max-w-4xl'>
              <h1 className='text-7xl font-bold text-text mb-10'>
                Laureano Neyén Chaves
              </h1>
              <h2 className='text-5xl text-subtitle font-bold mb-5 text-left'>
                Desarrollador de Software
              </h2>
              <p className='text-base text-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                eu viverra massa. Praesent ultricies lectus id sem ornare
                maximus. Vivamus accumsan in massa non viverra. Nunc vestibulum
                vitae ante in bibendum. Duis posuere justo eget mi gravida
                vehicula sed sit amet justo. Ut ornare rutrum ipsum eu
                sollicitudin. Vivamus nisi libero, ultrices a quam quis, maximus
                suscipit justo. Etiam libero turpis, vulputate ut egestas eu,
                tincidunt ut mauris. Aenean pretium tempus est. Aliquam pharetra
                magna ac tortor maximus vulputate. Donec sem augue, vulputate
                tempus imperdiet eu, faucibus ac orci. Curabitur hendrerit
                lectus lorem, sit amet laoreet lorem posuere et. Proin a lacus a
                risus viverra faucibus id ac dolor.
              </p>
            </div>
            <img
              className='object-contain max-w-xl'
              src='./img/dev.png'
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default About
