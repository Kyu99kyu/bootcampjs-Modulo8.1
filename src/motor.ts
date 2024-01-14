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

export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
      return true;
    }
  }
  return activarProctolo;
};

export const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let paCasa = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      return paCasa;
    } 
  }
  return true;
};