import { Fragment } from 'react' // Importamos Fragment porque vamos a iterar sobre <Fregment> no puede ser <>
import { MARCAS, YEARS, PLANES } from '../constants/index'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'

const Formulario = () => {

    const { error, setError, datos, handleChangeDatos, cotizarSeguro } = useCotizador()

    // Validamos los datos del formlario
    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')) {
            setError('Todos los campos son Obligatorios')
            return
        }
        // Eliminamos el error si no hay error
        setError('')
        cotizarSeguro()

    }

  return (
    <>
        {error && <Error /> }
        <form
            onSubmit={handleSubmit}
        >
            <div className="my-5">
                <label className="block mb-3 font-bold uppercase">
                    Marca
                </label>
                <select 
                    name='marca'
                    className="w-full p-3 bg-white border border-gray-200 shadow-lg"
                    onChange={e => handleChangeDatos(e)}
                    value={datos.marca}
                >
                    <option>-- Selecciona Marca --</option>
                    {MARCAS.map(marca => ( 
                        <option
                            key={marca.id}
                            value={marca.id}
                        >

                            {marca.nombre}
                        </option>
                    ))}
                </select>
            </div> {/* Marca */}

            <div className="my-5">
                <label className="block mb-3 font-bold uppercase">
                    Año
                </label>
                <select 
                    name='year'
                    className="w-full p-3 bg-white border border-gray-200 shadow-lg"
                    onChange={e => handleChangeDatos(e)}
                    value={datos.year}
                >
                    <option>-- Selecciona el Año --</option>
                    {YEARS.map(year => ( 
                        <option
                            key={year}
                            value={year}
                        >

                            {year}
                        </option>
                    ))}
                </select>
            </div> {/* Año */}

            <div className="my-5">
                <label className="block mb-3 font-bold uppercase">
                    Elige un plan
                </label>

                <div className='flex gap-3'>
                    {PLANES.map(plan => (
                        <Fragment key={plan.id} >
                            <label>
                                {plan.nombre}
                            </label>
                            <input 
                                type="radio"
                                name="plan"
                                value={plan.id}
                                onChange={e => handleChangeDatos(e)}
                            />
                        </Fragment>
                    ))}
                </div>
            </div> {/* Planes */}

            <input 
                type="submit"
                className='w-full bg-zinc-500 hover:bg-zinc-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold rounded-sm shadow-lg'
                value="Cotizar"
            />

        </form>
    </>
  )
}

export default Formulario