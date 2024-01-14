import {obtenPacientesAsignadosAPediatria, obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios, activarProtocoloUrgencia,HayPacientesDePediatria,cuentaPacientesPorEspecialidad} from "./motor";
import {Pacientes, pacientes, NumeroPacientesPorEspecialidad} from "./modelo";

const listaDePacientes : Pacientes[] = obtenPacientesAsignadosAPediatria(pacientes);
const resultadoMenores10 :Pacientes[] = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
const activarProtocolo : boolean = activarProtocoloUrgencia(pacientes);
const finDeTurno : boolean = HayPacientesDePediatria(pacientes);
const listaDeEspecialistas : NumeroPacientesPorEspecialidad  = cuentaPacientesPorEspecialidad(pacientes);

console.log({listaDePacientes});
console.log({resultadoMenores10})
console.log({activarProtocolo})
console.log({finDeTurno});
console.log({listaDeEspecialistas});