import {useState} from 'react'
import Mensaje from './Mensaje'
/** Solo se requiere aqui crear un useState para mandar un mensaje por esa razon no se crea desde app.jsx*/

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

  const [mensaje,setMensaje] = useState('')

  const handlePresupuesto = (a) =>{
    a.preventDefault()

    if(!presupuesto || presupuesto < 0){
      setMensaje('No es un presupuesto valido')
      
      setTimeout(() => {
        setMensaje('')
    }, 2000);
      return; 
    }

    setMensaje('')
    setIsValidPresupuesto(true)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
            <label>
                Definir Presupuesto
            </label>
            <input
                className='nuevo-presupuesto'
                type='number'
                placeholder='Añade tu Presupuesto'
                value={presupuesto}
                onChange={a => setPresupuesto(Number(a.target.value))}
            />
        </div>
        <input 
            type="submit" 
            value="Añadir"
        />
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto
