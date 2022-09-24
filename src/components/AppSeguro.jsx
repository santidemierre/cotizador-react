import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador"
import Spinner from "./Spinner"
import Resultado from "./Resultado"

const AppSeguro = () => {

  const { resultado, cargando } = useCotizador()

  return (
    <>
        <header className='my-10'>
            <h1 className='text-white text-center text-4xl font-black uppercase'>Cotizador de Seguro de Autos</h1>
        </header>

        <main className='bg-white md:w-2/3 lg:w-2/4 lg:mx-auto md:mx-2 shadow-lg rounded-sm p-10'>
            <Formulario />

            {cargando ? <Spinner /> : <Resultado />}
        </main>
    </>
  )
}

export default AppSeguro