import {Pacientes} from "./modelo";
import "./style.css";

export const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    const pacientesDePediatria : Pacientes[] = [];
    for (let i = 0, j=0; i < pacientes.length && !pacientes[i].especialidad.match("Pediatra"); i++) {
             pacientesDePediatria[j]= pacientes[i];
             j++;
    }
    return pacientesDePediatria
  };

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    const pacientesPediatriaMenos10 : Pacientes[] = [];
    for (let i = 0, j=0; i < pacientes.length && pacientes[i].edad < 10; i++) {
      if (pacientes[i].especialidad.match("Pediatra")) {
        pacientesPediatriaMenos10[j]= pacientes[i];
        j++;
      }
    }
    return pacientesPediatriaMenos10;
  };