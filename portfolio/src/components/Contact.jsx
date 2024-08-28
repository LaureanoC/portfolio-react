import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    const api = axios.create({
      baseURL: 'https://formspree.io/f/xrbzjkad',
    })
    
    const response = await toast.promise(api.post('/', data),{
      loading:'Enviando mensaje',
      success:'El mensaje fue enviado con éxito.',
      error:'Ha ocurrido un error.'
    })
    console.log(response.status)
    if (response.status) {
      reset()
    }
    
  })

  return (
    <>
      <div className='pt-20 mt-24 ' id='contact'>
        <div className='container mx-auto'>
          <h2 className=' text-5xl text-text font-bold mb-10'>¡Conectemos!</h2>
          <hr className=' mb-10' />
        </div>
        <div className='container mx-auto flex justify-between'>
          <div className='flex flex-col justify-between'>
            <p>
              ¿Tienes un proyecto en mente? Estoy disponible para colaborar en
              ideas creativas y nuevos desafíos. Déjame un mensaje y te
              responderé lo antes posible.
            </p>
            <h4 className='text-subtitle font-bold text-4xl my-10'>
              Envíame tus detalles
            </h4>
            <form
              onSubmit={onSubmit}
              className='flex flex-col gap-20 max-w-min'
            >
              <div className='flex gap-20'>
                <div className='relative h-11 w-full min-w-[200px]'>
                  <input
                    placeholder='Nombre'
                    className='peer h-full w-[23rem] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-text outline outline-0 transition-all placeholder-shown:border-text-text focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100'
                    name='name'
                    {...register('name', { required: true })}
                  />
                  <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-[23rem] select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-text peer-focus:after:scale-x-100 peer-focus:after:text-text peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-text">
                    Nombre
                  </label>
                  {errors.name && (
                    <span className='text-sm text-red-700'>
                      El nombre es requerido.
                    </span>
                  )}
                </div>

                <div className='relative h-11 w-full min-w-[200px]'>
                  <input
                    placeholder='Correo Electrónico'
                    className='peer h-full w-[23rem] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-text outline outline-0 transition-all placeholder-shown:border-text-text focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100'
                    name='email'
                    {...register('email', {
                      required: 'El correo electrónico es requerido.',
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'El formato del correo no es válido.',
                      },
                    })}
                  />
                  <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-[23rem] select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-text peer-focus:after:scale-x-100 peer-focus:after:text-text peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-text">
                    Correo Electrónico
                  </label>
                  {errors.email && (
                    <span className='text-sm text-red-700'>
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              <div className='flex flex-col'>
                <textarea
                  className='-mt-2 border-b-1s text-text'
                  placeholder='Mensaje'
                  name='message'
                  {...register('message', { required: true })}
                ></textarea>
                {errors.message && (
                  <span className='text-sm mt-1 text-red-700'>
                    El mensaje es requerido.
                  </span>
                )}
              </div>

              <button
                type='submit'
                className='self-end font-medium text-white bg-text py-2 px-10 rounded'
              >
                Enviar
              </button>
            </form>
          </div>
          <img
            src='./img/email.jpg'
            className='w-[30rem] object-contain ml-10'
          />
        </div>
      </div>
    </>
  )
}

export default Contact
