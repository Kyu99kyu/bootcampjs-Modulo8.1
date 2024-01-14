import {obtenPacientesAsignadosAPediatria, obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios, activarProtocoloUrgencia} from "./motor";
import {pacientes} from "./modelo";

const listaDePacientes = obtenPacientesAsignadosAPediatria(pacientes);
const resultadoMenores10 = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
const activarProtocolo = activarProtocoloUrgencia(pacientes);
console.log({listaDePacientes});
console.log({resultadoMenores10})
console.log({activarProtocolo})