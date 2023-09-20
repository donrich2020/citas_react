import { useState, useEffect } from "react"
import Errores from "./Errores";

const Formulario = ({ pacientes, setPacientes, pacienteActual, setPacienteActual }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)

  // Hacer algo solo si una variable cambia, que es la que se pone en el arreglo al final
  useEffect(()=> {
    if( Object.keys(pacienteActual).length > 0 ) {
      setNombre(pacienteActual.nombre)
      setPropietario(pacienteActual.propietario)
      setEmail(pacienteActual.email)
      setFecha(pacienteActual.fecha)
      setSintomas(pacienteActual.sintomas)
    }
  }, [pacienteActual])

  // Si queremos que se ejecute solo cuando el componente se cargue dejamos vacio el arreglo al final
  useEffect(()=> {
    console.log('El componente esta listo')
  }, [])

  const generarId = ()=> {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e)=> {
    e.preventDefault();

    if([nombre, propietario, email, fecha, sintomas].includes('') ) {
      setError(true)
      return
    }
    setError(false)
    
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if(pacienteActual.id) {
      // Editando un paciente
      objetoPaciente.id = pacienteActual.id
      const pacientesActualizados = pacientes.map(paciente => paciente.id === pacienteActual.id ? objetoPaciente : paciente)

      setPacientes(pacientesActualizados)
      setPacienteActual({})

    } else {
      // Agregando nuevo paciente
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="text-center text-3xl font-black">Seguimiento</h2>
      <p className="text-xl mt-5 text-center mb-10">Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        { error && <Errores mensaje='Todos los campos son obligatorios' /> }
        <div className="mb-6">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
          <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" type="text" placeholder="Nombre de la mascota" value={nombre} onChange={ (e)=> setNombre(e.target.value) } />
        </div>
        <div className="mb-6">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
          <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" type="text" placeholder="Nombre del propietario" value={propietario} onChange={(e)=>setPropietario(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" type="email" placeholder="Email de contacto" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" type="date" value={fecha} onChange={(e)=>setFecha(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
          <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" placeholder="Describe los síntomas" value={sintomas} onChange={(e)=>setSintomas(e.target.value)} />
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={pacienteActual.id ? 'Editar Paciente' : 'Agregar Paciente'} />
      </form>
    </div>
  )
}

export default Formulario