import PropTypes from 'prop-types'

function Project(props) {

  return (
    <>
      <div className='flex flex-col max-w-xl'>
        <img src={`${props.img}`} className='w- mb-7 rounded-b-lg' />
        <div className='flex gap-2'>
          <span className='mr-auto text-gray-400 text-xs'>{props.date}</span>
          {props.tech.map((tech, index) => (
            <div
              className='font-medium bg-gray-100 py-1 px-2 text-xs text-gray-500 rounded-full'
              key={index}
            >
              {tech}
            </div>
          ))}
        </div>
        <h3 className='text-text font-bold text-xl mb-4 mt-2'>{props.title}</h3>
        <p className='mb-4'>{props.desc}</p>
        <button
          type='button'
          className='max-w-24 self-end mt-auto text-white bg-text py-1 px-2 rounded'
        >
          Ver más
        </button>
      </div>
    </>
  )
}

Project.propTypes = {
  date: PropTypes.string,
  tech: PropTypes.array,
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
}

export default Project
