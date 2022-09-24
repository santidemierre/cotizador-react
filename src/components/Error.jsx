import useCotizador from '../hooks/useCotizador'

const Error = () => {

    const { error } = useCotizador()

  return (
    <div className='border border-rose-600 bg-red-100 text-rose-600 p-3 text-center rounded-sm uppercase font-bold shadow-lg'>
        {error}
    </div>
  )
}

export default Error