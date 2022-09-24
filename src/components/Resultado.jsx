import { useCallback, useMemo, useRef } from 'react' // VER EXPLICACION ""VIDEO 268""
import useCotizador from '../hooks/useCotizador'
import { MARCAS, PLANES } from '../constants'

const Resultado = () => {

    const { resultado, datos } = useCotizador()
    const { marca, plan, year } = datos
    const yearRef = useRef(year)

    // Para traerme el arreglo de marcas por su id y no por su posición en el array
    const [nombreMarca] = useCallback( 
      MARCAS.filter(m => m.id === Number(marca) ), 
      [resultado]
    )
    const [nombrePlan] = useCallback (
      PLANES.filter(p => p.id === Number(plan) ), 
      [resultado]
    )

    if(resultado === 0) {
        return null
    }

  return (
    <div className='bg-gray-200 text-center mt-5 p-5 shadow-lg rounded-sm'>
        <h2 className='text-gray-700 font-black text-3xl'>Resumen</h2>
        <p>
            <span className='font-bold text-gray-700'>Marca: </span>
            {nombreMarca.nombre}
        </p>
        <p>
            <span className='font-bold text-gray-700'>Año del auto: </span>
            {yearRef.current}
        </p>
        <p>
            <span className='font-bold text-gray-700'>Plan: </span>
            {nombrePlan.nombre}
        </p>
        <p className='text-4xl font-bold text-emerald-500'>
            <span className='text-2xl font-bold text-gray-700 block'>Total Cotización: </span>
            {resultado}
        </p>
    </div>
  )
}

export default Resultado