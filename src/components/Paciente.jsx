const Paciente = ({paciente, setPacienteActual, eliminarPaciente}) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const handleEliminar = ()=> {
    const respuesta = confirm('¿Seguro que deseas eliminar este paciente?')

    if(respuesta) {
      eliminarPaciente(id)
    }
  }
  return (
    <div className="mx-5 my-3 px-5 py-10 bg-white">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">{nombre}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{propietario}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case">{email}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: <span className="font-normal normal-case">{fecha}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: <span className="font-normal normal-case">{sintomas}</span></p>

        <div className="flex justify-between mt-5">
          <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded font-bold uppercase" type="button" onClick={()=> setPacienteActual(paciente)}>Editar</button>

          <button className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded font-bold uppercase" type="button" onClick={handleEliminar}>Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente