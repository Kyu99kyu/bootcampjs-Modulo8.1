import {obtenPacientesAsignadosAPediatria, obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios, activarProtocoloUrgencia,HayPacientesDePediatria} from "./motor";
import {pacientes} from "./modelo";

const listaDePacientes = obtenPacientesAsignadosAPediatria(pacientes);
const resultadoMenores10 = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
const activarProtocolo = activarProtocoloUrgencia(pacientes);
const finDeTurno = HayPacientesDePediatria(pacientes);

console.log({listaDePacientes});
console.log({resultadoMenores10})
console.log({activarProtocolo})
console.log({finDeTurno});