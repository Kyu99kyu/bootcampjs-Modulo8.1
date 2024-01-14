import {obtenPacientesAsignadosAPediatria, obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios} from "./motor";
import {pacientes} from "./modelo";

const listaDePacientes = obtenPacientesAsignadosAPediatria(pacientes);
const resultadoMenores10 = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log({listaDePacientes});
console.log({resultadoMenores10})