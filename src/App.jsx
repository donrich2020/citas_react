import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header'
import Formulario from './components/Formulario'
import Listadopacientes from './components/Listadopacientes'

function App() {

  const [pacientes, setPacientes] = useState([])
  const [pacienteActual, setPacienteActual] = useState({})

  useEffect(() => {
    const obtenerLocalStorage = ()=> {
      const pacientesLocal = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLocal)
    }
    obtenerLocalStorage()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    console.log('Asi quedan', pacientesActualizados)
    setPacientes(pacientesActualizados);
  }
  
  return (
    <div className='container mx-auto pt-5'>
      <Header />
      <div className='mt-12 flex'>
        <Formulario pacientes={pacientes} setPacientes={setPacientes} pacienteActual={pacienteActual} setPacienteActual={setPacienteActual} />
        <Listadopacientes pacientes={pacientes} setPacienteActual={setPacienteActual} eliminarPaciente={eliminarPaciente} />
      </div>
    </div>
  )
}

export default App
