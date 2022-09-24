import { useState,createContext } from "react"
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers'

const CotizadorContext = createContext() // De esta forma ya tenemos un context creado

// Provaider: ¿De dónde vienen los datos? ¿Cuál es la fuente de los datos? 
// Lo que esta antes del return es CotizadorProvider
// Lo que esta en el value={{}} es el Context.Provider

const CotizadorProvider = ({children}) => {

    const [ datos, setDatos ] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    // Definimos un error que va a estar global
    const [ error, setError ] = useState("")
    // Para pasar el resultado y mostrarlo por pantalla en AppSeguro. RECORDAR PONERLA EN DISPOSICION MÁS ABAJO
    const [ resultado, setResultado ] = useState(0)
    // Para simular que estamos llamando a una API
    const [ cargando, setCargando ] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
   }

   const cotizarSeguro = () => {
    // Una base
    let resultado = 2000
    // Obtener diferencia de años (El año actual - el año del auto)
    const diferencia = obtenerDiferenciaYear(datos.year)
    console.log(diferencia)

    // Hay que restar el 3% por cada año
    resultado -= ((diferencia * 3) * resultado) / 100
    

    // Americano más caro 15%
    // Europeo  un 30%
    // Asiático 5%
    resultado *= calcularMarca(datos.marca)
    

    // Plan Básico 20% más caro
    // Plan Completo 50% más caro
    resultado *= calcularPlan(datos.plan)

    // Formatear cantidad
    resultado = formatearDinero(resultado)

    // Comienzo arriba como faltse, 2° lo cambio a true y luego dentro del setTimeout lo vuelvo a reiniciar
    setCargando(true)

    setTimeout(() => {
        setResultado(resultado)
        setCargando(false)
    }, 2000);
    
   }
   

    return (
        <CotizadorContext.Provider
            value={{
                // Ponemos a disposición estos datos (lo uso en otro componente con useCotizador()):
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext