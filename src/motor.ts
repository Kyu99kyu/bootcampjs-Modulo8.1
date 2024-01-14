import {pacientes, Pacientes} from "./modelo";
import "./style.css";

const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    const pacientesDePediatria : Pacientes[] = [];
    for (let i = 0, j=0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad.match("Pediatra")) {
             pacientesDePediatria[j]= pacientes[i];
             j++;
        }
    }
    return pacientesDePediatria
  };

const listaDePacientes = obtenPacientesAsignadosAPediatria(pacientes);
console.log({listaDePacientes});
