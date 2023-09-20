import Paciente from "./Paciente"

const Listadopacientes = ({pacientes, setPacienteActual, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
            <h2 className="text-center text-3xl font-black">Listado de pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center"> Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
            
            {pacientes.map( paciente => <Paciente key={paciente.id} paciente={paciente} setPacienteActual={setPacienteActual} eliminarPaciente={eliminarPaciente} />)}
        </>
      ) : (
        <>
            <h2 className="text-center text-3xl font-black">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center"> Agrega pacientes y <span className="text-indigo-600 font-bold">aparecerán aquí</span></p>
        </>
      )}

    </div>
  )
}

export default Listadopacientes